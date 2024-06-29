import React from 'react';
import '../../pages/Style/messenger.css';

const DialogText = ({ dialogTextId }) => {
    const dialogsText = {
        1: (
            <div className="DialogTextDiv1">
                <div className="DialogNameTime">
                    <p className="DialogName" id='NameDialog1'>Миша</p>
                    <p className="DialogTime" id='TimeDialog1'>16:09</p>
                </div><br />
                <div className="DialogText" id='DialogText1'>
                    <p>Эу</p><br />
                    <p>Эу</p><br />
                    <p>Эу</p><br />
                    <p>Слышишь?</p><br />
                    <p>Да, это снова я</p><br />
                    <p>По поводу тусы</p><br />
                    <p>Пишу сообщить</p><br />
                    <p>Встречаемся 24-го в 10:00</p><br />
                    <p>Приходи</p><br />
                    <p>Будет круто</p><br />
                </div>
            </div>
        ),
        2: (
            <div className="DialogTextDiv1">
                <div className="DialogNameTime2">
                    <p className="DialogName" id='NameDialog2'>Николай</p>
                    <p className="DialogTime" id='TimeDialog2'>16:19</p>
                </div><br />
                <div className="DialogText" id="DialogText2">
                    <p>Ну здарова</p><br />
                    <p>Ок, приду</p><br />
                    <p>Может нет, может да, а может пошёл ты</p><br />
                    <p>Ладно, я буду как договаривались</p><br />
                </div>
            </div>
            
        ),
        3:(
            <div className="DialogTextDiv1">
                <div className="DialogNameTime">
                    <p className="DialogName" id='NameDialog1'>Миша</p>
                    <p className="DialogTime" id='TimeDialog1'>8:00</p>
                </div><br />
                <div className="DialogText" id='DialogText1'>
                    <p>Здарова зайбал, че как отходняк после тусы? Думаю тебе понравилось
                    было забавно</p><br />
                    
                </div>
            </div>
        ),
        4:(
            <input type="text" placeholder="Написать сообщение..." className="DialogInput" id="InputDialog" />
        )
    };

    return dialogsText[dialogTextId] || null;
};

export default DialogText;
