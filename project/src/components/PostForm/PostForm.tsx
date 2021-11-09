import React, { FormEvent, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Input } from "../../interfaces/input";
import { Method } from "../../interfaces/urlOptions";
import { ActionProps, SelectorProps } from "interfaces/tags";

import WithError from "../../hocs/WithError";

import { fetchWrapper } from "../../services/fetchWrapper";

import MultiTags from "../../components/multiTags";
import SubStory from "./SubStory";

import "./postForm.scss";

interface Props extends ActionProps, SelectorProps {}

const PostForm = ({ tags, getTags, isLoadingTags }: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState([{ head: "", text: "" }]);
  const [picture, setPicture] = useState("#");
  const [keywords, setKeywords] = useState<string[]>([]);

  const history = useHistory();

  useEffect(() => {
    if (!tags.length) {
      getTags();
    }
  }, []);

  const updateContent = (
    index: number,
    content: { head?: string; text?: string }
  ) => {
    setContent((prevState) => {
      const newContent = [...prevState];
      newContent[index] = { ...prevState[index], ...content };
      return newContent;
    });
  };

  const addContentItem = () => {
    setContent((prevState) => {
      const addedContent = [...prevState, { head: "", text: "" }];
      return addedContent;
    });
  };

  const deleteContentItem = (index: number) => {
    setContent((prevState) => {
      return prevState.filter((el, idx) => idx !== index + 1);
    });
  };

  const preview = (input: Input) => {
    let reader = new FileReader();

    if (input.files) {
      reader.readAsDataURL(input.files[0]);
    }

    reader.addEventListener("load", () => {
      setPicture(reader.result as string);
    });
  };

  const changeKeywords = (tag: string) => {
    setKeywords((prevKeywords) => {
      if (prevKeywords.includes(tag)) {
        return [...keywords.filter((el) => el !== tag)];
      }
      return [...keywords, tag];
    });
  };

  const postFormData = (e: FormEvent) => {
    e.preventDefault();
    if (keywords.length > 1) {
      const formattedContent = content.map((el) => ({
        ...el,
        text: el.text.split("\n"),
      }));

      const postData = {
        title,
        content: formattedContent,
        picture,
        keywords,
        author: JSON.parse(localStorage.getItem("logged") || "").name,
        date: Date.now(),
      };

      const options = {
        method: Method.POST,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      };

      const formStatus = (resp: { redirectTo: string }, err: number) => {
        if (err) {
          alert("something went wrong");
          history.go(0);
        } else {
          alert("success");
          history.push(resp.redirectTo);
        }
      };

      fetchWrapper(`createPost`, formStatus, options);
    }
  };

  return (
    <form className="main__create" onSubmit={postFormData}>
      <label
        className={`create__cover__wrapper ${picture === "#" ? "" : "show"}`}
      >
        <input
          type="file"
          className="create__cover"
          accept="image/*"
          required
          onChange={(e) => {
            const target = e.target as Input;
            preview(target);
          }}
        />
        <img src={picture} alt="uploaded" className="create__preview" />
        <span>+</span> Add Cover
      </label>
      <h6 className="create__head">Enter the title of your article</h6>
      <input
        type="text"
        className="create__title create__text"
        placeholder="Enter Title"
        required
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          setTitle(target.value.trim());
        }}
      />
      <div className="create__sub__wrapper">
        {content.map((el, index) => {
          return (
            <SubStory
              clickHandler={
                index === content.length - 1
                  ? addContentItem
                  : () => deleteContentItem(index)
              }
              changeHandler={(value: { head?: string; text?: string }) =>
                updateContent(index, value)
              }
              isAdding={index === content.length - 1}
              key={`content ${index}`}
            />
          );
        })}
      </div>
      <h6 className="create__head">Add tag information</h6>
      <div className="create__tags">
        <MultiTags
          tags={tags}
          isLoading={isLoadingTags}
          checkedTags={keywords}
          clickHandler={changeKeywords}
        />
      </div>
      <div className="form__foot">
        <Link to="/" className="btn btn_cancel link_btn">
          Cancel
        </Link>
        <button className="btn btn_submit" type="submit">
          Publish
        </button>
      </div>
    </form>
  );
};

export default WithError(PostForm);
