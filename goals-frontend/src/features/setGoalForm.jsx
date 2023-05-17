import React from 'react'
import { useState } from 'react'
const SetGoalForm = ({onDIsplaySet}) =>
{
  const [text, setGoaltext] = useState('');
  const [reminder, setReminder] = useState(false);
  const [date, setDate] = useState('');
  const [term, setTerm] = useState('');
  const [time, setTime] = useState('');
      const onTimeSkip = (e) =>
    {
        
         setTime(e.target.value);
    };
    const onDateSkip = (e) =>
    {
        let myterm = '';
        const dateValue = e.target.valueAsDate;
        const dates = new Date()
        const thisDay = dates.getDate(), thisMonth = dates.getMonth(), thisYear = dates.getFullYear();
 
        if (dateValue.getFullYear() < thisYear) {

            alert('You can\'t set your goal back in time. Please contact us if you possess a time machine')
     
        }
        else if (dateValue.getFullYear() === thisYear && dateValue.getMonth() < thisMonth) {
            alert('You can\'t set your goal back in time. Please contact us if you possess a time machine')
        }
        else if (dateValue.getFullYear() === thisYear && dateValue.getMonth() === thisMonth && dateValue.getDate() < thisDay) {
            alert('You can\'t set your goal back in time. Please contact us if you possess a time machine')
        }
        else if (dateValue.getFullYear() > thisYear) {
            myterm = 'long-term'
        }
        else {
            myterm = 'short-term'
        }
        setDate(e.target.value)
        setTerm(myterm)
    }; 

  return (
      <div className='form justify-center mx-auto p-6'>
          <form action="" className='p-1 px-4  py-6 rounded shadow mt-2 space-y-6' >
        <div className="md:mx-auto px-6 sm:px-2">
          <label htmlFor="goal-text" className='sr-only'>Goal</label>
          <input type="text" name='goal-text' id='goal-text' value={text} onChange={(e)=>{setGoaltext(e.target.value)}} placeholder='Add your goal' className=' relative block w-full appearance-none rounded p-2 py-1 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-fanta focus:outline-none focus:ring-fanta sm:text-sm text-sm ' />
        </div>
        <div className="md:mx-auto px-6 sm:px-2">
          <label htmlFor="date" className='sr-only'>Date</label>
          <input type="date" name='date' id='date' value={date} onChange={onDateSkip} placeholder='Set a date' className=' relative block w-full appearance-none rounded  border border-gray-300 p-2 py-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-fanta focus:outline-none focus:ring-fanta sm:text-sm text-sm ' />
        </div>
        <div className="md:mx-auto px-6 sm:px-2 ">
          <label htmlFor="time" className='sr-only'>Time</label>
          <input type="time" name='time' id='time' value={ time } onChange={ onTimeSkip} placeholder='input time' className=' relative block w-full appearance-none rounded  border border-gray-300 text-gray-900 placeholder-gray-500 focus:z-10 p-2 py-1 focus:border-fanta focus:outline-none focus:ring-fanta sm:text-sm text-sm ' />
        </div>
        
        <div className="md:mx-auto px-6 sm:px-2 ">
          <label htmlFor="term" className='sr-only'>Term</label>
          <input type="text" name='term' id='term'readOnly={true} value={term} onChange={(e)=>{setTerm(e.target.value)}} placeholder='Term' className=' relative block w-full appearance-none rounded p-2 py-1 border border-gray-300  text-gray-900 placeholder-gray-500 focus:z-10 focus:border-fanta focus:outline-none focus:ring-fanta sm:text-sm text-sm ' />
        </div>
        <div className="flex justify-between px-6 sm:px-2">
          <label htmlFor="reminder" className='text-gray-500' >Set reminder</label>
          <input type="checkbox"  name='reminder' id='reminder' checked={ reminder }  value={ reminder } onChange={(e)=>{setReminder(e.currentTarget.checked)}} placeholder='Set a reminder' className='hover:text-fanta rounded ml-2 block text-sm text-gray-900 ' />
        </div>
        <input type="submit" value="Save Goal" className='block w-full shadow bg-fanta px-8  py-1 rounded font-bold text-white' />
          </form>
    </div>
  )
}

export default SetGoalForm