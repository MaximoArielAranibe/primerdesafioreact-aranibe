import data from "../../mocks/suplementos.json";

export const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

export const pedirItemPorId = (id) => {
  return new Promise((resolve, reject) => {
      const item = data.find((el) => el.id === id);
      if (item) {
        resolve(item);
      } else {
        reject({
          error: "No se encontró el producto"
      });
    };
  });
};

export const filtrarPorMarca = (brand) => {
  return new Promise((resolve, reject) => {
    const brand = data.filter(el => el.brand === brand);
      if(brand) {
        resolve(brand)
      } else {
        reject({error: "No se encontro la marca"});
      };
  });
};