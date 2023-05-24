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
  import IconButton from '@smui/icon-button'
  import CircularProgress from '@smui/circular-progress';

  let corousel_idx = 0
  let value = ''
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

  async function getFeatruedGyms() {
    const q = query(collection(db, "gyms"), where("featured", "==", true));
    const querySnapshot = await getDocs(q);
    let result = []
    querySnapshot.forEach((doc) => {
      result.push({id:doc.id,...doc.data()})
    });
    console.log(result);

    featured = result
  }

</script>

<div class="body">
  <div class="corousel">
    {#each [carousel_photos[corousel_idx]] as src (corousel_idx)}
      <img class="corousel" {src} alt=''/>
    {/each}
  </div>
  <div style="height: 30vw">
    <div class="search_box">
      <Paper color="primary" elevation=5>
        <div class="horizontal">
          <IconButton class="material-icons">search</IconButton>
          <Autocomplete
            bind:value
            showMenuWithNoInput={false}
            style="width: 100%"
            textfield$style="width: 100%;"
            label="Find a session near to you">
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
  <LayoutGrid>
    {#each featured as gym}
      <Cell spanDevices={{desktop: 4, phone: 6 }}>
        <GymCard gym={gym}/>
      </Cell>
    {/each}
  </LayoutGrid>
  <div class="section">
    <div style="height:100%">
      <img style="height:120%;margin-left:25vw;" src="banner/banner3.png" />
    </div>
  </div>
</div>

<style>
  div.section {
    height: 40vw
  }
  div.corousel {
    height: 30vw
  }
  img.corousel {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 0%;
  }
  .search_box {
    position: relative;
    top: -7vh;
    width: 80vw;
    height: 100%;
    margin-left: 10vw;
  }
  @media (max-width: 1680px) {
      div.corousel {
        height: 35vw
      }
  }
  .horizontal {
    display: flex;
    flex-direction: horizontal
  }
  .body {
    margin-bottom: 15vh
  }
</style>
