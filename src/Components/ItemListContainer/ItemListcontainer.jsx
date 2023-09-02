import { useEffect, useState } from "react"
import { pedirProductos } from "../helpers/pedirProductos.js";
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria;

  useEffect(() => {
    pedirProductos()
      .then((res) => {
        if (categoria) {
          setProductos(res.filter((prod => prod.category === categoria)));
        } else {          
          setProductos(res);
        }
      });
  }, [categoria]);

  return (
      <ItemList productos={productos} />
  );
};

export default ItemListContainer;
