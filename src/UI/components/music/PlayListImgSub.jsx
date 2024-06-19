import React from 'react'
import "./PLayListIMG.css"
import DeadPULICK from "../../../assets/DeadPULICK.png";
const PlayListImgSub = () => {
  return (
    <div>
      <div className='PlayListMain'>
        <div className='PlayListCenterSub'>
          <div className='ImgPlayList'>
            <img src={DeadPULICK} alt="" />
          </div>
          <div className='TitlePlayList'>
            <div className='NamePlayList'>музыка для жесткого</div>
            <div className='number of tracks'>9999</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PlayListImgSub
