import React from "react";
import {Card} from "react-bootstrap";

const Project = ({name, url, thumbnail, image}) => {
  const projectClickHandler = () => {
    window.open(url, "_blank");
  };

  return (
    <article>
      <Card style={{width: "18rem"}} onClick={projectClickHandler}>
        <Card.Img variant="top" src={"./images/" + image} alt={image} />
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
        </Card.Body>
      </Card>
    </article>
  );
};

export default Project;
