import React from "react";
import Tag from "./Tag";

import "./multiTags.scss";

interface Props {
  error?: Error | null;
  tags: string[];
  checkedTags?: string[];
  isLoading?: boolean;
  clickHandler: (tag: string) => void;
}

export default class MultiTags extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {
      error,
      isLoading,
      tags,
      checkedTags = [],
      clickHandler,
    } = this.props;
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
  }
}
