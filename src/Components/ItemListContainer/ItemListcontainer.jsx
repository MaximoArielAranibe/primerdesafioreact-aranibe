import "./index.css";

const ItemListContainer = (props) => {
  return (
    <main className="item_list_container">
      <div id="suplementos-carousel" class="carousel slide">
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
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#suplementos-carousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <h3 className="item_list_title">Nuestros productos</h3>
      <section className="main-container">{props.children}</section>
    </main>
  );
};

export default ItemListContainer;
