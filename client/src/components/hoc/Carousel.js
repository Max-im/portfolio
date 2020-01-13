import React from "react";

export default class Carousel extends React.Component {
  state = { shift: 0 };

  render() {
    const { arr, item: Component, number, ...rest } = this.props;
    return (
      <div className="carousel" style={{ width: "100%", overflow: "hidden" }}>
        <div className="carousel__wrapper">
          prev
          <ul style={{ display: "flex" }}>
            {arr.map((item, i) => (
              <li style={{ flex: "0 0 calc(100% / " + number + ")" }} key={i}>
                <Component item={item} {...rest} />
              </li>
            ))}
          </ul>
          next
        </div>
      </div>
    );
  }
}
