
<div id="panorama" on:click="{logYaw}"></div>
hola
<div>
  <button on:click="{uploadGyms}"> pego </button>
</div>
<style>
  #panorama {
      width: 90%;
      height: 800px;
  }
</style>
<script>
  import { collection, addDoc } from "firebase/firestore";
  import { onMount } from 'svelte';
  import { getDb } from '$lib/firebase.ts';

  let db = getDb()
  let viewer;
  let gym = {
    name: "Vibe",
    featured: true,
    location : "Porto",
    lat : 38.7523383,
    lng : -9.2,
    scenes : [
      {
          title : "Reception 1",
          panorama : "vibe0.jpg",
          yaw: -105,
          hotSpots : [
            {
              yaw : -175,
              pitch : -10,
              text : "Reception",
              sceneId: "1"
            }
          ]
      },
      {
        title : "Reception 2",
        panorama : "vibe1.jpg",
        yaw: -50,
        hotSpots : [
          {
            yaw : 100,
            pitch : -10,
            text : "Reception",
            sceneId: "0"
          },
          {
            yaw : -49,
            pitch : -10,
            text : "Bathroom",
            sceneId: "2"
          },
          {
            yaw : -90,
            pitch : -10,
            text : "Gym",
            sceneId: "4"
          }
        ]
      },
      {
        title : "Bathroom",
        panorama : "vibe2.jpg",
        yaw : -135,
        hotSpots : [
          {
            yaw : -200,
            pitch : -10,
            text : "Reception",
            sceneId: "1"
          },
          {
            yaw : -80,
            pitch : -10,
            text : "Bathroom",
            sceneId: "3"
          },
        ]
      },
      {
        title : "Bathroom",
        panorama : "vibe3.jpg",
        yaw: 145,
        hotSpots : [
          {
            yaw : 96,
            pitch : -10,
            text : "Bathroom",
            sceneId: "2",
          },
        ]
      },
      // 5
      {
        title : "Gym",
        panorama : "vibe4.jpg",
        yaw: -80,
        hotSpots : [
          {
            yaw : 119,
            text : "Reception",
            sceneId: "1"
          },
          {
            yaw : -18,
            text : "Studio 1",
            sceneId: "5"
          },
          {
            yaw : -89,
            text : "Gym",
            sceneId: "6"
          },
        ]
      },
// 6
      {
        title : "Studio 1",
        panorama : "vibe5.jpg",
        yaw : 50,
        hotSpots : [
          {
            yaw : -65,
            text : "Gym",
            sceneId: "4"
          },
        ]
      },
//7
      {
        title : "Gym",
        panorama : "vibe6.jpg",
        yaw : -50,
        hotSpots : [
          {
            yaw : 140,
            text : "Gym",
            sceneId: "4"
          },
          {
            yaw : -60,
            text : "Gym",
            sceneId: "7"
          },
        ]
      },
      {
        title : "Gym",
        panorama : "vibe7.jpg",
        yaw: -115 ,
        hotSpots : [
          {
            yaw : 73,
            text : "Gym",
            sceneId: "6"
          },
          {
            yaw : 168,
            text : "Gym",
            sceneId: "8"
          },
        ]
      },
      // 9
      {
        title : "Gym",
        panorama : "vibe8.jpg",
        yaw: 15,
        hotSpots : [
          {
            yaw : 173,
            text : "Gym",
            sceneId: "7"
          },
          {
            yaw : 15,
            text : "Gym",
            sceneId: "9"
          },
        ]
      },
      //10
      {
        title : "Gym",
        panorama : "vibe9.jpg",
        yaw: -115,
        hotSpots : [
          {
            yaw : -30,
            text : "Gym",
            sceneId: "8"
          },
          {
            yaw : 162,
            text : "Studio 2",
            sceneId: "10"
          },
          {
            yaw : 153,
            text : "Bicycles",
            sceneId: "11"
          },
        ]
      },
      // 11
      {
        title : "Studio 2",
        panorama : "vibe10.jpg",
        hotSpots : [
          {
            yaw : 120,
            text : "Gym",
            sceneId: "9"
          },
        ]
      },
      //12
      {
        title : "Bycicles",
        panorama : "vibe11.jpg",
        yaw : -170,
        hotSpots : [
          {
            yaw : -70,
            text : "Gym",
            sceneId: "9"
          },
        ]
      },
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
    viewer = window.pannellum.viewer('panorama', {
      "default": {
            "firstScene": "9",
            "author": "Fitsuz",
            "autoLoad": true,
            "sceneFadeDuration": 1000
        },

      "scenes": {
        4:  {
            title : "Gym",
            panorama : "https://meetfreed4.s3.amazonaws.com/vibe4.jpg",
            yaw: -80,
            hotSpots : [
              {
                yaw : 119,
                text : "Reception",
                sceneId: "1"
              },
              {
                yaw : -18,
                text : "Studio 1",
                sceneId: "5"
              },
              {
                yaw : -89,
                text : "Gym",
                sceneId: "6"
              },
            ]
          },
      // 6
        5:  {
            title : "Studio 1",
            panorama : "https://meetfreed4.s3.amazonaws.com/vibe5.jpg",
            yaw : 50,
            hotSpots : [
              {
                yaw : -65,
                text : "Gym",
                sceneId: "4"
              },
            ]
          },
      //7
        6:  {
            title : "Gym",
            panorama : "https://meetfreed4.s3.amazonaws.com/vibe6.jpg",
            yaw : -50,
            hotSpots : [
              {
                yaw : 140,
                text : "Gym",
                sceneId: "4"
              },
              {
                yaw : -60,
                text : "Gym",
                sceneId: "7"
              },
            ]
          },
        7:  {
            title : "Gym",
            panorama : "https://meetfreed4.s3.amazonaws.com/vibe7.jpg",
            yaw: -115 ,
            hotSpots : [
              {
                yaw : 73,
                text : "Gym",
                sceneId: "6"
              },
              {
                yaw : 168,
                text : "Gym",
                sceneId: "8"
              },
            ]
          },
          // 9
        8:  {
            title : "Gym",
            panorama : "https://meetfreed4.s3.amazonaws.com/vibe8.jpg",
            yaw: 15,
            hotSpots : [
              {
                yaw : 173,
                text : "Gym",
                sceneId: "7"
              },
              {
                yaw : 15,
                text : "Gym",
                sceneId: "9"
              },
            ]
          },
          //10
        9:  {
            title : "Gym",
            panorama : "https://meetfreed4.s3.amazonaws.com/vibe9.jpg",
            yaw: -115,
            hotSpots : [
              {
                yaw : -30,
                text : "Gym",
                sceneId: "8"
              },
              {
                yaw : 162,
                text : "Studio 2",
                sceneId: "10"
              },
              {
                yaw : 153,
                text : "Bicycles",
                sceneId: "11"
              },
            ]
          },
          // 11
        10:  {
            title : "Studio 2",
            panorama : "https://meetfreed4.s3.amazonaws.com/vibe10.jpg",
            hotSpots : [
              {
                yaw : 120,
                text : "Gym",
                sceneId: "9"
              },
            ]
          },
          //12
        11:  {
            title : "Bycicles",
            panorama : "https://meetfreed4.s3.amazonaws.com/vibe11.jpg",
            yaw : -170,
            hotSpots : [
              {
                yaw : -70,
                text : "Gym",
                sceneId: "9"
              },
            ]
          },
      }
    });

  });

  let logYaw = () => {
    console.log(viewer.getYaw());
  }

</script>
