<svelte:head>
  <title>Fitsuz</title>
</svelte:head>
<script>
  import TopBar from '../components/TopBar.svelte'
  import GymCard from '../components/GymCard.svelte'
  import { onMount } from 'svelte';
  import { getDb } from '$lib/firebase.ts'
  import { collection, query, where, getDocs } from "firebase/firestore";
  import LayoutGrid, { Cell } from '@smui/layout-grid';
  import Paper, { Title, Content } from '@smui/paper';
  import Autocomplete from '@smui-extra/autocomplete';
  import { Text } from '@smui/list';
  import { language } from '$lib/stores.js'
  import IconButton from '@smui/icon-button'
  import CircularProgress from '@smui/circular-progress';

  let corousel_idx = 0
  let value = ''
  let lang = 'en';
  let db = getDb()

  const carousel_photos = [
    'banner/banner1.png',
    'banner/banner2.jpg',
  ]

  setInterval(() => {
    corousel_idx = (corousel_idx + 1) % carousel_photos.length
  },(10000));

  let featured = []
  onMount(() => {
    getFeatruedGyms()
  })

  const getFeatruedGyms = async() => {
    const q = query(collection(db, "gyms"), where("featured", "==", true));
    const querySnapshot = await getDocs(q);
    let result = []
    querySnapshot.forEach((doc) => {
      result.push({id:doc.id,...doc.data()})
    });
    featured = result
  }

  language.subscribe( v => { lang = v })

</script>

<div class="body">
  <div class="corousel">
    {#each [carousel_photos[corousel_idx]] as src (corousel_idx)}
      <img class="corousel" {src} alt=''/>
    {/each}
  </div>
  <div class="horizontal">
    <div class="centered-title">
      <h3>{(lang == 'en') ? 'Find the place to exersice closer to you' : 'Encontre a academia mais próxima!'}</h3>
    </div>
  </div>
  <div class="search-box-container">
    <img class="search" src="https://meetfreed4.s3.amazonaws.com/public/wallpaper1.jpg"/>
      <div class="search-box">
        <Paper color="primary" style="padding:0.8vh; padding-bottom:2vh" elevation=5>
          <div style="display:flex; flex-direction:horizontal">
            <IconButton class="material-icons">search</IconButton>
            <Autocomplete
              bind:value
              showMenuWithNoInput={false}
              style="width: 90%"
              textfield$style="width: 90%;"
              label={(lang == 'en')? 'Find gyms near you' : 'Escolher academia'}>
              <Text
                slot="loading"
                style="display: flex; width: 100%; justify-content: center; align-items: center;">
                <CircularProgress style="height: 24px; width: 24px;" indeterminate />
              </Text>
            </Autocomplete>
          </div>
        </Paper>
      </div>
  </div>
  <div class="horizontal">
    <div class="centered-title">
      <h2>{(lang == 'en') ? 'Our Partners' : 'Nossas academias'}</h2>
    </div>
  </div>
  <div style="margin-bottom:10vh">
    <LayoutGrid>
      {#each featured as gym}
        <Cell spanDevices={{desktop: 4, phone: 6 }}>
          <GymCard gym={gym}/>
        </Cell>
      {/each}
    </LayoutGrid>
  </div>
  <div class="section">
    <div style="height:100%">
      <img style="height:120%;margin-left:25vw;" src="banner/banner3.png" />
    </div>
  </div>
</div>

<style lang="scss">
  @import 'styles.scss';

  div.section {
    height: 45vw
  }
  div.corousel {
    height: 28vw;
    margin: 1vw;
  }
  img.corousel {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 0%;
  }
  img.search {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 20%;
    opacity: .8;
  }
  .search-box-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40vh;
    margin: 1vw;
  }
  .search-box {
    position: absolute;
    width: 50vw;
  }
  @media (max-width: 1680px) {
      div.corousel {
        height: 35vw
      }
  }
  @media (max-width: 800px) {
    .search-box {
      position: absolute;
      width: 75vw;
    }
    div.corousel {
      height: 50vw
    }
  }
  .horizontal {
    display: flex;
    flex-direction: horizontal;
    justify-content: center
  }
  .body {
    margin-bottom: 15vh
  }
</style>
