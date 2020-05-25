import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { selectSong } from "../actions";
export interface Props {
  className?: string;
  songs?: {
    title: string;
    duration: string;
  }[];
  selectSong?: (song: any) => { type: string; payload: any };
}

export type song = {
  title: string;
  duration: string;
};

const SongList: React.FC<Props> = ({ className, songs, selectSong }) => {
  const renderLIst = () => {
    return songs?.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <div onClick={() => selectSong && selectSong(song)}>select</div>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };
  return <div className={className}>{renderLIst()}</div>;
};

const mapStateToProps = (state: any) => {
  return { songs: state.songs };
};

const styledButton = styled.button`
  background-color: blue;
  color: white;
`;

export default connect(mapStateToProps, { selectSong })(SongList);
