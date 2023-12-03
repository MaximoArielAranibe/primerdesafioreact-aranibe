import React from "react";
import { pedirProductos } from "../helpers/pedirProductos";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import { Text } from "../Text/Text.jsx";
import { toCapital } from "../helpers/toCapital";

const Marcas = () => {
  const [productos, setProductos] = useState([]);
  const brand = useParams().brand;
  useEffect(() => {
    pedirProductos().then((res) => {
      if (brand) {
        setProductos(res.filter((prod) => prod.brand === brand));
        window.scrollTo(0, 0);
      } else {
        setProductos(res);
      }
    });
  }, [brand]);
  return (
    <>
      <Text texto={`Marca: ${toCapital(brand)}`} />
      <ItemList productos={productos} />
    </>
  );
};

export default Marcas;
