import React, { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.css";

export default function Dashboard({ user }) {
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    const saveToDrive = async () => {
        console.log(title);
        console.log(content);
        await axios.post("http://localhost:5000/letters/upload", {
            title,
            content,
        }).then((res) =>{
        })
        alert("Saved to Google Drive!");
    };

    return (
        <div className="container">
            <div className="Logout-botton-setup">
                <h2>Welcome, </h2>
                <a href="http://localhost:5000/auth/logout" className="logout-button">Logout</a>
            </div>
            
            <h3>You can create you're own Letter</h3>
            <input
                type="text"
                placeholder="Letter Title"
                value={title}
                className="letter-title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <ReactQuill value={content} onChange={setContent} />
            <button className="save-button" onClick={saveToDrive}>Save</button>
        </div>
    );
}
