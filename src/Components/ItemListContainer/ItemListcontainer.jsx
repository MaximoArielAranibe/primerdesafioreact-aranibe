import "./index.css";

const ItemListContainer = (props) => {
  return (
    <main className="item_list_container">
      <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.ibb.co/TBm49Vc/whey-protein-mass-spx.png" class="d-block w-30 position-relative translate-middle" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      <h3 className="item_list_title">Nuestros productos</h3>
      <section className="main-container">
        {props.children}
    </section>
    </main>
  );
};

export default ItemListContainer;
