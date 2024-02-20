import { SavedTrack } from 'spotify-types';

const apiToken = 'BQDvhmyX3LCPAj_-IGN1AccQWfZdydZxv_Ixq2KIYztVjtOkAZ3sjMTRAOeqlk37peXIDUJvd-YC8M1cR84_mO92li5HpkCi96JJH6D3M-sEsD3KChLITq2ZDsgUCblrA579uQQOE_zgCbj-GfJFvKXFcNn_mNcV9gy9LCzOMNFoDptosqQTaqNmczrvD_jpdwP6-csEC6t6h-Mnx4EWIhD8EsZLGA';

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
