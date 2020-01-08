import React, { Component } from "react";

class ProjectsAside extends Component {
  state = { mt: 30 }

  componentDidMount = () => {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    const limit = 220;
    const scroll = document.documentElement.scrollTop;
    if (scroll > limit) {
      this.setState({ mt: 30 + scroll - limit });
    }
    else if(this.state.mt !== 30) {
      this.setState({ mt: 30 });
    }
  }

  render(){
    return (
      <div className="projectsAside" style={{marginTop: this.state.mt}}>
       lorem
      </div>
    );
  }
}

export default ProjectsAside;
