<script>
  import { onMount } from 'svelte';
  let container;
  export let location;
  export let gym;
  onMount(async () => {
    let zoom = 15;
    let center = {lat: location.lat, lng: location.lng};
		let map = new google.maps.Map(container, {
      zoom,
      center
		});
    new google.maps.Marker({
      position: center,
      map,
      title: gym.name,
    });
	});
</script>
<div bind:this={container}>
</div>
<style>
  div {
    height: 100%;
    width: 100%
  }
</style>
