export const selectedSong = (song: any) => {
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
