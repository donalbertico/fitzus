<script>
  import { onMount } from 'svelte';
  let container;
  onMount(async () => {
    let zoom = 8;
    let center = {lat: -34.397, lng: 150.644};
		let map = new google.maps.Map(container, {
      zoom,
      center
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
