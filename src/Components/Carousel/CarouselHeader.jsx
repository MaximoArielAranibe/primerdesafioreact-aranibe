import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./carousel.css";

export const CarouselHeader = () => {
  const tab = <>&nbsp;&nbsp;</>;

  return (
    <>
      <header className="container-image">
        <div className="image-container" />
        <h1 className="image-title">
          Suplementos{tab}
          <span>Vital{tab}</span>
          Sport
        </h1>
      </header>

      <header className="carousel-wrapper">
        <Carousel data-bs-theme="dark" wrap={true}>
          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100 carousel-image"
              src="https://i.ibb.co/M8WXJJ8/preentreno-spx.png"
              alt="First slide"
              />
            <Carousel.Caption>
              <div className="caption-container">
                <h5 className="carousel-title">Preentreno SPX</h5>
                <p className="carousel-p">Lleva tu entrenamiento al limite.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://i.ibb.co/nzt0vNr/creatina-hardcore.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <div className="caption-container">
                <h5 className="carousel-title">Creatina Hardcore</h5>
                <p className="carousel-p">
                  Potencia tus sobrecargas progresivas.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://i.ibb.co/RBm2GLq/shaker-negro.png"
              alt="Shaker negro"
            />
            <Carousel.Caption>
              <div className="caption-container">
                <h5 className="carousel-title">Shaker Negro</h5>
                <p className="carousel-p">Go work!</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </header>
    </>
  );
};
