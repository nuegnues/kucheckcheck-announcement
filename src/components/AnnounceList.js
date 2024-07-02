import React from "react";
import "./AnnounceList.css";
import AnnounceElement from "./AnnounceElement";
import { useNavigate } from "react-router-dom";
import useAnnounceStore from "../store/announceStore";

const AnnounceList = ({}) => {
  const announces = useAnnounceStore((state) => state.announce);
  const navigate = useNavigate();

  return (
    <div className="announcement">
      <div className="announcement_title">
        <div className="title_text">
          공지사항<span className="dot">.</span>
        </div>
        <button
          className="register_button"
          onClick={() => {
            navigate("/announce/register");
          }}
        >
          새 글 등록
        </button>
      </div>

      <div className="announcement_contents">
        <div className="announcement_search_container">
          <input
            className="announcement_search_input"
            type="text"
            placeholder="검색어를 입력하세요"
          />
          <svg
            className="announcement_search_logo"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="currentColor"
                d="M10.5 2a8.5 8.5 0 1 0 5.262 15.176l3.652 3.652a1 1 0 0 0 1.414-1.414l-3.652-3.652A8.5 8.5 0 0 0 10.5 2M4 10.5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0"
              />
            </g>
          </svg>
        </div>
        <table id="announce_table">
          <tr className="announce_table_1st_row">
            <td id="title" className="announce_table_title">
              제목
            </td>
            <td className="announce_table_date">날짜</td>
          </tr>
          {announces.map((announce) => (
            <AnnounceElement key={announce.id} announce={announce} />
          ))}
        </table>
        <div className="announce_page_bar">
          <svg
            id="left_direction"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M4.207 12.267a.75.75 0 0 1 .026-1.06l5.25-5.002a.75.75 0 0 1 1.035 0l5.25 5.001a.75.75 0 0 1-1.034 1.086L10 7.784l-4.734 4.508a.75.75 0 0 1-1.06-.025"
            />
          </svg>
          <div className="announce_page_number">1</div>
          <svg
            id="right_direction"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M4.207 12.267a.75.75 0 0 1 .026-1.06l5.25-5.002a.75.75 0 0 1 1.035 0l5.25 5.001a.75.75 0 0 1-1.034 1.086L10 7.784l-4.734 4.508a.75.75 0 0 1-1.06-.025"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AnnounceList;
