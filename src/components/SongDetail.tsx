import React from "react";
import { connect } from "react-redux";
import { song } from "./SongList";

const SongDetail = (props: any) => {
  console.log(props);
  return (<div>Song detail</div>);
};

const mapStateToProps = (state: any) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
