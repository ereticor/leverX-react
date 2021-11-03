import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { fetchWrapper } from "../../services/fetchWrapper";
import spellChecker from "helpers/spellChecker";
import MultiTags from "../../components/multiTags";
import SubStory from "./SubStory";

import './postForm.scss'

export default class PostForm extends React.Component {
  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   _id: "",
  //   //   index: 0,
  //   //   title: "",
  //   //   content: [],
  //   //   picture: "",
  //   //   author: "",
  //   //   date: 0,
  //   //   keywords: [],
  //   // }

  //   // this.stateWrapper = this.stateWrapper.bind(this)
  // }

  componentDidMount() {
    // fetchWrapper(`getArticles?index=${this.props.match.params.index}`, this.stateWrapper);
  }

  render() {
    // const { title, content, author, date, keywords, picture } = this.state;
    return (
      <form className="main__create">
      <label className="create__cover__wrapper">
        <input
          type="file"
          className="create__cover"
          accept="image/*"
          required={true}
        />
        <img src="#" alt="uploaded" className="create__preview" />
        <span>+</span> Add Cover
      </label>
      <h6 className="create__head">Enter the title of your article</h6>
      <input
        type="text"
        className="create__title create__text"
        placeholder="Enter Title"
        required={true}
      />
      <div className="create__sub__wrapper">
        <SubStory/>
      </div>
      <h6 className="create__head">Add tag information</h6>
      <div className="create__tags">
        <MultiTags tags={[]} clickHandler={() => {}}/>
      </div>
      <div className="form__foot">
        <button className="btn btn_cancel">Cancel</button>
        <button className="btn btn_submit" type="submit">
          Publish
        </button>
      </div>
    </form>
    );
  }
}
