import { useEffect, useState } from "react"
import { pedirProductos } from "../helpers/pedirProductos.js";
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";
import { Text } from "../Text/Text.jsx";
import { toCapital } from "../helpers/toCapital.js";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const category = useParams().category;

  useEffect(() => {
    pedirProductos()
      .then((res) => {
        if (category) {
          console.log(category);
          setProductos(res.filter((prod => prod.category === category)));
          window.scrollTo(0, 0)
        } else {
          setProductos(res);
          window.scrollTo(0, 0)
        }
      });
  }, [category]);

  return (
    <>
      {category ?
        (<>
          <Text texto={`Categoria: ${category}`} />
          <ItemList productos={productos} />
          </>) :
        <ItemList productos={productos} />}

    </>
  );
};

export default ItemListContainer;
