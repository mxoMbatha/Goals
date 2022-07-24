import React from 'react'
import { useState } from 'react'
const SetGoal = ({ onSet }) =>
{
    const [text, setGoaltext] = useState('');
    const [reminder, setReminder] = useState(false);
    const [date, setDate] = useState('');
    const [term, setTerm] = useState('');
    const [time, setTime] = useState('');
    const onFormSubmit = (e) =>{
         e.preventDefault();
        if (!text) {
            alert('fill in all form fields');
        }
        else if (!term) {
            alert('fill in all form fields')
        }
        else {
            onSet({ text,date, reminder,term, time });
            setDate('');
            setGoaltext('');
            setReminder(false);
            setTerm('')
            setTime('')
        } 
    }
  return (
      <>
          <form className="addForm box" onSubmit={ onFormSubmit }>
              <div className="formControl">
                  <label >Goal</label>
                  <input type="text" name="goal" id="goal" className='goal-text' placeholder='Add your goal' value={text} onChange={(e) =>{setGoaltext(e.target.value)}}/>
              </div>
              <div className="formControl">
                  <label >Date</label>
                  <input type="date" name="date" id="date" value={ date } onChange={ (e) =>
                  {
                      let myterm = '';
                      const dateValue = e.target.valueAsDate;
                      const dates = new Date()
                      const thisDay = dates.getDate(), thisMonth = dates.getMonth(), thisYear = dates.getFullYear();

                      if (dateValue.getFullYear() < thisYear )
                      {

                          alert(                          'Please contact us if you possess a time machine')
     
                      }
                      else if (dateValue.getFullYear() === thisYear && dateValue.getMonth() < thisMonth)
                      {
                          alert(                          'Please contact us if you possess a time machine')
                      }
                      else if(dateValue.getFullYear()=== thisYear &&dateValue.getMonth()===thisMonth && dateValue.getDate() < thisDay) {
                           alert(                          'Please contact us if you possess a time machine')
                      }
                      else if(dateValue.getFullYear()>thisYear) {
                          myterm='long-term'
                          }
                      else {
                          myterm='short-term'
                      }
                      setDate(e.target.value);
                      console.log({ date })
                      setTerm(myterm)
                      console.log(dateValue)
                  } } />
              </div>
             
              <div className="formControl">
                  <label >Time</label>
                  <input type="time" name="time" id="time" placeholder='time' value={ time }  onChange={ (e) =>
                  {
                      setTime(e.target.value)
                      console.log(`This time-${time}`)
                  }
                  } />
              </div>
               <div className="formControl formCheck">
                  <label >Set Reminder</label>
                  <input type="checkbox" name="reminder" 
                      id="reminder"
                      checked={ reminder }
                      value={ reminder }
                  onChange={(e)=>{setReminder(e.currentTarget.checked)}}/>
              </div>
              <div className="formControl">
                  <label >Term</label>
                  <input type="text" name="goal" className='goal-text' id="term" readOnly={true} value={ term }  onChange={ (e) =>
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