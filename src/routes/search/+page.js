
/** @type {import('./$types').PageLoad} */
export function load({ url }) {
      console.log(url.searchParams)
      return {
          name: 'Hello world!',
          location : { lat: 'x', lng: 'y'},
          results: ['papo','papo','papo','papo']
      };
}
