import React from "react";
import { connect } from "react-redux";
import { song } from "./SongList";

type Props = song | undefined;

const SongDetail: React.FC<Props> = (song) => {
  // return (song ? <div>{song.title}</div> : <div>select song</div>);
  if (!song) {
    return (<div>select a song</div>);
  }
  return <div>{song.title}</div>;
};

const mapStateToProps = (state: any) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
