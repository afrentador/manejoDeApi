import { useState } from "react"

export const Contactar = ({user}) => {

    const [isContacted, setIsContacted] = useState(false);

    const {id, firstName, lastName, email, image} = user;

    const handleClick = () => {
        setIsContacted(!isContacted);
      }

    return (
    <div className='grid place-items-center bg-[#133b3b] w-[100%] rounded-[30px] p-[35px] mt-[40px] max-w-[250px]'>

        <img className='rounded-[50%] w-[170px] h-auto' src={image} alt={name} />

        <h2 className='text-[30px] text-center font-bold leading-[40px]'>{firstName}</h2>

        <h4 className='text-[30px] text-center font-bold leading-[40px]'>{lastName}</h4>

        <p className=' text-[#9ff340ed] text-[12px] mt-[20px]'>{email}</p>
        
        <button className='bg-[#171a41] mt-[15px]' id={id} onClick={()=> handleClick()}>
            {
                isContacted ? 'Contactado' : 'Contactar'
            }
        </button>
    </div>
    )
};