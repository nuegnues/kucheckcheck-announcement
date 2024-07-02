import React, { useState } from "react";
import "./AnnounceRegister.css";
import useAnnounceStore from "../store/announceStore";
import { useNavigate } from "react-router-dom";

const AnnounceRegister = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const addAnnounce = useAnnounceStore((state) => state.addAnnounce);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;
    addAnnounce(title, content);
    setTitle("");
    setContent("");
    navigate("/announce");
  };

  return (
    <form onSubmit={handleSubmit} className="announce_register">
      <div className="title_text">
        공지사항 등록<span className="dot">.</span>
      </div>
      <div id="register_container">
        <div id="register_title">
          <div id="register_title_title">
            제목<span className="dot">.</span>
          </div>
          <input
            id="register_title_input"
            type="text"
            placeholder="제목"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div id="register_content">
          <div id="register_content_title">
            내용<span className="dot">.</span>
          </div>
          <textarea
            id="register_content_input"
            type="text"
            placeholder="내용"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div id="button_container">
          <button className="announce_register_button">등록</button>
        </div>
      </div>
    </form>
  );
};

export default AnnounceRegister;
