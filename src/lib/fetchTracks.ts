import { SavedTrack } from 'spotify-types';

const apiToken = 'BQDzrVbaQv9mSoI0sATqtQcVGPirJPEK4Hd5bLfhxbGm-8Ru6ZtVfMuEBok0yjPEvaJZ8vDhnYAy0_ms_43bUK6q6JvdL82ALKpGa0A9rjmyDh2KunMTVvtIuZCRCywdD6tWQoh1OPBG6mvTIRy4AiEpOsZxJlR7wwK8Cvj4jcLcXdNHynPyOjJ-qBwa_aDC42abyirkPHzk6Lx8EBdkvE0qSoswyw';

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
