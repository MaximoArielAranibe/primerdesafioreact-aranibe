import { useEffect, useState } from "react";
import { Item } from "../Item/Item.jsx";
import suplementos from "../../mocks/suplementos.json";
import './index.css'
import { CircularProgress } from "@mui/material";
import { yellow } from "@mui/material/colors";

const ItemList = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const llamarMock = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    };

    const llamarData = async () => {
      try {
        await llamarMock();
        setData(suplementos);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    llamarData();
  }, []);


  if (loading)
    return (
      <div className="spinner-container">
        <CircularProgress sx={{ color: yellow[800] }} />
      </div>
    );

  return (
    <>
      <div className="column">
        {data.map((suplemento) => {
          return (
            <Item
              key={suplemento.name}
              name={suplemento.name}
              thumbnail={suplemento.thumbnail}
              price={suplemento.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
