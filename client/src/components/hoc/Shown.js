import React from "react";
import { connect } from "react-redux";

class Shown extends React.Component {
  constructor() {
    super();
    this.shownRef = React.createRef();
  }

  state = { shown: true };

  componentDidMount = () => {
    this.updateShown();
  };

  componentDidUpdate = prev => {
    if (!this.state.shown && this.props.common.scroll !== prev.common.scroll) {
      this.updateShown();
    }
  };

  updateShown = () => {
    const windowHeight = window.innerHeight;
    const fromTop = this.shownRef.current.getBoundingClientRect().top;
    const showElementTop = 100;
    const fromBottom = windowHeight - fromTop - showElementTop;
    this.setState({ shown: fromBottom > 0 });
  };

  render() {
    const { component: Component, className, ...rest } = this.props;
    const shown = {
      transition: "ease-out 0.4s",
      position: "relative",
      transform: "none"
    };
    const hidden = {
      transition: "ease-out 0.4s",
      position: "relative",
      transform: "translate(0px, 50px)",
      opacity: 0,
      visibility: "collapse"
    };
    const styles = this.state.shown ? shown : hidden;

    return (
      <div ref={this.shownRef} className={className} style={styles}>
        <Component {...rest} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  common: state.common
});

export default connect(mapStateToProps)(Shown);
