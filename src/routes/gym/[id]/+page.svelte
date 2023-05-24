<script>
  import { onMount } from 'svelte';
  import GoogleMap from '../../../components/GoogleMap.svelte'

  export let data;
  let googleReady;
  let tour = {}
  let gym = data.gym
  console.log(gym);

  onMount(() => {
    	googleReady = true
      window.pannellum.viewer('panorama', {
        "default" : {
          "firstScene": "0",
          "sceneFadeDuration": 1000
        },
        "scenes" : gym.scenes
      })
  })
</script>

<div class="main-image">
  <img class="banner" src="../banner/gym.jpg" alt=''/>
</div>
<div class="info">
  <div style="width:100%">
    <h1>{data.gym ? data.gym.name : ''}</h1>
  </div>
  <div class="map-container">
    {#if googleReady}
      <GoogleMap/>
    {/if}
  </div>
</div>
<div class="tour-container">
  <div id="panorama" class="panorama"></div>
</div>

<style>
  .main-image {
    height: 20vw
  }
  img.banner {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 0%;
  }
  div.info {
    padding-left : 5vw;
    padding-right : 5vw;

    display: flex;
    flex-direction: row
  }
  .map-container {
    width: 70vw;
    height: 40vh;
  }
  div.panorama {
    width: 600px;
    height: 400px;
  }
  @media (max-width: 1680px) {
    .main-image {
      height: 30vw
    }
  }
</style>
