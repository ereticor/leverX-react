import React from "react";

interface Props {
  clickHandler: () => void;
  changeHandler: (value: { head?: string; text?: string }) => void;
  isAdding: boolean;
}

const SubStory = ({ clickHandler, changeHandler, isAdding }: Props) => {
  return (
    <div className="create__sub__story">
      <h6 className="create__head">Enter the subtitle of your article</h6>
      <input
        type="text"
        className="create__sub create__text"
        placeholder="Enter Subtitle"
        required
        onChange={(e) => {
          changeHandler({ head: e.target.value });
        }}
      />
      <h6 className="create__head">Tell your story...</h6>
      <textarea
        className="create__area"
        rows={25}
        required={true}
        onChange={(e) => {
          changeHandler({ text: e.target.value });
        }}
      ></textarea>
      {isAdding ? (
        <button className="create__btn btn" onClick={clickHandler}>
          Add new block
        </button>
      ) : (
        <button
          className="create__btn btn remove__story"
          onClick={clickHandler}
        >
          Remove next block
        </button>
      )}
    </div>
  );
};

export default SubStory;
