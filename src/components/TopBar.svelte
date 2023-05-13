<TopAppBar variant='static' color='primary'>
  <Row>
    <Section>
      <IconButton class="material-icons">menu</IconButton>
    </Section>
    <div>
      <img class="img-logo" src='favicon.png' alt="logo"/>
    </div>
    <Section align="end" toolbar>
      <IconButton class="material-icons" aria-label="Download"> file_download</IconButton>
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
    width: 50px;
    height: 50px;
  }
</style>
