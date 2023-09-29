import React from 'react';
import "./index.css"

export const Carousel = () => {
  return (
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner my-5">
    <div class="carousel-item active">
      <img src="https://i.ibb.co/QKz7qMr/quemador-de-grasa-ena.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/QKz7qMr/quemador-de-grasa-ena.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/QKz7qMr/quemador-de-grasa-ena.png" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>  )
}

