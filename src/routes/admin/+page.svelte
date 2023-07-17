hola
<div>
<nav>
    <a use:scrollTo={'home'}>Home</a>
    <a use:scrollTo={'about'}>About</a>
    <a use:scrollTo={{ ref: 'blog', duration: 1000 }}>Blog</a>
</nav>
<!--
  <section style="height:50vh" use:scrollRef={'home'}>
    home
  </section>
  <section use:scrollRef={'about'}>
    <div style="height:50vh">
      <form bind:this={form} method="POST">

      </form>
      <button on:click="{uploadGyms}"> pego </button>
      <button on:click="{sendMail}"> send mail </button>
    </div>
  </section>
  <section style="height:50vh" use:scrollRef={'blog'}>
    popost
  </section> -->
  <div class="full-height">
    <AnimatedElement />
  </div>
  <!-- <div class="full-height">
    <AnimatedElement />
  </div> -->

</div>
<style lang="scss">
  @import '../styles.scss';
  div.full-height {
    height: 100vh;
    display: flex;
    justify-content: center;
  }
</style>
<script>
  import { collection, addDoc } from "firebase/firestore";
  import AnimatedElement from '../../components/AnimatedElement.svelte'
  import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'
  import Tooltip, { Wrapper } from '@smui/tooltip'
  import { fade } from 'svelte/transition';
  import { inview } from 'svelte-inview';
  import { onMount } from 'svelte';
  import { getDb } from '$lib/firebase.ts';

  let db = getDb()
  let panoEelement;
  let Marzipano;
  let viewer;
  let scenes;
  let autorotate;
  let scenesData;
  let form;
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

  let sendMail = () => {
    console.log('??');

    form.setAttribute('name','pepe')
    form.submit()

  }

  async function addGym() {
      const docRef = await addDoc(collection(db, "gyms"), gym)
      console.log(docRef.id);
  }

</script>
