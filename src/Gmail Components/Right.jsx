import calender from './icons/calendar_2020q4_2x.png'
import keep from './icons/keep_2020q4v3_2x.png'
import task from './icons/tasks2_2x.png'
import contact from './icons/contacts_2x.png'
import add from './icons/add_black_24dp.svg'
import chevron from './icons/chevron_right_black_24dp.svg'
import React from 'react'

const Right=()=>{
    return(
        <>
        <section className="app-container" >

<div className="app-group">

  <div className="app-item">
    <button className="btn">
      <img src={calender} alt="Calendar" className="btn-icon btn-icon-sm" />
    </button>
  </div>

  <div className="app-item">
    <button className="btn">
      <img src={keep} alt="Keep" className="btn-icon btn-icon-sm" />
    </button>
  </div>

  <div className="app-item">
    <button className="btn">
    <img src={task} alt="Tasks" className="btn-icon btn-icon-sm" />
    </button>
  </div>

  <div className="app-item">
    <button className="btn">
      <img src={contact} alt="Contacts" className="btn-icon btn-icon-sm" />
    </button>
  </div>

  <div className="btn btn-nofill" >
    <div className="hrt-rule btn-icon-sm"></div>
  </div>

  <div className="app-item">
    <button className="btn">
      <img src={add} alt="" className="btn-icon btn-icon-sm btn-icon-disabled" />
    </button>
  </div>

</div>


<button className="btn">
  <img src={chevron} alt="" className="btn-icon btn-icon-sm btn-icon-alt" />
</button>

</section>
        </>
    )
}
export default Right;
