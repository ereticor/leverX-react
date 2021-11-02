import React from "react";

export default class SubStory extends React.Component {
  render() {
    return (
      <div className="create__sub__story">
        <h6 className="create__head">Enter the subtitle of your article</h6>
        <input
          type="text"
          className="create__sub create__text"
          placeholder="Enter Subtitle"
          required={true}
        />
        <h6 className="create__head">Tell your story...</h6>
        <textarea className="create__area" rows={25} required={true}></textarea>
        <button className="create__btn btn">Add new block</button>
      </div>
    );
  }
}
