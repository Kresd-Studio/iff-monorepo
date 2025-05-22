import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";
import { AiOutlineYoutube, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <LogoImg />
              <h1 className="font15 semiBold whiteColor" style={{ marginLeft: "15px" }}>
                PT. Indonesian Framing Family
              </h1>
            </Link>
            <div style={{
              display: 'flex', flexDirection: 'row', gap: "12px", paddingTop: '12px', position: 'absolute', position: 'absolute',
              left: '50%',
              transform: 'translateX(-50 %)',
              width: '200px',
              padding: '10px',
            }}>
              <a href="https://facebook.com" className="verticalCenter font25 whiteColor"><AiOutlineFacebook /></a>
              <a href="https://youtube.com" className="verticalCenter font25 whiteColor"><AiOutlineYoutube /></a>
              <a href="https://instagram.com" className="verticalCenter font25 whiteColor"><AiOutlineInstagram /></a>
            </div>

            <StyleP className="whiteColor font15">
              © {getCurrentYear()} - <span className="orangeColor font15">PT. Indonesian Framing Family</span>
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
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;