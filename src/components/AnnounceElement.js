import React from "react";
import "./AnnounceElement.css";
import { useNavigate } from "react-router-dom";

const AnnounceElement = ({ announce }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/announce/detail/${announce.id}`);
  };

  return (
    <tr className="announce_table_row">
      <td className="announce_table_title" onClick={handleClick}>
        {announce.title}
      </td>
      <td className="announce_table_date">
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
  );
};

export default AnnounceElement;
