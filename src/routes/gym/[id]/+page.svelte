<script>
  import { onMount } from 'svelte';
  import IconButton from '@smui/icon-button'
  import Button, { Label } from '@smui/button';
  import GoogleMap from '../../../components/GoogleMap.svelte'
  import PanoView from '../../../components/PanoView.svelte'
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';


  export let data;
  let googleReady;
  let tour = {}
  let gym = data.gym
  let scenes = data.scenes;
  let location;

  onMount(() => {
      location = { lat: gym.lat, lng: gym.lng}
      googleReady = true
  })
</script>
<div class="tour-container">
  <PanoView gymId={gym.id} scenesData={scenes}/>
</div>
<div class="info">
  <div style="width:100%;display:flex;display-orientation:vertical">
    <div style="width:5vw"></div>
    <div>
      <h2>{data.gym ? data.gym.name : ''}</h2>
      <div class="horizontal">
        <IconButton class="material-icons">phone</IconButton>
        <h6>+44 xxx xxx xx</h6>
      </div>
      <div class="horizontal">
        <IconButton class="material-icons">public</IconButton>
        <h6> www.vibe.com</h6>
      </div>
      <div class="horizontal">
        <IconButton class="material-icons">date_range</IconButton>
        <h6> 8h00 - 20h00</h6>
      </div>
      <div class="horizontal">
        <div></div>
        <Button h3 variant="raised" color="secondary">
          <Label>Book a Free Session</Label>
        </Button>
        <div></div>
      </div>
    </div>
    <div style="width:20%"></div>
  </div>
  <div class="map-container">
    {#if googleReady}
      <GoogleMap location={location} gym={gym}/>
    {/if}
  </div>
</div>

<style lang="scss">
  @import '../../styles.scss';
  .main-image {
    height: 20vw
  }
  h6 {
    margin: 1vw;
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
  div.horizontal {
    display: flex;
    flex-direction: horizontal;
  }
  .map-container {
    width: 70vw;
    height: 35vh;
  }
  @media (max-width: 1680px) {
    .main-image {
      height: 38vw
    }
    div.info {
      padding-left : 3vw;
      padding-right : 3vw;
      display: flex;
      flex-direction: row
    }
  }
</style>
