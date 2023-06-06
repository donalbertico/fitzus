import { error } from '@sveltejs/kit';
import { getDb } from '$lib/firebase.ts'
import { doc, getDoc } from "firebase/firestore";

let db = getDb()


/** @type {import('./$types').PageLoad} */
export async function load({ url, fetch, params }) {
    if (params.id) {
        let gymData = url.searchParams.get('gym')
        if (gymData) {
          const response = await fetch(`https://meetfreed4.s3.amazonaws.com/${params.id}/scenes.json`);
          const scenesData = await response.json();
          return {
              gym: JSON.parse(gymData),
              scenes: scenesData
          };
        }else {
          const docRef = doc(db, "gyms", params.id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const response = await fetch(`https://meetfreed4.s3.amazonaws.com/${params.id}/scenes.json`);
            const scenesData = await response.json();
            return {
              gym: {id:params.id,...docSnap.data()},
              scenes: scenesData
            };
          }else{
            throw error(404, 'Not found');
          }
        }
    } else {
      throw error(404, 'Not found');
    }
}

async function getFeatruedGyms() {

  return false
}
