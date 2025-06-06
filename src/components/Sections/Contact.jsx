import React from "react";
import { LuMapPin, LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp, } from "react-icons/fa";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
// Components
import FullButton from "../Buttons/FullButton";
import contactImg from "../../assets/img/contact.png";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={contactImg} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font18 semiBold">{t('contact.info')}</h4>
              <h2 className="font40 extraBold">{t('contact.title')}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: "4px", paddingTop: '12px' }}>
                <a href="tel:088707002943" className="verticalCenter gap8 font18"><LuPhoneCall />088707002943</a>
                <a href="https://maps.app.goo.gl/5F3DrfykbdepoHv7A" style={{ textAlign: 'left' }} target="_blank" className="verticalCenter gap8 font18" rel="noreferrer"><LuMapPin className="font24" /> Jl. Hi. Komarudin No.3, Rajabasa Raya, <br/> Kec. Rajabasa, Kota Bandar Lamppung,<br/> Lampung</a>
              </div>


              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title={t('contactAdminBtnTxt')} icon={<FaWhatsapp />} action={() => handleWhatsAppRedirect()} border />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const handleWhatsAppRedirect = () => {
  const phone = '6288707002943';
  const message = 'Halo! Saya tertarik dengan produk Anda.';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.location.href = url;
};

const Wrapper = styled.section`
  width: 100%;
`;
const Advertising = styled.div`
  padding: 100px;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: center;
  }
`;
const AddLeft = styled.div`
  position: relative;
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
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
