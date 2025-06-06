import React from "react";
import styled from "styled-components";
// Assets
import Dots from "../../assets/svg/Dots";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Product() {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const products = t('products', { returnObjects: true });

  const product = Object.values(products).find((p) => String(p.id) === id);

  // Jika tidak ada name (atau field lain), artinya tidak ditemukan
  React.useEffect(() => {
    if (!product?.name) {
      navigate('/not-found', { replace: true });
    }
  }, [product, navigate]);

  if (!product?.name) return null; // Hindari render sebelum redirect

  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">{product.name}</h1>
          <HeaderP className="font20" style={{ paddingBottom: '12px', lineHeight: '150%' }}>
            {product.description}
          </HeaderP>
          <div class="product-description" className="font20">
            <ul>
              {product.specification.map((item) => <li>• <strong>{item.title}:</strong> {item.value}</li>)}
            </ul>
            <h2 className="extraBold font20" style={{ paddingTop: '12px' }}>{t('products.benefitTittle')}</h2>
            <ul>
              {product.advantage.map((item) => <li>• {item}</li>)}
            </ul>
          </div>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" src={product.imgSrc} width={426} height={607} alt="office" style={{ zIndex: 9 }} />
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>

  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


