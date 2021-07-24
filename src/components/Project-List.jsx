import React from "react";
import Project from "./Project";
import {projects} from "../utils/constants";

const ProjectsList = () => {
  const renderProjectsList = () => {
    return projects.map((item, index) => {
      return <Project {...item} index={index} key={index} />;
    });
  };

  return <section className="grid">{renderProjectsList()}</section>;
};

export default ProjectsList;
