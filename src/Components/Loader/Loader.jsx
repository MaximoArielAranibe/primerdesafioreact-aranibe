import React, { useState } from 'react'

const Loader = () => {
    const [loading, setLoading] = useState(false);

    const cambiarEstado=()=>{
        setLoading(true);
        setTimeout(() => {
          setLoading(false)
        },2000);
        
    }
  return (
    <div>Loader</div>
  )
}

export default Loader