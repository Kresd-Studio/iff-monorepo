import React from "react";
import styled from "styled-components";

export default function PictureBox({ img, action}) {
  return (
    <Wrapper>
      <ImgBtn className="aniamte pointer" onClick={action ? () => action() : null}>
        <img className="radius6" src={img} alt="project"></img>
      </ImgBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  img {
    width: 100%;
    height: auto;
    margin: 0;
  }
  h3 {
    padding-bottom: 10px;
  }
`;
const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > img {
    opacity: 0.5;
  }
`;