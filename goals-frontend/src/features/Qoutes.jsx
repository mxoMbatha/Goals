import { useState} from 'react';
import { getQuote } from 'inspirational-quotes';

const Qoutes = () => {
  const [qoute, setQoute] = useState(getQuote);
   
  return (
    <div><p id='qouteline' className='text-l text-bold'>"{qoute.text}" <br /> <span className='qoute-author text-italic text-sm '>{qoute.author}</span></p></div>
    
  )
}

export default Qoutes;