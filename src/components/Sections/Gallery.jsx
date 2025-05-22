import React from "react";
import styled from "styled-components";
// Components
import PictureBox from "../Elements/PictureBox";
// Assets
import img1 from "../../assets/img/gallery/1.png";
import img2 from "../../assets/img/gallery/2.png";
import img3 from "../../assets/img/gallery/3.png";
import img4 from "../../assets/img/gallery/4.png";
import img5 from "../../assets/img/gallery/5.png";
import img6 from "../../assets/img/gallery/6.png";

export default function Gallery() {
  return (
    <Wrapper id="gallery">
      <div className="whiteBg" style={{ paddingBottom: "100px" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Galeri</h1>
            <p className="font20">
              Galeri ini menampilkan berbagai dokumentasi visual dari perjalanan, kegiatan, 
              <br/>
              dan karya yang menjadi bagian dari identitas kami.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <PictureBox
                img={img1}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <PictureBox
                img={img2}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <PictureBox
                img={img3}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <PictureBox
                img={img4}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <PictureBox
                img={img5}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <PictureBox
                img={img6}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;