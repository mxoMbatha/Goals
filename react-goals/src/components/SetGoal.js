import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const SetGoal = ({ onSet , onDisplaySet}) =>
{
    const [text, setGoaltext] = useState('');
    const [reminder, setReminder] = useState(false);
    const [date, setDate] = useState('');
    const [term, setTerm] = useState('');
    const [time, setTime] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
   
    const onFormSubmit = ((data) =>
    {
        console.log(data);
        onSet({ text,date, reminder,term, time });
            setDate('');
            setGoaltext('');
            setReminder(false);
            setTerm('')
            setTime('')
            alert('Your goal has been successfully set')
            onDisplaySet()
    });
 
   
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
      <>
          <form className="addForm box" onSubmit={ handleSubmit(onFormSubmit)}>
              <div className="formControl">
                  <label >Goal</label>
                  <input type="text" { ...register("goal", { required: true }) } id="goal" className='goal-text' placeholder='Add your goal' value={ text } onChange={ (e) => { setGoaltext(e.target.value) } } />
                   {errors.goal && <p  className='validate'>goal text is required.</p>}
              </div>
              <div className="formControl">
                  <label >Date</label>
                  <input type="date" { ...register("date", { required: true }) } id="date" value={ date } onChange={ onDateSkip } />
                  {errors.date && <p  className='validate'>goal date is required.</p>}
              </div>
             
              <div className="formControl">
                  <label >Time</label>
                  <input type="time"{ ...register("time",{required:"required"}) } id="time" placeholder='time' value={ time }  onChange={ onTimeSkip
                  } />
                  {errors.time && <p  className='validate'>goal time is required.</p>}
              </div>
               <div className="formControl formCheck">
                  <label >Set Reminder</label>
                  <input type="checkbox"{ ...register("reminder",{required:false}) } 
                      id="reminder"
                      checked={ reminder }
                      value={ reminder }
                  onChange={(e)=>{setReminder(e.currentTarget.checked)}}/>
              </div>
              <div className="formControl">
                  <label >Term</label>
                  <input type="text"{ ...register("term", { required: true }) } className='goal-text' id="term" readOnly={true} value={ term }  onChange={ (e) =>
                  {
                      setTerm(e.target.value)
                      console.log(`This term-${term}`)
                  }
                  } />
              </div>
              <input type="submit" value="Save Goal" className='btn saveGoal' />
          </form>
      </>
  )
}

export default SetGoal