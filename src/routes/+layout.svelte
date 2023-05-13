<script>
  import TopBar from '../components/TopBar.svelte'
</script>
<style>
  :root {
    --mdc-theme-primary: #616161;
    --mdc-theme-secondary: #676778;
  }
  .center {
    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
</style>
<TopBar/>
<slot/>
