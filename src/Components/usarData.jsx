import React, {useState} from 'react'
import data from '../mocks/suplementos.json'

const UsarData = () => {

const [datos, setearDatos] = useState([]);

    const myPromise = () => {
        new Promise((resolve,reject) => {
            resolve(data);
        })
    }

    myPromise.then(() => {
        setearDatos(data)
    })

  return (
    <div>{datos}</div>
  )
}

export default UsarData