<script>
  import TopBar from '../components/TopBar.svelte'
  import BottomAppBar, { Section } from '@smui-extra/bottom-app-bar';
</script>


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
<style lang="scss">
  @use '@material/typography/mixins' as typography;
  @use '@material/typography/mdc-typography';

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
  div.bottom {
    padding: 1vw;
    display: flex;
    flex-direction: column
  }
  small {
    padding-bottom: 1vw;
  }
  html {
    @include typography.typography('body1');
  }
  h1 {
    @include typography.typography('headline1');
  }
  h2 {
    @include typography.typography('headline2');
  }
  h3 {
    @include typography.typography('headline3');
  }
  h4 {
    @include typography.typography('headline4');
  }
  h5 {
    @include typography.typography('headline5');
  }
  h6 {
    @include typography.typography('headline6');
  }
  caption {
    @include typography.typography('caption');
  }
  code,
  small {
    font-size: 0.9em;
  }
  big {
    font-size: 1.1em;
  }
  b,
  strong {
    font-weight: bold;
  }
</style>
