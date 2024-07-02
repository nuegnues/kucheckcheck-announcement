import React from "react";
import "./AnnounceDetail.css";
import useAnnounceStore from "../store/announceStore";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AnnounceDetail = ({}) => {
  const announceId = useParams().announceId;
  const announces = useAnnounceStore((state) => state.announce);
  const announce = announces.filter((e) => e.id == announceId)[0];
  const deleteAnnounce = useAnnounceStore((state) => state.deleteAnnounce);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteAnnounce(announceId);
    navigate("/announce");
  };

  const handleModify = () => {
    navigate(`/announce/register/${announceId}`);
  };

  return (
    <div className="announce_detail">
      <div className="detail_title_text">
        공지사항<span className="dot">.</span>
      </div>
      <div className="detail_container">
        <table className="announce_detail_table">
          <tr className="announce_detail_table_1st_row">
            <td className="announce_detail_table_title">제목</td>
            <td className="announce_detail_table_date">날짜</td>
          </tr>
          <tr className="announce_detail_table_row">
            <td id="detail_table_title" className="announce_detail_table_title">
              {announce.title}
            </td>
            <td className="announce_detail_table_date">
              {announce.date.getFullYear() +
                "." +
                (announce.date.getMonth() + 1 < 9
                  ? "0" + (announce.date.getMonth() + 1)
                  : announce.date.getMonth() + 1) +
                "." +
                (announce.date.getDate() < 9
                  ? "0" + announce.date.getDate()
                  : announce.date.getDate())}
            </td>
          </tr>
          <tr className="announce_detail_table_1st_row">
            <td colSpan="2" className="announce_detail_table_content">
              내용
            </td>
          </tr>
          <tr className="announce_detail_table_row">
            <td
              colSpan="2"
              id="detail_table_content"
              className="announce_detail_table_content"
            >
              {announce.content}
            </td>
          </tr>
        </table>
        <div className="detail_page_buttons">
          <button className="announce_modify_button" onClick={handleModify}>
            수정
          </button>
          <button className="announce_delete_button" onClick={handleDelete}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnounceDetail;
