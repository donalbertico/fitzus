<script>
  import { goto } from '$app/navigation'
  import IconButton from '@smui/icon-button'
  import Chip, { Set, Text } from '@smui/chips';
  import Button, { Label } from '@smui/button';
  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
  } from '@smui/card';

  export let gym;

  let navigateToGym = () => {
    goto(`gym/${gym.id}`)
  }
</script>
<Card on:click="{navigateToGym}">
  <Media aspectRatio="16x9" style="background-image:url(banner/gym.jpg)">
    <MediaContent>
      <div style="display:flex; flex-direction:horizontal">
        <div style="width:100%">
        </div>
        <Set chips={['400']} let:chip nonInteractive>
          <Chip style="" {chip}>
            <IconButton style="width:1vh;margin-left:-1vh" class="material-icons" size="button">location_on</IconButton>
            <div class="prox-text"></div>
            <Text>400m</Text>
          </Chip>
        </Set>
      </div>
      <h3
        style="color: #fff; position: absolute; bottom: 16px; left: 16px; margin: 0;">
        {gym.name}
      </h3>
    </MediaContent>
  </Media>
  <Content style="color:#888;">
    <h6 style="display:inline">
      Quadra QNN 31 Área Especial, {gym.location}
    </h6>
    <div class="horizontal">
      <h4 class="price">€25 / mes</h4>
    </div>
    <div class="horizontal">
      <Button h4 variant="raised" color="secondary">
        <Label>sessão gratuita</Label>
      </Button>
    </div>
  </Content>
</Card>
<style lang="scss">
  @import '../routes/styles.scss';
  .prox-text {
    margin-left: 1.4vh
  }
  .horizontal {
    display:flex; justify-content:center
  }
  .price {
    color:#FF5252;
    margin:2vh
  }
  h6 {
    margin-bottom : 0;
    margin-top: 1vh!important;
  }
  @media (max-width: 800px) {

  }
</style>
