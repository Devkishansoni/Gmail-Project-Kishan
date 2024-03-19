import create from './icons/create_32dp.png'
import hangout from './icons/hangouts-common.png'
import person from './icons/person_black_24dp.svg'
import black from './icons/hangout_black_20dp.png'
import { NavLink } from 'react-router-dom'
import React from 'react'

const Left = () => {
  return (
    <>
      <section className="left-sidebar">

        <div className="left-sidebar-compose">
          <button className="sidebar-btn-compose">
            <img src={create} alt="Compose a new email" className="sidebar-btn-compose-icon" />
            <span className="sidebar-btn-compose-title">Compose</span>
          </button>
        </div>

        <div className="left-siderbar-label">
          <ul className="labels category-item-list">

            <NavLink to='/mail'>
              <li className="category-item active">
              <div>
                <svg className="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" /></svg>
                <span to='/Inbox' className="category-item-title">Inbox</span>
              </div>
              <span className="category-item-number" >32</span>
            </li>
            </NavLink>


            <NavLink to='/Started'>
            <li className="category-item">
              <div>
                <svg className="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                <span to='/Started' className="category-item-title">Starred</span>
              </div>
              <span className="category-item-number">5</span>
            </li>

            </NavLink>            
            
            <li className="category-item">
              <div>
                <svg className="category-item-icon" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><path d="M11.99,2C6.47,2,2,6.48,2,12s4.47,10,9.99,10C17.52,22,22,17.52,22,12S17.52,2,11.99,2z M15.29,16.71L11,12.41V7h2v4.59 l3.71,3.71L15.29,16.71z" /></g></svg>
                <span className="category-item-title">Snoozed</span>
              </div>
              <span className="category-item-number"></span>
            </li>

            <li className="category-item">
              <div>
                <svg className="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
                <span to='/Sent' className="category-item-title" >Sent</span>
              </div>
              <span className="category-item-number"></span>
            </li>

            <li className="category-item">
              <div>
                <svg className="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" /></svg>
                <span className="category-item-title">Drafts</span>
              </div>
              <span className="category-item-number"></span>
            </li>

            <ul className="category-item category-item-sub">
              <div>
                <svg className="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /></svg>
                <span className="category-item-title">More</span>
              </div>

            </ul>

          </ul>
        </div>

        <div className="left-sidebar-connect" >

          <div className="connect meets" >
            <div className="drag-btn-container">
              <button className="drag-btn"></button>
            </div>

            <span className="category-title" >Meets</span>

            <div className="category-item" >
              <div>
                <svg className="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" /></svg>
                <span className="category-item-title" >New meeting</span>
              </div>
            </div>

            <div className="category-item" >
              <div>
                <svg className="category-item-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z" /><path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none" /></svg>
                <span className="category-item-title" >Join a meeting</span>
              </div>
            </div>

          </div>

          <div className="connect hangouts" >

            <span className="category-title" >Hangouts</span>

            <div className="hangouts-img" >
            <img src={hangout} class="btn-icon-sidebar btn-icon-sm active"/>
            </div>

            <div className="category-item-btn">
              <button className="sidebar-btn-lg">
                Sign in
              </button>
            </div>

            <div className="connect-info">
              <span>Signing in will sign you into Hangouts across Google</span>
              <a href="#" className="connect-link">
                Learn more
              </a>
            </div>

          </div>

        </div>

        <div className="left-sidebar-footer">

          <button className="btn btn-sidebar">
            <img src={person} className="btn-icon-sidebar btn-icon-sm" />
          </button>

          <button className="btn btn-sidebar active">
            <img src={black} className="btn-icon-sidebar btn-icon-sm active" />
          </button>

        </div>

      </section>

    </>
  )
}
export default Left;
