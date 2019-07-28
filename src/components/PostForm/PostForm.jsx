import React, { PureComponent } from "react";
import { connect } from "react-redux";

export class PostForm extends PureComponent {
  render() {
    return <div>POSTFORM</div>;
  }
}
const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
