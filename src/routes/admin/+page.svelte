
<div id="panorama"></div>
hola
<div bind:this={pepe}>

</div>
<style>
  #panorama {
      width: 600px;
      height: 400px;
  }
</style>
<script>
  import { onMount } from 'svelte';
  let pepe
  const imgUrl = new URL('../../2.jpg', import.meta.url).href
  console.log(imgUrl);

  onMount(() => {
    window.pannellum.viewer('panorama', {
      "default": {
            "firstScene": "c1",
            "author": "Pepito T",
            "sceneFadeDuration": 1000
        },

      "scenes":{
        "c1": {
            "title": "Mason Circle",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": imgUrl,
            "horizonPitch ": 0,
            "horizonRoll " : 100,
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Spring House or Dairy",
                    "sceneId": "house"
                }
            ]
        },
        "house": {
            "title": "Spring House or Dairy",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "https://pannellum.org/images/alma.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 37.1,
                    "type": "scene",
                    "text": "Mason Circle",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        }
      }
    });

  });

</script>
