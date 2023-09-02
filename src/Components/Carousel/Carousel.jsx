import React from "react";

export const Carousel = () => {
  return (
    <header>
      <div id="suplementos-carousel" class="carousel slide my-5">
        <div class="carousel-inner">
          <div class="carousel-item active c-item">
            <img
              src="https://i.ibb.co/WgZQLyG/whey-protein-ena.png"
              class="d-block w-100 c-img"
              alt="..."
            />
          </div>
          <div class="carousel-item c-item">
            <img
              src="https://i.ibb.co/4ZKDcgK/preentreno-beastblood.png"
              class="d-block w-100 c-img"
              alt="..."
            />
          </div>
          <div class="carousel-item c-item">
            <img
              src="https://i.ibb.co/QKz7qMr/quemador-de-grasa-ena.png"
              class="d-block w-100 c-img"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#suplementos-carousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#suplementos-carousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
    </header>
  );
};

