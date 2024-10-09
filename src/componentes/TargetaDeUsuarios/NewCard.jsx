import { Botones } from '../Botones/Botones';
import { TiArrowLeftOutline, TiArrowRightOutline} from "react-icons/ti";
import { useEffect, useState } from 'react'
import './NewCard.css'

export const NewCard = () => {
  const [charters, setCharters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  const prevClick = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  }

  const nexClick = () => {
    setCurrentPage(prev => prev + 1);
  }

  useEffect(() => {
    const fetchCharters = async () => {
      const newCharters = [];
      for (let i = 0; i < cardsPerPage; i++) {
        const id = (currentPage - 1) * cardsPerPage + i + 1;
        const charter = await fetchCharter(id);
        newCharters.push(charter);
      }
      setCharters(newCharters);
    };

    fetchCharters();
  }, [currentPage]);

  const fetchCharter = async (id) => {
    const result = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`);
    const data = await result.json();
    
    let nameCharter = data.chain.species.name;
    let imgCharter = await changeNameImg(nameCharter);
    
    return [nameCharter, imgCharter];
  }

  const changeNameImg = async (name) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const data = await res.json();
    return data.sprites.other['official-artwork'].front_default; 
  }

  return (
    <>
      <div className="cards-container">
        {charters.map((charter, index) => (
          <section className='container' key={index}>
            <div className='card'>
              <p className='card__name'>{charter[0]}</p>
              <div className='card__circle'></div>
              <img className='card__img' src={charter[1]} alt="pokemon" />
            </div>
          </section>
        ))}
      </div>
      <div className='btn__container'>
        <Botones icon={<TiArrowLeftOutline />} handleClick={prevClick}/>
        <Botones icon={<TiArrowRightOutline />} handleClick={nexClick}/>
      </div>
    </>
  )
}