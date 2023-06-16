<script>
  import { goto } from '$app/navigation'
  import IconButton from '@smui/icon-button'
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
      <h3
        style="color: #fff; position: absolute; bottom: 16px; left: 16px; margin: 0;">
        {gym.name}
      </h3>
    </MediaContent>
  </Media>
  <Content style="color:#888;display:flex;display-orientation:horizontal">
    <IconButton class="material-icons">location_on</IconButton>
    <h6 style="margin-top:2vh">
      {gym.location}
    </h6>
  </Content>
</Card>
<style lang="scss">
  @import '../routes/styles.scss';
  h6 {
    margin-bottom : 0;
    margin-top: 1vh!important;
  }
</style>
