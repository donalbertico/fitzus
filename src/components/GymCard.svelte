<script>
  import { goto } from '$app/navigation'
  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
  } from '@smui/card';

  export let gym;

  let navigateToGym = () => {
    let params = new URLSearchParams({gym : JSON.stringify(gym)}).toString()
    goto(`gym/${gym.id}?${params}`)
  }
</script>
<Card on:click="{navigateToGym}">
  <Media aspectRatio="16x9" style="background-image:url(banner/gym.jpg)">
    <MediaContent>
      <h2
        class="mdc-typography--headline6"
        style="color: #fff; position: absolute; bottom: 16px; left: 16px; margin: 0;">
        {gym.name}
      </h2>
    </MediaContent>
  </Media>
  <Content style="color: #888;">Here's some gray text down here.</Content>
</Card>
