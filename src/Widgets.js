import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets_article">
        <div className="widgets_articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets_articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Coronavirus: USA updates", "Top news - 765 readers")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 9875 readers")}
      {newsArticle("Bitcoin breaks $22K", "Crypto - 8764 readers")}
      {newsArticle("Is Redux too good", "Code - 495 readers")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 9875 readers")}
      {newsArticle("Bitcoin breaks $22K", "Crypto - 8764 readers")}
    </div>
  );
}

export default Widgets;
