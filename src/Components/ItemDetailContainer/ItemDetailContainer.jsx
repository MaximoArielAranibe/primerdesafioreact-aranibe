import React, { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { pedirItemPorId } from "../helpers/pedirProductos";
import Loader from "../Loader/Loader";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pedirItemPorId(Number(id))
      .then((res) => {
        setItem(res);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  }, [id]);

  return (
    <>
      {loading ? <Loader /> : item && <ItemDetail productos={item} />}
    </>
  );
};

export default ItemDetailContainer;
