import React from "react";


function Displayquotes({ simpsonquote }) {
  return (
    <div className="DisplayQuotes">
      <img src={simpsonquote.image} alt={simpsonquote.image} />
        <p> Quotes : " {simpsonquote.quote} {" "} "</p>
        <p>Name : {simpsonquote.character} {" "}</p>
      </div>
  )
}
export default Displayquotes;
