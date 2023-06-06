<div id="panorama" bind:this={panoEelement}></div>
hola
<div>
  <button on:click="{uploadGyms}"> pego </button>
</div>
<style lang="scss">
  @import '../styles.scss';
  #panorama {
      width: 90%;
      height: 800px;
  }
</style>
<script>
  import { collection, addDoc } from "firebase/firestore";
  import Tooltip, { Wrapper } from '@smui/tooltip'
  import { onMount } from 'svelte';
  import { getDb } from '$lib/firebase.ts';

  let db = getDb()
  let panoEelement;
  let Marzipano;
  let viewer;
  let scenes;
  let autorotate;
  let scenesData
  let gym = {
    name: "Vibe",
    featured: true,
    location : "Porto",
    lat : 38.7523383,
    lng : -9.2
  }

  let uploadGyms = () => {
    addGym()
  }

  async function addGym() {
      const docRef = await addDoc(collection(db, "gyms"), gym)
      console.log(docRef.id);
  }

  onMount(async () => {
    Marzipano = (await import('marzipano')).default;
    const response = await fetch("https://meetfreed4.s3.amazonaws.com/vibe/scenes.json");
    scenesData = await response.json();

    var viewerOpts = {
      controls: {
        mouseViewMode: 'drag'
      },
      stage: {
        progressive: true
      }
    }

    autorotate = Marzipano.autorotate({
      yawSpeed: 0.03,
      targetPitch: 0,
      targetFov: Math.PI/2
    });

    viewer = new Marzipano.Viewer(panoEelement, viewerOpts)
    loadScenes()
  });

  const loadScenes = () => {
    scenes = scenesData.scenes.map((data) => {
      var baseUrl = "https://meetfreed4.s3.amazonaws.com/vibe"
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
  }

  const createLinkHotspotElement = (hotspot)=>{
    var wrapper = document.createElement('div')
    wrapper.classList.add('link-hotspot');

    var icon = document.createElement('img');
    icon.src = 'tour_icons/link.png';
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
