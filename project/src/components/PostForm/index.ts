import PostForm from "./PostForm";
import { connect } from "react-redux";
import { ActionCreators, selectors } from "../../domains/app";
import { createStructuredSelector } from "reselect";

const selector = createStructuredSelector({
  tags: selectors.getTags,
  isLoadingTags: selectors.isLoadingTags,
});

const mapDispatchToProps = {
  getTags: ActionCreators.getTags,
};

export default connect(selector, mapDispatchToProps)(PostForm);
