import React from 'react';
import store from '../../store/store';

export default class Shown extends React.Component {
  constructor(){
    super();
    this.shownRef = React.createRef();
  }

  render() {
    const {component: Component, ...rest} = this.props;
    const { common } = store.getState();
    const slideInAt = (common.scroll + window.innerHeight) - 300;
    const element = this.shownRef.current;
    const styles = {transition: '0.4s', position: "relative", top: 0}
    if (element) {
      if(slideInAt < element.offsetTop) {
        styles.opacity = 0;
        styles.visibility = "collapse";
        styles.top= "50px";
      }
    }
    
    return (
      <div ref={this.shownRef} {...rest} style={styles}>
        <Component {...rest}  />
      </div>
    );
  }
}