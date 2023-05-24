
<div id="panorama"></div>
hola
<div>
  <button on:click="{uploadGyms}"> pego </button>
</div>
<style>
  #panorama {
      width: 600px;
      height: 400px;
  }
</style>
<script>
  import { collection, addDoc } from "firebase/firestore";
  import { onMount } from 'svelte';
  import { getDb } from '$lib/firebase.ts';

  let db = getDb()
  let gym = {
    name: "gym 1",
    featured: true,
    scenes : [
      {
          title : "area 1",
          panorama : "https://meetfreed4.s3.amazonaws.com/uidk_0.jpg",
          hotSpots : [
            { pitch : 5,
              text : "area1",
              sceneId: "1"
            },
            { pitch : 5,
              text : "area2",
              sceneId: "1"
            }
          ]
      },
      {
        title : "area 2",
        panorama : "https://meetfreed4.s3.amazonaws.com/uidk_0.jpg",
        hotSpots : [
          { pitch : 5,
            text : "area1",
            sceneId: "0"
          }
        ]
      }
    ]
  }

  let uploadGyms = () => {
    addGym()
  }

  async function addGym() {
      const docRef = await addDoc(collection(db, "gyms"), gym)
      console.log(docRef.id);
  }

  onMount(() => {
    window.pannellum.viewer('panorama', {
      "default": {
            "firstScene": "c1",
            "author": "Pepito T",
            "sceneFadeDuration": 1000
        },

      "scenes":{
        "c1": {
            "title": "Mason Circle",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "https://meetfreed4.s3.amazonaws.com/uidk_0.jpg",
            "horizonPitch ": 0,
            "horizonRoll " : 100,
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Spring House or Dairy",
                    "sceneId": "house"
                }
            ]
        },
        "house": {
            "title": "Spring House or Dairy",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "https://pannellum.org/images/alma.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 37.1,
                    "type": "scene",
                    "text": "Mason Circle",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        }
      }
    });

  });

</script>
