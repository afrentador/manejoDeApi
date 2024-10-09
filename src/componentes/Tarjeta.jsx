import { useEffect, useState } from 'react';
import { Contactar } from './Contactar';

export const Tarjeta = () => {

  const [siguiente, setSiguiente] = useState(1);
  const [anterior, setAnterior] = useState(0);
  const [user, setUser] = useState({});

  useEffect(()=>{
    fetch(`https://dummyjson.com/users/${siguiente}`)
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      setUser(data)
    })
  }, [siguiente])   

  const handleClick = () =>  setSiguiente(siguiente + 1);

  const handleAlAnterior = () =>  setAnterior(setSiguiente(siguiente - 1));

  return (
    <>
      <h2>{siguiente}</h2>
      <button onClick={handleClick}>Siguiente</button>
      <h2>{anterior}</h2>
      <button onClick={handleAlAnterior}>Anterior</button>
      <section className='flex justify-center max-w-[250px]'>
        <Contactar key={user.id} user={user} />
      </section>
    </>
  )
};