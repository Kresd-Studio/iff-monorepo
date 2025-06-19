import React from "react";
import styled from "styled-components";
import PictureBox from "../Elements/PictureBox";
import { useTranslation } from "react-i18next";

export default function Gallery() {
  const { t } = useTranslation();
  const images = [...Array(24)];
  return (
    <Wrapper id="gallery">
      <div className="whiteBg" style={{ paddingBottom: "100px" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">{t("gallery.title")}</h1>
            <p className="font20">{t("gallery.subTitle")}</p>
          </HeaderInfo>
          <div className="row textCenter">
            {
              images.map((_, index) =>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <PictureBox img={`./assets/gallery/${index + 1}.png`} />
                </div>
              )
            }
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
