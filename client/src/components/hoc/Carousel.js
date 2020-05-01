import React from 'react';
import '../../sass/carousel.scss';

export default class Carousel extends React.Component {
  state = { firstItemIndex: 0, lastItemIndex: 0 };

  componentDidMount = () => {
    const { number } = this.props;
    this.setState({ lastItemIndex: number - 0 });
  };

  onShift = (e) => {
    const val = e.target.dataset.value - 0;
    if (val > 0 && this.state.lastItemIndex === this.props.arr.length) return;
    if (val < 0 && this.state.firstItemIndex === 0) return;
    this.setState({
      firstItemIndex: this.state.firstItemIndex + val,
      lastItemIndex: this.state.lastItemIndex + val,
    });
  };

  render() {
    const { arr, item: Component, number, ...rest } = this.props;
    const { firstItemIndex, lastItemIndex } = this.state;
    return (
      <div className="carousel">
        <i
          className={
            firstItemIndex === 0
              ? 'fas fa-chevron-left carousel__control carousel__control_disabled'
              : 'fas fa-chevron-left carousel__control'
          }
          data-value={-1}
          onClick={this.onShift}
        />
        <div className="carousel__wrapper">
          <ul className="carousel__list">
            {arr &&
              arr.map((item, i) => (
                <li
                  className="carousel__item"
                  key={i}
                  style={
                    i >= firstItemIndex && i < lastItemIndex
                      ? { flex: '0 0 ' + 100 / number + '%', padding: '0 10px' }
                      : {}
                  }
                >
                  <Component item={item} {...rest} />
                </li>
              ))}
          </ul>
        </div>
        <i
          className={
            lastItemIndex === arr.length
              ? 'fas fa-chevron-right carousel__control carousel__control_disabled'
              : 'fas fa-chevron-right carousel__control'
          }
          data-value={1}
          onClick={this.onShift}
        />
      </div>
    );
  }
}
