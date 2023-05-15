<script>
  import TopBar from '../components/TopBar.svelte'
  import BottomAppBar, { Section } from '@smui-extra/bottom-app-bar';
</script>


<TopBar/>
<slot/>
<BottomAppBar
  variant="static"
  color= 'primary'>
  <Section style="height:10vw">
  </Section>
  <Section style="padding:10px; height:10vw">
    <div class="logo-container">
      <img class="img-logo" src='favicon.png' alt="logo"/>
    </div>
  </Section>
  <Section style="height:10vw">
  </Section>
</BottomAppBar>
<style>
  :root {
    --mdc-theme-primary: #212121;
    --mdc-theme-secondary: #676778;
  }
  .center {
    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  .img-logo {
    width: 25%;
  }
  .logo-container {
    width: 100%;
    height: 100%;
  }
</style>
