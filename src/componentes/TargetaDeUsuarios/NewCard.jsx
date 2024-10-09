import { Botones } from '../Botones/Botones';
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
import { useEffect, useState } from 'react'
import './NewCard.css'

export const NewCard = () => {

  const [charter, setCharter] = useState([]);
  //logica del boton
  const [nexUsers, setNexUsers] = useState(1);

    
    const prevClick = () => {
        (nexUsers === 1) 
        ?setNexUsers(1) 
        :setNexUsers(nexUsers - 1)
    }

    const nexClick = () => setNexUsers(nexUsers + 1);
//logica del boton

  useEffect(() => {
    fetchCharter(nexUsers)
  },[nexUsers])
  
   const fetchCharter = async (id) => {
    const result = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
    const data = await result.json();
        
    // let charNameIgmArray = []

    let nameCharter = data.chain.species.name
    let imgCharter = await changeNameImg(nameCharter)
    // charNameIgmArray.push([nameCharter, imgCharter])
    setCharter([nameCharter, imgCharter])

    // if(data.chain.evolves_to.length !== 0){
    //   let nameCharterv2 = data.chain.evolves_to[0].species.name;
    //   let imgCharterv2 = await changeNameImg(nameCharterv2)
    //   charNameIgmArray.push([nameCharterv2, imgCharterv2])

    //   if(data.chain.evolves_to[0].evolves_to.length !== 0){
    //     let nameCharterv3 = data.chain.evolves_to[0].species.name;
    //     let imgCharterv3 = await changeNameImg(nameCharterv3)
    //     charNameIgmArray.push([nameCharterv3, imgCharterv3])
    //     setCharter(charNameIgmArray)
    //   }
    // }    
  }

   const changeNameImg = async (name) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    const data = await res.json()
    return data.sprites.other['official-artwork'].front_default; 
  }

  return (
    <>
    <section className='container'>
      <div className='card'>
        <p className='card__name'>{charter[0]}</p>
        <div className='card__circle'></div>
        <img className='card__img' src={charter[1]} alt="pokemon" />
      </div>
    </section>
      <div className='btn__container'>
        <Botones icon={<TiArrowLeftOutline />} handleClick={prevClick}/>
        <Botones icon={<TiArrowRightOutline />} handleClick={nexClick}/>
      </div>
    </>
  )
}
