<script>
  import { doc, getDoc } from "firebase/firestore";
  import { onMount } from 'svelte';
  import IconButton from '@smui/icon-button'
  import Button, { Label } from '@smui/button';
  import CircularProgress from '@smui/circular-progress';
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import Paper, { Title, Content } from '@smui/paper';
  import GoogleMap from '../../../components/GoogleMap.svelte'
  import PanoView from '../../../components/PanoView.svelte'
  import { getDb } from '$lib/firebase.ts'
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { language } from '$lib/stores.js'
  import Carousel from 'svelte-carousel'

  let db = getDb()

  export let data;
  let googleReady;
  let gym;
  let lang;
  let scenes;
  let scenesLoaded = false
  let gymLoaded = false
  let location;
  let carousel;

  const loadData = async () => {
    const docRef = doc(db, "gyms", data.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const response = await fetch(`https://meetfreed4.s3.amazonaws.com/${data.id}/scenes.json`);
      const scenesData = await response.json();
      gym = {id:data.id,...docSnap.data()}
      scenes = scenesData
      gymLoaded = true
      location = { lat: gym.lat, lng: gym.lng}
      googleReady = true
    }
  }

  const loadScenes = async () => {
    const response = await fetch(`https://meetfreed4.s3.amazonaws.com/${data.id}/scenes.json`);
    try {
      scenes = await response.json();
      scenesLoaded = true
      loadData()
    }catch (e) {
      loaded = false
    }
  }
  loadScenes()

  language.subscribe( v => { lang = v })
</script>
<svelte:head>
  <title>{gym ? gym?.name+' : fitsuz' : 'fitsuz'}</title>
</svelte:head>
{#if gymLoaded}
  <div class="title">
    <caption class="caption">Academia</caption>
    <h1 class="name">{gym ? gym.name : ''}</h1>
  </div>
  <div>
    <LayoutGrid style="margin:1%">
      <Cell spanDevices={{desktop:8, tablet:12, mobile:12}}>
        <Carousel
          autoplay>
          <div slot="prev"></div>
          <img class="gym-pic" src="/banner/gym.jpg"/>
          <img class="gym-pic" src="/banner/gym.jpg"/>
          <img class="gym-pic" src="/banner/gym.jpg"/>
          <div slot="next"></div>
        </Carousel>
      </Cell>
      <Cell spanDevices={{desktop:4, tablet:12, mobile:12}}>
        <div style="margin:1%; width:90%">
            <Paper color="primary" style="padding:0.8vh, width:90%" elevation=2>
              <div class="horizontal">
                <div>
                  <IconButton style="margin-left:-1vh" class="material-icons">schedule</IconButton>
                </div>
                <div>
                  <h4 style="margin-top:1%; margin-bottom:1vh">Horario de funcionament</h4>
                  <div class="horizontal">
                    <div style="width:60%">
                      <h5>Seg a Sex</h5>
                      <h5>Seb</h5>
                      <h5>Dom/Feriados</h5>
                    </div>
                    <div>
                      <h5 style="display:block">6h - 23h</h5>
                      <h5 style="display:block">8h - 17h</h5>
                      <h5 style="display:block">8h - 14h</h5>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
            <div style="height:2vh"></div>
            <Paper color="primary" style="padding:0.8vh, width:90%, margin-top: 20vh" elevation=2>
              <div class="horizontal">
                <div>
                  <IconButton style="margin-left:-1.5vh" class="material-icons">location_on</IconButton>
                </div>
                <div class="address">
                  <h4 style="margin-top:0; margin-bottom:1vh">Endereço</h4>
                  <caption style="display:block">Quadra QNN 31 Área Especial E - Ceilândia Norte Brasília</caption>
                  <div class="map-container">
                    {#if googleReady && gymLoaded}
                      <GoogleMap location={location} gym={gym}/>
                    {:else}
                      <div style="display: flex; justify-content: center; align-items: center; height:50vh">
                        <CircularProgress style="height: 70px; width: 70px;"  indeterminate/>
                      </div>
                    {/if}
                  </div>
                </div>
              </div>
            </Paper>
            <div style="margin-top:3%">
              <div style="display:flex; justify-content:center">
                <Button h3 variant="raised" color="secondary">
                  <Label>{(lang == 'en') ? "Book a Free Session" : "sessão gratuita"}</Label>
                </Button>
              </div>
            </div>
        </div>
      </Cell>
    </LayoutGrid>
  </div>
{/if}
<div class="tour-container">
  <div class="title">
    <h2 class="name">Tour Virtual</h2>
  </div>
  {#if scenesLoaded}
    <PanoView gymId={data.id} scenesData={scenes}/>
  {/if}
</div>

<style lang="scss">
  @import '../../styles.scss';
  .main-image {
    height: 20vw
  }
  .gym-pic {
    width: 100%;
    height: 100%;
  }
  h1.name {
    margin :0;
    height: 8vh;
  }
  h5 {
    margin : 1vh
  }
  div.horizontal {
    display: flex;
    flex-direction: horizontal;
    margin-top: -1vh
  }
  .address {
    width: 85%;
    height: 30vh;
    margin : 1%;
  }
  .map-container {
    height:80%;
    width:95%
  }
  div.title {
    margin-left: 3%;
    margin-top: 2%;
    margin-bottom: -1%
  }
  @media (max-width: 1680px) {
    .main-image {
      height: 38vw
    }
  }
  @media (max-width: 800px) {
    div.info {
      width: 100%;
      display: flex;
      justify-content: center
    }
    .gym-pic {
      width: 100%;
      height: 40vh;
      object-fit: fill;
    }
    .map-container {
      width: 100%;
      height: 35vh;
      margin : 1%;
    }
    .title {
      margin-left: 3%;
      margin-top: 2%;
      margin-bottom: -1%
    }
    .cap {
      margin-top: 1vh;
      margin-bottom:-8vh;
    }
    h1.name {
      margin :0;
      height: 10vh;
    }
    .map-container {
      height:65%;
      width:100%
    }
    .caption {
      margin-bottom: -5vh
    }
  }
</style>
