import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ url, params }) {
    if (params.id) {
        let gymData = url.searchParams.get('gym')
        return {
            id: params.id,
            gym: JSON.parse(gymData)
        };
    } else {
      throw error(404, 'Not found');
    }
}
