import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTikTok } from "react-icons/ai";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="lightBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <LogoImg />
              <h1 className="font15 semiBold darkColor" style={{ marginLeft: "15px" }}>
                PT. Indonesian Farming Family
              </h1>
            </Link>
            <MedsosWrapper>
              <div className="flexCenter" style={{
                display: 'flex', flexDirection: 'row', gap: "12px", paddingTop: '12px',
                padding: '10px',
              }}>
                <a href="https://www.facebook.com/indonesiafarmingfamily.28" target="_blank" className="verticalCenter font25 darkColor" rel="noreferrer"><AiOutlineFacebook /></a>
                <a href="https://www.linkedin.com/in/pt-indonesia-farming-family-8380a3372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="verticalCenter font25 darkColor" rel="noreferrer"><AiOutlineLinkedin /></a>
                <a href="https://tiktok.com/@pt.indofarmingfamily" target="_blank" className="verticalCenter font25 darkColor" rel="noreferrer"><AiOutlineTikTok /></a>
                <a href="https://www.instagram.com/indonesianfarmingfamily/" target="_blank" className="verticalCenter font25 darkColor" rel="noreferrer"><AiOutlineInstagram /></a>
              </div>
            </MedsosWrapper>
            <StyleP className="darkColor font15">
              © {getCurrentYear()} - <span className="darkColor font15">PT. Indonesian Farming Family</span>
            </StyleP>
          </InnerWrapper>
        </div>
      </div >
    </Wrapper >
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const MedsosWrapper = styled.div`
  left: 50%;
  transform: translateX(-50 %);
  width: 200px;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;