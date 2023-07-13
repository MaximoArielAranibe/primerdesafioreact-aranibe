import "./index.css";

const ItemListContainer = (props) => {
  return (
    <main className="item_list_container">
      <h3>Nuestros productos</h3>
      <section className="main-container">
        {props.children}
    </section>
    </main>
  );
};

export default ItemListContainer;
