import React from 'react';
import store from '../../store/store';

export default class Shown extends React.Component {
  constructor(){
    super();
    this.shownRef = React.createRef();
  }

  render() {
    const {component: Component, className, ...rest} = this.props;
    const element = this.shownRef.current;
    const { common } = store.getState();
    const slideInAt = (common.scroll + window.innerHeight) - 300;
    const shown = {transition: 'ease-out 0.4s', position: 'relative',  transform: 'none'};
    const hidden = {transition: 'ease-out 0.4s', position: 'relative',  transform: 'translate(0px, 50px)', opacity: 0, visibility : 'collapse'};
    let styles = shown;
    if (element && slideInAt < element.offsetTop) {
        styles = hidden;
    }
    
    return (
      <div ref={this.shownRef} className={className} >
        <Component {...rest}  />
      </div>
    );
  }
}