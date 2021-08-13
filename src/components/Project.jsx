import React from "react";
import {Card} from "react-bootstrap";

const Project = ({index, name, url, thumbnail, image}) => {
  const projectClickHandler = () => {
    window.open(url, "_blank");
  };

  const handleMouseOver = () => {
    document.getElementById(`card-body-${index}`).style = "color: rgb(47, 12, 94);";
  };
  const handleMouseOut = () => {
    document.getElementById(`card-body-${index}`).style = "color: black";
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
        <Card.Body id={`card-body-${index}`}>
          <Card.Title className="text-center">{name}</Card.Title>
        </Card.Body>
      </Card>
    </article>
  );
};

export default Project;
