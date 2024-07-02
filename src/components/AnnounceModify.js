import React, { useState } from "react";
import "./AnnounceRegister.css";
import useAnnounceStore from "../store/announceStore";
import { useNavigate, useParams } from "react-router-dom";

const AnnounceModifiy = () => {
  const announceId = useParams().announceId;
  const announces = useAnnounceStore((state) => state.announce);
  const announce = announces.filter((e) => e.id == announceId)[0];
  const modifyAnnounce = useAnnounceStore((state) => state.modifyAnnounce);

  const [title, setTitle] = useState(announce.title);
  const [content, setContent] = useState(announce.content);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;
    modifyAnnounce(announceId, title, content);
    setTitle("");
    setContent("");
    navigate("/announce");
  };

  return (
    <form onSubmit={handleSubmit} className="announce_register">
      <div className="title_text">
        공지사항 수정<span className="dot">.</span>
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
            value={title}
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div id="button_container">
          <button className="announce_register_button">수정</button>
        </div>
      </div>
    </form>
  );
};

export default AnnounceModifiy;
