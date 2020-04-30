import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "hello good", duration: "4:50" },
    { title: "heldsjalo", duration: "3:50" },
    { title: "foo abar good", duration: "5:50" },
    { title: "hoge suhoge good", duration: "6:50" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type == "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
