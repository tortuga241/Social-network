import React, { useState } from "react";
import "./Style/ProfileAddPost.css";

const ProfileAddPost = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [text, setText] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleTextareaChange = (e) => {
        setText(e.target.value);
    };

    const handlePost = () => {
        console.log("Post submitted with text:", text, "and image:", imagePreview);
        setText("");
        setImagePreview(null);
    };

    return (
        <div className="addContent">
            <div className="form">
                <div className="add-post" id="add-post">
                    <div className="avatar" id="avatar"></div>
                    <div className="name" id="name"></div>
                    <div className="post-img" id="post-img"></div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        {imagePreview && <img id="image-preview" src={imagePreview} alt="Preview" style={{ display: "block" }} />}
                        <textarea
                            id="expandingTextarea"
                            rows="1"
                            placeholder="Что у вас нового?"
                            value={text}
                            onChange={handleTextareaChange}
                        ></textarea>
                        <input
                            type="file"
                            id="file-input"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                        />
                        <label htmlFor="file-input" id="file-label">
                            <i className="fa-regular fa-image"></i>
                        </label>
                        <button id="button-output" type="button" onClick={handlePost}>
                            Опубликовать
                        </button>
                    </form>
                </div>
            </div>
            <input type="file" id="image-input" accept="image/*" style={{ display: "none" }} />
            <div id="image-container"></div> {/* Контейнер для отображения измененного изображения */}
        </div>
    );
};

export default ProfileAddPost;