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
      center,
      disableDefaultUI: true,
      styles: [
       { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
       { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
       { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
       {
         featureType: "administrative.locality",
         elementType: "labels.text.fill",
         stylers: [{ color: "#d59563" }],
       },
       {
         featureType: "poi",
         elementType: "labels.text.fill",
         stylers: [{ color: "#d59563" }],
       },
       {
         featureType: "poi.park",
         elementType: "geometry",
         stylers: [{ color: "#263c3f" }],
       },
       {
         featureType: "poi.park",
         elementType: "labels.text.fill",
         stylers: [{ color: "#6b9a76" }],
       },
       {
         featureType: "road",
         elementType: "geometry",
         stylers: [{ color: "#38414e" }],
       },
       {
         featureType: "road",
         elementType: "geometry.stroke",
         stylers: [{ color: "#212a37" }],
       },
       {
         featureType: "road",
         elementType: "labels.text.fill",
         stylers: [{ color: "#9ca5b3" }],
       },
       {
         featureType: "road.highway",
         elementType: "geometry",
         stylers: [{ color: "#746855" }],
       },
       {
         featureType: "road.highway",
         elementType: "geometry.stroke",
         stylers: [{ color: "#1f2835" }],
       },
       {
         featureType: "road.highway",
         elementType: "labels.text.fill",
         stylers: [{ color: "#f3d19c" }],
       },
       {
         featureType: "transit",
         elementType: "geometry",
         stylers: [{ color: "#2f3948" }],
       },
       {
         featureType: "transit.station",
         elementType: "labels.text.fill",
         stylers: [{ color: "#d59563" }],
       },
       {
         featureType: "water",
         elementType: "geometry",
         stylers: [{ color: "#17263c" }],
       },
       {
         featureType: "water",
         elementType: "labels.text.fill",
         stylers: [{ color: "#515c6d" }],
       },
       {
         featureType: "water",
         elementType: "labels.text.stroke",
         stylers: [{ color: "#17263c" }],
       },
     ],
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
