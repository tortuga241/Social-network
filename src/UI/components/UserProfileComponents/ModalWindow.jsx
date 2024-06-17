import React from 'react';
import './Style/ModalWindow.css';

const ModalWindow = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
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
                    <div className='UserAvatar-smena'></div>
                    <button className='EditButModal'>Редактировать</button>
                </div>
                <div className='Background-block'>
                    <div className='TextMore-block'>
                        <h2>Обложка профиля</h2>
                        <button className='EditButModal'>Редактировать</button>
                    </div>
                    <div className='Background-img'></div>
                </div>
                <div className='DopInfo-block'>
                    <div className='TextMore-block'>
                        <h2>О себе</h2>
                        <button className='EditButModal'>Редактировать</button>
                    </div> 
                    <div className='ObertckaInf'>
                        <div className='WorkStydiPlace'>Учится в </div>
                        <div className='InfoCity'>Живёт в </div>    
                    </div>              
                </div>
                <div className='Confirm-block'>
                    <button className='confirmBut'>Готово</button>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;