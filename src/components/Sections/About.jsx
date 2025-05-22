import React from "react";
import styled from "styled-components";
import { LuPhoneCall, LuDownload } from "react-icons/lu";
// Components
import FullButton from "../Buttons/FullButton";
import ProjectBox from "../Elements/ProjectBox";
// Assets
import image1 from "../../assets/img/about/1.png";
import image2 from "../../assets/img/about/2.png";
import image3 from "../../assets/img/about/3.png";
import image4 from "../../assets/img/about/4.png";
// Assets
import teamImg1 from "../../assets/img/about/tim1.png";
import teamImg2 from "../../assets/img/about/tim2.png";
import teamImg3 from "../../assets/img/about/tim3.png";

export default function About() {
  return (
    <Wrapper id="about">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <h4 className="font18 semiBold">Sekilas tentang kami</h4>
              <h2 className="font40 extraBold">#IkanAsinBanggaLokal</h2>
              <p className="font20">
                PT. Indonesian Framing Family adalah usaha mikro kecil dan menengah (UMKM) yang bergerak di bidang pengolahan ikan asin tradisional khas Indonesia. 
                Kami berdiri sejak tahun 2023, dengan semangat untuk memperkenalkan kembali rasa khas laut Nusantara ke seluruh penjuru negeri.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton icon={<LuDownload/>} title="Unduh Katalog" action={() => alert("clicked")} />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton icon={<LuPhoneCall/>} title="Hubungi Kami" action={() => alert("clicked")} border />
                </div>
              </ButtonsRow>
            </AddLeft>
            <AddRight>
              <AddRightInner>
                <div className="flexNullCenter">
                  <AddImgWrapp1 className="flexCenter">
                    <img src={image1} alt="office" />
                  </AddImgWrapp1>
                  <AddImgWrapp2>
                    <img src={image2} alt="office" />
                  </AddImgWrapp2>
                </div>
                <div className="flexNullCenter">
                  <AddImgWrapp3>
                    <img src={image3} alt="office" />
                  </AddImgWrapp3>
                  <AddImgWrapp4>
                    <img src={image4} alt="office" />
                  </AddImgWrapp4>
                </div>
              </AddRightInner>
            </AddRight>
          </Advertising>
        </div>
      </div>
      <div className="lightBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Tim Kami</h1>
            <p className="font20">
              Kami pilih hanya ikan terbaik, hasil akhirnya pun luar biasa.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={teamImg1}
                title="John Doe"
                text="Direktur Utama"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={teamImg2}
                title="Rebecca Zenner"
                text="Manager Umum"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={teamImg3}
                title="Ali Mu'alim"
                text="Manager Marketing"
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
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 4px 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 0.6rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 40%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 0.6rem;
  }
`;
const AddImgWrapp3 = styled.div`
  width: 30%;
  margin-left: 30%;
  img {
    width: 100%;
    height: auto;
    border-radius: 0.6rem;
  }
`;
const AddImgWrapp4 = styled.div`
  width: 40%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 0.6rem;
  }
`;