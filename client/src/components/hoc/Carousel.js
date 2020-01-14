import React from "react";
import '../../sass/carousel.scss';

export default class Carousel extends React.Component {
  state = { shift: 0 };

  onShift = e => {
    const val = e.target.dataset.value;
    const step = 300;
    const shift = step * val + this.state.shift;
    this.setState({shift});
    
  }

  render() {
    const { arr, item: Component, number, ...rest } = this.props;
    const persent = 100 / number + "%";
    return (
      <div className="carousel">
        <i className="fas fa-chevron-left carousel__control" data-value={1} onClick={this.onShift} />
        <div className="carousel__wrapper">
          <ul className="carousel__list" style={{left: this.state.shift}}>
            {arr.map((item, i) => (
              <li className="carousel__item" style={{ flex: "0 0 " + persent }} key={i}>
                <Component item={item} {...rest} />
              </li>
            ))}
          </ul>
        </div>
        <i className="fas fa-chevron-right carousel__control" data-value={-1} onClick={this.onShift}  />
      </div>
    );
  }
}
