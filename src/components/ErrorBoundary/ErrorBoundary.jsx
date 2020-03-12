import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    console.log("error derivered");
    return { error: error, errorInfo: error };
  }

  componentDidCatch(error, errorInfo) {
    alert(error);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.log("errorInfo", errorInfo);
  }

  render() {
    if (this.state.errorInfo) {
      return <h1>Button has crashed</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
