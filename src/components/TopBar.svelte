<TopAppBar variant='static' color='primary'>
  <Row>
    <a class="logo-container" href="/">
      <img class="img-logo" src='/favicon.png' alt="logo"/>
    </a>
    <Section align="end" toolbar>
      <div class="menu">
        <Button style="margin-right:0.5vw" on:click={scrollIntoView}>
          <Label id="wh">About Us</Label>
        </Button>
        <Button style="margin-right:0.5vw" on:click={scrollIntoView}>
          <Label id="mr">Mirror</Label>
        </Button>
        <Button style="margin-right:0.5vw" on:click={scrollIntoView}>
          <Label id="pk">Package</Label>
        </Button>
        <Button style="margin-right:0.5vw" on:click={scrollIntoView}>
          <Label id="ct">Contact Us</Label>
        </Button>
      </div>
      <div class="mobile-menu">
        <IconButton on:click={()=> menu.setOpen(true)} class="material-icons" aria-label="Download"
          >menu</IconButton>
          <Menu bind:this={menu}>
            <List>
              <Button on:click={scrollIntoView}>
                <Label id="wh1">About Us</Label>
              </Button>
              <Button on:click={scrollIntoView}>
                <Label id="mr1">Mirror</Label>
              </Button>
              <Button on:click={scrollIntoView}>
                <Label id="pk1">Package</Label>
              </Button>
              <Button on:click={scrollIntoView}>
                <Label id="ct1">Contact</Label>
              </Button>
            </List>
          </Menu>
      </div>
    </Section>
  </Row>
</TopAppBar>

<script>
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar'
  import Button, { Label } from '@smui/button';
  import IconButton from '@smui/icon-button'
  import Menu from '@smui/menu';
  import List, {
     Item,
     Separator,
     Text,
     PrimaryText,
     SecondaryText,
   } from '@smui/list';
  import LayoutGrid, { Cell } from '@smui/layout-grid'

  let menu;

  let scrollTo = (element) => {
    console.log('pp');

    let el = document.getElementById(element)
    console.log(el);
    el.scrollLeft = 200
    // el.scrollIntoView({
    //   behavior: 'smooth'
    // });
  }
  let scrollIntoView = ({ target }) => {
    let el;
    console.log(target.id);

    switch (target.id) {
      case 'wh':
      case 'wh1':
        el = document.getElementById('who')
        console.log(el);
        break;
      case 'mr':
      case 'mr1':
        el = document.getElementById('what')
        console.log(el);
        break;
      case 'pk':
      case 'pk1':
        el = document.getElementById('marketing')
        console.log(el);
        break;
      default :
        el = document.getElementById('contact')
        break;
    }
    console.log();

    if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }
</script>
<style lang="scss">
  @import '../routes/styles.scss';
  .img-logo {
    width: 98%;
    height: 98%;
  }
  .logo-container {
    margin: 0.4%;
  }
  div.menu {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 480px) {
    div.mobile-menu{
      display: flex;
    }
    .logo-container {
      margin: 0.7%;
    }
    .img-logo {
      width: 14vw;
      height: 11vw;
    }
    div.menu {
      display: none
    }
  }
  @media (max-width: 920px) {
    div.mobile-menu{
      display: flex;
    }
    div.menu {
      display: none;
    }
  }
  @media (min-width: 920px) {
    h5{
      margin-right: 2vw
    }
    div.mobile-menu{
      display: none;
    }
  }
</style>
