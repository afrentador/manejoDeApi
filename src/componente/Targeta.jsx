import { useEffect, useState } from 'react';
import { Contactar } from './Contactar';

export const Targeta = () => {

  const [count, setCount] = useState(1);
  const [likes, setLikes] = useState(0);
  const [user, setUser] = useState({});

  useEffect(()=>{
    console.log('useEffect Ejecutado');
    fetch(`https://dummyjson.com/users/${count}`)
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      setUser(data)
    })
  }, [count])   

  const handleClick = () =>  setCount(count + 1);

  const handleIncremenLikes = () =>  setLikes(likes + 1);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleClick}>Siguiente</button>
      <h2>{likes}</h2>
      <button onClick={handleIncremenLikes}>likes</button>
      <section className='flex justify-center max-w-[250px]'>
        <Contactar key={user.id} user={user} />
      </section>
    </>
  )
};
