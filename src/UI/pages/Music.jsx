import React from 'react';
import SiderBarMenu from "../../UI/components/MainMenuList.jsx";
import Layout from '../../Layouts/layout.jsx';
import PlaySVG from "../../assets/Play.svg?react";
import RepeatSVG from "../../assets/repeat.svg?react";
import ShuffleSVG from "../../assets/shuffle.svg?react";
import SkipBackSVG from "../../assets/SkipBack.svg?react";
import SkipForwardSVG from "../../assets/SkipForward.svg?react";
import FavoritesSVG from "../../assets/favorites.svg?react";
import HeadphonesSVG from "../../assets/Headphones.svg?react";
import Group from "../../assets/Group.png";
import VolumeSVG from "../../assets/Volume.svg?react";
import PlayMixSVG from "../../assets/PlayMix.svg?react";
import MoreSVG from "../../assets/More.svg?react";
import DownSVG from "../../assets/Down.svg?react";
import SearchSVG from "../../assets/search.svg?react";
import PlayListImgSub from "../components/music/PlayListImgSub.jsx"
import TracksRandomSix from "../../UI/components/music/TracksRandomSix.jsx"
import AllTrack from '../components/music/AllTrack.jsx';
import "./Style/inputVolume.css";
import "./Style/music.css"
const Music = () => {
  return (
    <div>
      <div className='HeaderMusic'>
        <Layout />
      </div>
      {/* Главная страница и боковая панель  */}
      <div className='mainM'>
        <SiderBarMenu />
        <div className='MainMusic'>
          <div className='CenterMusic'>
            <div className="PlayerMusic">
              <div className='AudioPlayer'>
                <div className="playerCenter">
                  <div className='SkipBack'><button className='Stylenone'><SkipBackSVG /></button></div>
                  <div className='PlayPause'><button className='Stylenone'><PlaySVG /></button></div>
                  <div className='SkipForward'><button className='Stylenone'><SkipForwardSVG /></button></div>
                  <div className='shuffle'><button className='Stylenone'><ShuffleSVG /></button></div>
                  <div className='Repeat'><button className='Stylenone'><RepeatSVG /></button></div>
                </div>
              </div>
              <div className='AudioPlayerBlockTwo'>
                <div className="MainProgressbar">
                  <div className='ImgMusic'><img src={Group} alt="" /></div>
                  <div className="NameANDProgress">
                    <div className='Namesong'>
                      <div className='NameMusic'>Follow ME</div>
                      <div className='NameTrack'>imagine Dragons. MErcury-Act 1</div>
                    </div>
                    <div className='Favorites'><button className='Stylenone'><FavoritesSVG /></button></div>
                    <div className='Headphones'> <button className='Stylenone'><HeadphonesSVG /></button> </div>
                    <div className='seconds'>1:59</div>
                    <div className="Progressbar">
                      <div className='Progress'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='AudioPlayerBlockThree'>
                <div className='volumeCenter'>
                  <div className='ButtonVolume'>
                    <VolumeSVG />
                  </div>
                  <div className='SliderVolume'>
                    <input className="styled-slider slider-progress" type="range" min="0" max="50px" step="0.01" id="volume-slider" />
                  </div>
                  <div className='More'>
                    <MoreSVG />
                  </div>
                </div>
              </div>
            </div>
          </div>
           <div className='Maintrack'>
          <div className='Centertrack'>
            <div className='Tracks0'>
              <div className='Tracks1'>
              <TracksRandomSix/>
              <TracksRandomSix/>
              <TracksRandomSix/>
              </div>
              <div className='Tracks2'>
              <TracksRandomSix/>
              <TracksRandomSix/>
              <TracksRandomSix/>
              </div>
            </div>
            <div className='ButtonsTrack'>
              <div className='ButtonMain'>
                <div className='Button1'><button className='ButtonsTrack1'>Мои треки</button></div>
                <div className='Button2'><button className='ButtonsTrack2'>Рекомендации</button></div>
              </div>
              <div className='ButtonMain2'>
                <div className='Button1.1'><button className='ButtonsTrack3'>Показать всё</button></div>
              </div>
            </div>

          </div>
        </div> 
        <div className='MusicMix'>
          <div className='MusicMixCenter'>
            <div className='MusicMix1'>
              <div className='PlayMixblock'>
                <div className='PlayMix'>
                  <div className='PlayMixSVG'>
                  <PlayMixSVG/>
                  </div>
                </div>
              <div className='TextMix'>Слушать Mix</div>
              </div>
              <div className='SearchMix'>
                <div className='SearchCenter'>
                  <label>
                    <div className='SearchBlock'>
                      <div className='SearchButton'>
                      <SearchSVG/>
                      </div>
                      <div className='Text'>
                     <input type="text" className='searchText' placeholder='Поиск Музыки' />
                      </div>                       
                    </div>
                    </label>
                </div>                  
              </div>
            </div>
          </div>
        </div>
        <div className='PlayList'>
          <div className='PlayListCenter'>
            <div className='PlayListIMG'>
              <PlayListImgSub/>
              <PlayListImgSub/>
              <PlayListImgSub/>
              <PlayListImgSub/>
              <PlayListImgSub/>
            </div>
            <div className='ButtonPlayListMain'>
            <div className='ButtonsPlayList1'>
              <div className='ButtonPlayList2'>
                <div className='Button1List'><button className='ButtonsTrack1List'>Мои плейлисты 5</button></div>
                <div className='Button2List'><button className='ButtonsTrack2List'>Исполнители 5</button></div>
              </div>
              <div className='ButtonMain2'>
                <div className='Button1.1List'><button className='ButtonsTrack3List'>Показать всё</button></div>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className='AllTracks'>
        <div className='NameAllTrack'><div className='NameAllTrackSub'><p>Все треки</p></div></div>
          <div className='Tracks'>
            <AllTrack/>
            <AllTrack/>
            <AllTrack/>
            <AllTrack/>
            <AllTrack/>
            <AllTrack/>
            <AllTrack/>
          </div>
          <div className='AllList'>
              <div className='ButtonAllListMain'>
                <div className='ButtonAllList'><button className='DropDownAll' >Показать всё</button></div>
              </div>
              <div className='DownALLTrack'>
                    <DownSVG />
              </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
