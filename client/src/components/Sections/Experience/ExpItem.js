import React, { Component } from 'react';
import { computeExperiencePeriod } from '../../../utils/computeExpPeriod';

export default class ExpItem extends Component {
  state = {
    shown: false
  }
  render() {
    const { exp } = this.props;
    const date = computeExperiencePeriod(exp);
    const descrArr = exp.description.split(";");
    return (
      <li className="exp__item">
        <div className="exp__card">
          <img src={`/photo/${exp.icon}`} alt={exp.company} className="exp__img" />
          <div className="exp__content">
            <p className="exp__title">{exp.title} {!this.state.shown && <i className="fas fa-caret-square-down exp__descControl" onClick={() => this.setState({shown: true})} ></i>}</p>
            <p className="exp__company">{exp.company}</p>
            <p className="exp__date">{date}</p>
            
          </div>
        </div>
        <div className={this.state.shown ? 'exp__description_active exp__description' : 'exp__description'}>
          <h5 className="exp__descriptionTitle">
            Description  
            <i className="fas fa-caret-square-up exp__descControl" onClick={() => this.setState({shown: false})}></i>
          </h5>
          <ul>
            {descrArr.map((desc, i) => (<li className="exp__descItem" key={i}>
              <i className="fas fa-directions exp__descIcon"></i>
              {desc}
            </li>))}
          </ul>
        </div>
      </li>
    );
  }
}
