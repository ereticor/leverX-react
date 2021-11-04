import React from "react";
import Tag from "./Tag";

import "./multiTags.scss";

interface Props {
  error?: number | null;
  tags: string[];
  checkedTags?: string[];
  isLoading?: boolean;
  clickHandler: (tag: string) => void;
}

const MultiTags = ({
  error,
  isLoading,
  tags,
  checkedTags = [],
  clickHandler,
}: Props) => {
  if (error) {
    return <p className="main_error">{error} occurred</p>;
  }
  if (isLoading) {
    return <p className="main_load">Loading</p>;
  }
  return (
    <>
      {tags.map((tag, index) => (
        <Tag
          key={`tag: ${index}`}
          text={tag}
          clickHandler={clickHandler}
          isChecked={checkedTags.includes(tag)}
        />
      ))}
    </>
  );
};

export default MultiTags;
