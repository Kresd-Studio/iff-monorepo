import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

// Assets
import LogoIcon from "../../assets/svg/Logo";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import LanguageToggle from "../Buttons/LanguageToggle";

export default function TopNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [y, setY] = useState(window.scrollY);

  const { t, } = useTranslation();

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true} onClick={() => navigate('/')} >
            <LogoIcon />
            <h1 style={{ marginLeft: "15px" }} className="font18 extraBold">
              Indonesian Farming Family
            </h1>
          </Link>
          {location.pathname === '/' && <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="home" spy={true} smooth={true} offset={-80}>
                {t('menu.home')}
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="about" spy={true} smooth={true} offset={-80}>
                {t('menu.about')}
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="products" spy={true} smooth={true} offset={-80}>
                {t('menu.product')}
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-80}>
                {t('menu.contact')}
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="gallery" spy={true} smooth={true} offset={-80}>
                {t('menu.gallery')}
              </Link>
            </li>
          </UlWrapper>}
          <LanguageToggle />
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;

