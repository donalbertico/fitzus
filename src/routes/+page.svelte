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
  <div class="full-height">
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
  div.full-height {
    height: 100vh;
    display: flex;
    justify-content: center;
  }
  .body {
    margin-bottom: 15vh
  }
</style>
