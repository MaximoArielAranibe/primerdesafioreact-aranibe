import React, { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { pedirItemPorId } from "../helpers/pedirProductos";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    pedirItemPorId(Number(id))
    .then((res) => {
      setItem(res);
    });
  }, [id]);

  return <div>{item && <ItemDetail productos={item} />}</div>;
};

export default ItemDetailContainer;