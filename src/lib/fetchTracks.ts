import { SavedTrack } from 'spotify-types';

const apiToken = 'BQBgDzcVnXSDcr3hV8ik8QzvJylC4LovUB6pT2sF3bldyBk54fPfB3r04lsHWUvh0nVNvguh9RWSJuaaA9r4mpS53Ir728AYSnAjsgMJ0LNZjl7Wk1wJ17O9u82J25xemXU1eXfIBNLtTnpbek34T3mGN6pf455El2LF-KZuYYYecivF6JTqHgZW-deBmh2B5hzkV8-BZRE1JpGOgzhhqk5-72FFbA';

export let fetchTracks = async ():Promise<SavedTrack[]> => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: SavedTrack[] };
  
  return data.items;
};
