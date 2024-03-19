import React from "react";
import checkbox from './icons/check_box_outline_blank_black_24dp.svg'
import drag from './icons/drag_indicator_black_24dp.svg'
import star from './icons/star_border_black_24dp.svg'
import archive from './icons/archive_black_24dp.svg'
import delet from './icons/delete_black_24dp.svg'
import mark from './icons/mark_as_unread_black_24dp.svg'
import time from './icons/access_time_filled_black_24dp.svg'
import open from './icons/open_in_new_black_24dp.svg'

export default function Started() {
    return (
        <div class="content">
            <div class="mail content">

<div class="inbox-message-item">

  <div class="checkbox">
    <button class="btn">
      <img src={checkbox} alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
    </button>
  </div>

  <div class="message-group-hidden">
    <button class="btn-alt btn-nofill drag-indicator" >
      <img src={drag} alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled" />
    </button>
  </div>

  <button class="btn star">
    <img src={star} alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
  </button>

  <div class="message-default" >

    <div class="message-sender message-content unread" >
      <span >Cascadom</span>
    </div>

    <div class="message-subject message-content unread">
      <span>Dev Horror Stories: 👻 2000 lines of inline styles</span>
    </div>

    <div class="message-seperator message-content"> - </div>

    <div class="message-body message-content">
      <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta error beatae optio ea, quod harum. Iure ab sed, dolores eos repudiandae inventore magnam id modi blanditiis harum at. Facere, exercitationem.</span>
    </div>

    <div class="gap message-content" > &nbsp; </div>

    <div class="message-date center-text unread" >
      <span>12:09 AM</span>
    </div>

  </div>

  <div class="message-group-hidden" >
    <div class="inbox-message-item-options">
      <button class="btn">
        <img src={archive} alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
      </button>

      <button class="btn">
        <img src={delet} alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
      </button>

      <button class="btn">
        <img src={mark} alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
      </button>

      <button class="btn">
        <img src={time} alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
      </button>
    </div>
  </div>

</div>

<div class="inbox-message-item  message-default-unread">

  <div class="checkbox">
    <button class="btn">
      <img src={checkbox} alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
    </button>
  </div>

  <div class="message-group-hidden">
    <button class="btn-alt btn-nofill drag-indicator" >
      <img src={drag} alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled" />
    </button>
  </div>

  <div >
    <button class="btn star">
      <img src={star} alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
    </button>
  </div>

  <div class="message-default" >

    <div class="message-sender message-content" >
      <span >Mr. President</span>
    </div>

    <div class="message-subject message-content">
      <span>Thanks for Saving the World</span>
    </div>

    <div class="message-seperator message-content"> - </div>

    <div class="message-body message-content">
      <span> Party at my crib next weekend, amet consectetur adipisicing elit. Soluta error beatae optio ea, quod harum. Iure ab sed, dolores eos repudiandae inventore magnam id modi blanditiis harum at. Facere, exercitationem.</span>
    </div>

    <div class="gap message-content" > &nbsp; </div>

    <div class="message-date center-text" >
      <span>4:23 PM</span>
    </div>

  </div>

  <div class="message-group-hidden" >
    <div class="inbox-message-item-options">
      <button class="btn">
        <img src={archive} alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
      </button>

      <button class="btn">
        <img src={delet} alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
      </button>

      <button class="btn">
        <img src={mark} alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
      </button>

      <button class="btn">
        <img src={time} alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
      </button>
    </div>
  </div>

</div>

<div class="inbox-message-item  message-default-unread">

  <div class="checkbox">
    <button class="btn">
      <img src={checkbox} alt="Select" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
    </button>
  </div>

  <div class="message-group-hidden">
    <button class="btn-alt btn-nofill drag-indicator" >
      <img src={drag} alt="Drag" class="btn-icon-sm btn-icon-alt btn-icon-disabled" />
    </button>
  </div>

  <div >
    <button class="btn star">
      <img src={star} alt="Not starred" class="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
    </button>
  </div>

  <div class="message-default" >

    <div class="message-sender message-content" >
      <span >Spotify</span>
    </div>

    <div class="message-subject message-content">
      <span>🎉 💰 New Job who this? </span>
    </div>

    <div class="message-seperator message-content"> - </div>

    <div class="message-body message-content">
      <span> Hello, Habib! We are glad to break the news to you, amet consectetur adipisicing elit. Soluta error beatae optio ea, quod harum. Iure ab sed, dolores eos repudiandae inventore magnam id modi blanditiis harum at. Facere, exercitationem.</span>
    </div>

    <div class="gap message-content" > &nbsp; </div>

    <div class="message-date center-text" >
      <span>2:01 PM</span>
    </div>

  </div>

  <div class="message-group-hidden" >
    <div class="inbox-message-item-options">
      <button class="btn">
        <img src={archive} alt="Archive" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
      </button>

      <button class="btn">
        <img src={delet} alt="Delete" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
      </button>

      <button class="btn">
        <img src={mark} alt="Mark as unread" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
      </button>

      <button class="btn">
        <img src={time} alt="Snooze" class="btn-icon-sm btn-icon-alt btn-icon-hover" />
      </button>
    </div>
  </div>

</div>

            </div>
        </div>
    )
}