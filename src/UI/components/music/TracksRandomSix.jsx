import React from 'react'
import img from "../../../assets/Ellipse6.png"
import More from "../../../assets/More.svg?react"
import "../music/TracksRandomSix.css"
const TracksRandomSix = () => {
  return (
    <div className='TracksRandomSixMain'>
      <div className='TracksRandomSixCenter'>
        <div className='TracksRandomImg'>
          <img src={img} alt="" />
        </div>
        <div className='TextTrack'>
          <div className='NameText'>Follow ME</div>
          <div className='NameTextSecond'>Image Dragons. Mercury -Act 1</div>
        </div>
        <div className='MoreTrackAndСounter'>
          <div className='MoreTrack'><More/></div>
          <div className='СounterTrack'>3:00</div>
        </div>
      </div>
    </div>
  )
}

export default TracksRandomSix