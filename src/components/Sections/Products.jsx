import React from "react";
import styled from "styled-components";
import { LuDownload } from "react-icons/lu";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import productImg1 from "../../assets/img/products/1.png";
import productImg2 from "../../assets/img/products/2.png";
import productImg3 from "../../assets/img/products/3.png";
import productImg4 from "../../assets/img/products/4.png";
import productImg5 from "../../assets/img/products/5.png";
import productImg6 from "../../assets/img/products/6.png";

export default function Products() {
  return (
    <Wrapper id="products">
      <div className="whiteBg" style={{ paddingTop: "60px" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Produk Kami</h1>
            <p className="font20">
              Kami pilih hanya ikan terbaik, hasil akhirnya pun luar biasa.
              <br />
              Setiap ikan melalui proses seleksi ketat sebelum diasinkan. Tekstur renyah, rasa pas, dan aroma khas yang menggoda.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={productImg1}
                title="Ikan Asin Jambal Roti"
                text="Ikan asin premium dari ikan manyung. Teksturnya tebal, dagingnya padat, dan rasanya gurih. Biasanya digoreng kering atau dimasak balado."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={productImg2}
                title="Ikan Asin Peda"
                text="Dibuat dari ikan kembung atau ikan peda, berwarna keperakan. Rasanya asin-gurih, sering dijadikan lauk pendamping nasi panas dan sambal."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={productImg3}
                title="Ikan Asin Teri"
                text="Ikan asin kecil-kecil berwarna putih atau keabu-abuan. Digunakan dalam sambal teri, tumisan, atau sebagai topping nasi goreng."
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={productImg4}
                title="Ikan Asin Gabus"
                text="Terbuat dari ikan gabus kering, dagingnya padat dan empuk. Umumnya digoreng dan disajikan dengan sambal hijau atau sambal ijo."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={productImg5}
                title="Ikan Asin Sepat"
                text="Ikan sepat yang diawetkan dengan cara diasinkan dan dikeringkan. Dikenal di daerah Sumatra dan Kalimantan. Gurih dan sedikit amis."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={productImg6}
                title="Ikan Asin Layur"
                text="Bentuknya panjang-panjang dan pipih, warnanya keputihan. Dagingnya agak lunak. Cocok digoreng kering atau dibumbu balado."
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton icon={<LuDownload />} title="Lihat Katalog" action={() => alert("clicked")} />
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
const Advertising = styled.div`
  padding: 100px 0;
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
    justify-content: space-between;
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
