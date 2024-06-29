import React, { useState } from 'react';
import axios from 'axios'
import './Style/ModalWindow.css';

const ModalWindow = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    const [desc, setDesc] = useState(null)
    const [avatar, setAvatar] = useState(null)
    const [background, setBackground] = useState(null)
    const nowUser = JSON.parse(localStorage.getItem('user'))

    const handleDescriptionEnter = () => {
        if(desc.length > 100) {
            console.log(`МНОГО`)
            return
        }else{
            console.log(`НОРМАЛЬНО`);
            fetch('http://localhost:3000/settings/description', {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    login: nowUser.login,
                    content: desc,
                })
            })
                .then(response => response.json())
                .then(response => {
                    if(response.status == 200){
                        console.log(`Отправка 200`)
                        location.reload()
                    }else{
                        console.log('Ошибка публикации: '+response.error)
                    }
                })
                .catch(error => {
                    console.error('Error fetching login:', error);
                });
        }
    }

    const handleAvaEdit = async() => {
        console.log(`AVATAR: `+avatar)
        try {
            const Imgdata = new FormData();
            const file = avatar

            Imgdata.append('avatar', file);
            Imgdata.append('userName', nowUser.login);
        
            await axios.post('http://localhost:3000/userAvatarUpload', Imgdata, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
          } catch (e) {
            console.log(`React Error: ${e}`);
          }
    }

    const handleBackgroundEdit = async() => {
        console.log(`AVATAR: `+avatar)
        try {
            const Imgdata = new FormData();
            const file = background

            Imgdata.append('background', file);
            Imgdata.append('userName', nowUser.login);
        
            await axios.post('http://localhost:3000/userBackgroundUpload', Imgdata, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
          } catch (e) {
            console.log(`React Error: ${e}`);
          }
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className='header-block'>
                    <button className="close-button" onClick={onClose}>×</button>
                    <h2>Редактировать профиль</h2>
                </div>
                <div className='UserAvatar-block'>
                    <h2>Фото профиля</h2>
                    <input 
                        type="file"
                        onChange={(e) => {setAvatar(e.target.files[0])}}
                        className='UserAvatar-smena'>
                    </input>
                    <button className='EditButModal' onClick={handleAvaEdit}>Изменить</button>
                </div>
                <div className='Background-block'>
                    <div className='TextMore-block'>
                        <h2>Обложка профиля</h2>
                        <button className='EditButModal' onClick={handleBackgroundEdit}>Изменить</button>
                    </div>
                    <input 
                        type="file"
                        onChange={(e) => {setBackground(e.target.files[0])}}
                        className='Background-img'>
                    </input>
                </div>
                <div className='DopInfo-block'>
                    <div className='TextMore-block'>
                        <h2>О себе</h2>
                        <button className='EditButModal' onClick={handleDescriptionEnter}>Подвтердить</button>
                    </div> 
                    <div className='ObertckaInf'>
                        <textarea className='descriptionArea' placeholder='Введите описание' onChange={(e) => { setDesc(e.target.value) }}></textarea>
                    </div>              
                </div>
                {/* <div className='Confirm-block'>
                    <button className='confirmBut'>Готово</button>
                </div> */}
            </div>
        </div>
    );
};

export default ModalWindow;