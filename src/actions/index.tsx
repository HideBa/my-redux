export const selectSong = (song: any) => {
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
