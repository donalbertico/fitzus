<svelte:head>
  <script defer async
    src="https://maps.googleapis.com/maps/api/js?key={import.meta.env.VITE_GOOGLE_MAPS}&callback=initMap">
  </script>
</svelte:head>
<script>
  import TopBar from '../components/TopBar.svelte'
  import { language } from '$lib/stores.js'
  import { onMount } from 'svelte';
  import BottomAppBar, { Section } from '@smui-extra/bottom-app-bar';

  onMount(() => {
    language.set(window.navigator.language.split('-')[0])
    console.log(window.navigator.language.split('-')[0]);
  })
</script>

<main>
  <TopBar/>
  <slot/>
  <BottomAppBar
    variant="static"
    color= 'primary'>
    <Section style="height:15vh">
      <img style="height:60%;width:10vh" class="img-logo" src='/favicon.png' alt="logo"/>
    </Section>
    <Section style="height:15vh">
      <div class="bottom">
        <h5>Contact Us</h5>
        <h5>About</h5>
        <h5>Use Politics</h5>
      </div>
    </Section>
    <Section style="height:15vh">
    </Section>
  </BottomAppBar>
</main>


<style lang="scss">
  @import 'styles.scss';
  h5 {
    margin: 0
  }
  div.bottom {
    padding: 1vw;
    display: flex;
    flex-direction: column
  }
</style>
