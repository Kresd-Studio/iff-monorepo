import React from "react";
import styled from "styled-components";
import { LuDownload } from "react-icons/lu";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";

export default function Products() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleNavigate = (url) => {
    navigate(url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <Wrapper id="products">
      <div className="whiteBg" style={{ paddingTop: "60px" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">{t('products.title')}</h1>
            <p className="font20">
              {t('products.subTitle')}
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={t('products.product1.imgSrc')}
                title={t('products.product1.name')}
                text={t('products.product1.description')}
                action={() => handleNavigate(`/product/${t('products.product1.id')}`)}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={t('products.product2.imgSrc')}
                title={t('products.product2.name')}
                text={t('products.product2.description')}
                action={() => handleNavigate(`/product/${t('products.product2.id')}`)}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={t('products.product3.imgSrc')}
                title={t('products.product3.name')}
                text={t('products.product3.description')}
                action={() => handleNavigate(`/product/${t('products.product3.id')}`)}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={t('products.product4.imgSrc')}
                title={t('products.product4.name')}
                text={t('products.product4.description')}
                action={() => handleNavigate(`/product/${t('products.product4.id')}`)}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={t('products.product5.imgSrc')}
                title={t('products.product5.name')}
                text={t('products.product5.description')}
                action={() => handleNavigate(`/product/${t('products.product5.id')}`)}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={t('products.product6.imgSrc')}
                title={t('products.product6.name')}
                text={t('products.product6.description')}
                action={() => handleNavigate(`/product/${t('products.product6.id')}`)}
              />
            </div>
          </div>
          <div className="row textCenter" style={{ justifyContent: 'center' }}>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={t('products.product7.imgSrc')}
                title={t('products.product7.name')}
                text={t('products.product7.description')}
                action={() => handleNavigate(`/product/${t('products.product7.id')}`)}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton icon={<LuDownload />} title={t('catalogueBtnTxt')} action={() => window.open('https://drive.google.com/file/d/1P2-3OkQwj2B-UdcQ8o79O358gzSrJu4p/view', '_blank')} />
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