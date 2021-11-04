import React, { FormEvent } from "react";
import { Link, RouteComponentProps } from "react-router-dom";

import { fetchWrapper } from "../../services/fetchWrapper";
import MultiTags from "../../components/multiTags";
import SubStory from "./SubStory";

import "./postForm.scss";
import { Input } from "../../interfaces/input";
import { Method } from "../../interfaces/urlOptions";

interface State {
  // searchValue: string;
  // keywords: string[];
  // page: number;
  // maxPage: number;
  // error: Error | null;
  tags: string[];
  isLoadingTags: boolean;
  title: string;
  content: { head: string; text: string }[];
  picture: string;
  keywords: string[];
}
// this.props.history.push(`/search/${text}`);
export default class PostForm extends React.Component<
  RouteComponentProps<{}>,
  State
> {
  constructor(props: RouteComponentProps<{}>) {
    super(props);

    this.state = {
      tags: [],
      isLoadingTags: true,
      title: "",
      content: [{ head: "", text: "" }],
      picture: "#",
      keywords: [],
    };

    this.changeKeywords = this.changeKeywords.bind(this);
    this.addContentItem = this.addContentItem.bind(this);
    this.deleteContentItem = this.deleteContentItem.bind(this);
    this.setContent = this.setContent.bind(this);
  }

  componentDidMount() {
    fetchWrapper(`getTags`, ({ tags }: { tags: string[] }) => {
      this.setState({
        isLoadingTags: false,
        tags: tags,
      });
    });
    // fetchWrapper(`getArticles?index=${this.props.match.params.index}`, this.stateWrapper);
  }

  setContent(index: number, content: { head?: string; text?: string }) {
    this.setState((prevState) => {
      const newContent = [...prevState.content];
      newContent[index] = { ...prevState.content[index], ...content };
      return {
        content: newContent,
      };
    });
  }

  addContentItem() {
    this.setState((prevState) => {
      const addedContent = [...prevState.content, { head: "", text: "" }];
      return {
        content: addedContent,
      };
    });
  }

  deleteContentItem(index: number) {
    this.setState((prevState) => {
      return {
        content: prevState.content.filter((el, idx) => idx !== index + 1),
      };
    });
  }

  preview(input: Input) {
    let reader = new FileReader();

    if (input.files) {
      reader.readAsDataURL(input.files[0]);
    }

    reader.addEventListener("load", () => {
      input.parentElement.className = "show create__cover__wrapper";
      this.setState({ picture: reader.result as string });
    });
  }

  changeKeywords(tag: string) {
    const { keywords } = this.state;

    if (keywords.includes(tag)) {
      this.setState({
        keywords: [...keywords.filter((el) => el !== tag)],
      });
    } else {
      this.setState({ keywords: [...keywords, tag] });
    }
  }

  postFormData = (e: FormEvent) => {
    e.preventDefault();
    if (this.state.keywords.length > 1) {
      const { tags, isLoadingTags, content, ...data } = this.state;

      const formattedContent = content.map((el) => ({
        ...el,
        text: el.text.split("\n"),
      }));

      const postData = {
        ...data,
        date: Date.now(),
        author: JSON.parse(localStorage.getItem("logged") || "").name,
        content: formattedContent,
      };

      const options = {
        method: Method.POST,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      };

      const formStatus = (resp: { redirectTo: string }, err: number) => {
        console.log(err);
        if (err) {
          alert("something went wrong");
        } else {
          alert("success");
          this.props.history.push(resp.redirectTo);
        }
      };

      fetchWrapper(`createPost`, formStatus, options);
    }
  };

  render() {
    const { tags, keywords, picture, content } = this.state;
    return (
      <form className="main__create" onSubmit={this.postFormData}>
        <label className="create__cover__wrapper">
          <input
            type="file"
            className="create__cover"
            accept="image/*"
            required
            onChange={(e) => {
              const target = e.target as Input;
              this.preview(target);
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
            this.setState({ title: target.value.trim() });
          }}
        />
        <div className="create__sub__wrapper">
          {content.map((el, index) => {
            return (
              <SubStory
                clickHandler={
                  index === content.length - 1
                    ? this.addContentItem
                    : () => this.deleteContentItem(index)
                }
                changeHandler={(value: { head?: string; text?: string }) =>
                  this.setContent(index, value)
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
            checkedTags={keywords}
            clickHandler={this.changeKeywords}
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
  }
}

//     const obj: Article = {
//       title: title!.value.trim(),

//       content: [],

//       picture: filePreview!.src,

//       author: JSON.parse(localStorage.getItem("logged") || "").name,

//       date: Date.now(),

//       keywords: [],
//     };

//   form!.addEventListener("submit", (e) => {
//     e.preventDefault();

//     if (form!.querySelectorAll(".checkbar__label_checked").length > 1) {
//       if (form) {
//         let newPost = createPOST(form);

//         let options = {
//           method: Method.POST,
//           headers: { "Content-Type": "application/json" },
//           body: newPost,
//         };

//         fetchWrapper(`createPost`, formStatus, options);

//         function formStatus(resp: { redirectTo: string }, err: number) {
//           if (err) {
//             alert("something went wrong");
//             window.location.reload();
//           } else {
//             alert("success");
//             window.location.hash = resp.redirectTo;
//           }
//         }
//       }
//     }
//   });
