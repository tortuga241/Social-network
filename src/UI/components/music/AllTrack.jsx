import React from 'react'
import "../music/AllTrack.css"
import Ramstin from "../../../assets/Ramstin.png"
import FavoriteNone from "../../../assets/favoriteNone.svg?react"
import Mores from "../../../assets/More.svg?react";
 const AllTrack = () => {
  return (
      <div className='AllTrackMain'>
        <div className='AllTrackCenter'>
          <div className='ImgAndNameTrack'>
            <div className='ImgTrack'><img src={Ramstin} alt="рамА брат это рама" /></div>
            <div className='NameTrack'>
              <div className='NameSongs'>Los</div>
              <div className='MusicAuthors'>Rammstein. Ries. Riese 2004</div>
            </div>
          </div>
          <div className='favoritAndMoreAndСounter'>
              <div className='favorit'><FavoriteNone/></div>
              <div className='Mores'><Mores/></div>
              <div className='Count'>99:99</div>
          </div>
        </div>
      </div>
  )
}
export default AllTrack
