import React from "react";
import "./Menu.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="menu">
      <div className="menu_title">
        책 관리<span className="dot">.</span>
      </div>
      <div className="menu_contents">
        <button className="menu_button">책 목록</button>
        <button className="menu_button">대출 목록</button>
      </div>
      <div className="menu_title">
        사용자 관리<span className="dot">.</span>
      </div>
      <button className="menu_button">사용자 목록</button>
      <div className="menu_title">
        게시판 관리<span className="dot">.</span>
      </div>
      <button
        className="menu_button"
        onClick={() => {
          navigate("/announce");
        }}
      >
        공지사항
      </button>
    </div>
  );
};

export default Menu;
