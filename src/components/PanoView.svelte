<script>
  import { onMount } from 'svelte';
  import CircularProgress from '@smui/circular-progress';

  export let scenesData;
  export let gymId;
  let panoEelement;
  let Marzipano;
  let viewer;
  let scenes;
  let autorotate;
  let loading = true

  onMount(async () => {
    Marzipano = (await import('marzipano')).default;

    var viewerOpts = {
      controls: {
        mouseViewMode: 'drag'
      }
    }
    autorotate = Marzipano.autorotate({
      yawSpeed: 0.03,
      targetPitch: 0,
      targetFov: Math.PI/2
    });

    viewer = new Marzipano.Viewer(panoEelement, viewerOpts)
    loadScenes()
  })

  const loadScenes = () => {
    scenes = scenesData.scenes.map((data) => {
      var baseUrl = "https://meetfreed4.s3.amazonaws.com/"+gymId
      var source = Marzipano.ImageUrlSource.fromString(baseUrl + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",{
        cubeMapPreviewUrl: baseUrl + "/" + data.id + "/preview.jpg" });
      var geometry = new Marzipano.CubeGeometry(data.levels);
      var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100*Math.PI/180, 120*Math.PI/180);
      var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

      var scene = viewer.createScene({
          source: source,
          geometry: geometry,
          view: view,
        });

      data.linkHotspots?.forEach((hotspot) => {
        var element = createLinkHotspotElement(hotspot)
        scene.hotspotContainer().createHotspot(element, {yaw: hotspot.yaw, pitch: hotspot.pitch})
      })

      scene.data = data
      return {
        data: data,
        scene: scene,
        view: view
      }
    })

    scenes[0].scene.switchTo()

    let canvas = document.getElementsByTagName('canvas')[0]
    canvas.classList.add('tour-container')
    loading = false
  }

  const createLinkHotspotElement = (hotspot)=>{
    var wrapper = document.createElement('div')
    wrapper.classList.add('link-hotspot');

    var icon = document.createElement('img');
    icon.src = '/tour_icons/link.png';
    icon.classList.add('link-hotspot-icon');

    var transformProperties = [ '-ms-transform', '-webkit-transform', 'transform' ];
    for (var i = 0; i < transformProperties.length; i++) {
      var property = transformProperties[i];
      icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
    }

    wrapper.addEventListener('click', function() {
      switchScene(findSceneById(hotspot.target));
    });

    var tooltip = document.createElement('div');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = findSceneDataById(hotspot.target).name;
    wrapper.appendChild(icon);
    wrapper.appendChild(tooltip);

    return wrapper
  }

  let findSceneDataById = (id) => {
    let found = null
    scenesData.scenes.forEach((scene) => {
      if (scene.id === id) {
        found = scene
        return;
      }
    })
    return found;
  }

  let findSceneById = (id) => {
    let found = null
    scenes.forEach((scene) => {
      if (scene.data.id === id) {
        found = scene
        return;
      }
    })
    return found;
  }

  let switchScene = (scene) => {
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
    scene.view.setParameters(scene.data.initialViewParameters);
    scene.scene.switchTo();
    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);
  }
</script>
{#if loading}
  <div style="display: flex; justify-content: center; align-items: center; height:50vh">
    <CircularProgress style="height: 70px; width: 70px;"  indeterminate/>
  </div>
{/if}
<div class="panorama" bind:this={panoEelement}></div>

<style>
  div.panorama {
    width: 100%;
    height: 75vh;
  }
</style>
