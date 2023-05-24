<script>
  import TopBar from '../components/TopBar.svelte'
  import BottomAppBar, { Section } from '@smui-extra/bottom-app-bar';
</script>

<main>
  <TopBar/>
  <slot/>
  <BottomAppBar
    variant="static"
    color= 'primary'>
    <Section style="height:15vh">
      <img style="height:60%;width:10vh" class="img-logo" src='favicon.png' alt="logo"/>
    </Section>
    <Section style="height:15vh">
      <div class="bottom">
        <small>Contact Us</small>
        <small>About</small>
        <small>Use Politics</small>
      </div>
    </Section>
    <Section style="height:15vh">
    </Section>
  </BottomAppBar>
</main>


<style lang="scss">
  @import 'styles.scss';
  div.bottom {
    padding: 1vw;
    display: flex;
    flex-direction: column
  }
</style>
