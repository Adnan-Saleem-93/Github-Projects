import React from "react";
import {Card} from "react-bootstrap";

const Project = ({index, name, url, thumbnail, image}) => {
  const projectClickHandler = () => {
    window.open(url, "_blank");
  };

  const handleMouseOver = () => {
    document.getElementById(index).style =
      "background-color: rgba(138, 137, 228, 0.322); color: rgb(47, 12, 94);";
  };
  const handleMouseOut = () => {
    document.getElementById(index).style = "background-color: white; color: black";
  };

  return (
    <article>
      <Card
        style={{width: "18rem"}}
        onClick={projectClickHandler}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Card.Img variant="top" src={"./images/" + image} alt={image} />
        <Card.Body id={index}>
          <Card.Title className="text-center">{name}</Card.Title>
        </Card.Body>
      </Card>
    </article>
  );
};

export default Project;
