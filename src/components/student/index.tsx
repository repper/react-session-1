import React, { FunctionComponent } from "react";

type PropsModel = {
  stud: {
    name: string;
  };
  isLiked: boolean;
};

const student: FunctionComponent<PropsModel> = props => {
  return <div>{props.stud.name}</div>;
};

export default student;
