<TopAppBar variant='static' color='primary'>
  <Row>
    <Section>
      <IconButton class="material-icons">menu</IconButton>
    </Section>
    <div class="logo-container">
      <img class="img-logo" src='favicon.png' alt="logo"/>
    </div>
    <Section align="end" toolbar>
      <IconButton class="material-icons" aria-label="Download">login</IconButton>
    </Section>
  </Row>
</TopAppBar>

<script>
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar'
  import IconButton from '@smui/icon-button'
  import LayoutGrid, { Cell } from '@smui/layout-grid'
</script>
<style>
  .img-logo {
    width: 100%;
    height: 100%;
  }
  .logo-container {
    margin: 0.4%;
  }
  @media (max-width: 480px) {
    .logo-container {
      margin: 0.7%;
    }
    .img-logo {
      width: 15vw;
      height: 12vw;
    }
  }
</style>
