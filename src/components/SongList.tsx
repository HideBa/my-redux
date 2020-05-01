import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
export interface Props {
  className?: string;
  songs?: {
    title: string;
    duration: string;
  }[];
}

const SongList: React.FC<Props> = ({ className, songs }) => {
  const renderLIst = () => {
    return songs?.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            {/* <styledButton>Select</styledButton> */}
            <div>select</div>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };
  return <div className={className}>{renderLIst()}</div>;
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return { songs: state.songs };
};

const styledButton = styled.button`
  background-color: blue;
  color: white;
`;

export default connect(mapStateToProps)(SongList);
