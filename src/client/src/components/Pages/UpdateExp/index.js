import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./style.scss";
import PageTitle from "../../Common/PageTitle";
import Input from "../../Common/Input";
import { getExp, updateExp } from "../../../store/actions/experience";
import Spinner from "../../Common/Spinner";

export class index extends Component {
  state = {
    exp_title: "",
    range: "",
    exp_company: "",
    exp_from: "",
    exp_to: "",
    exp_is_current: false,
    exp_image: "",
    exp_description: ""
  };

  componentDidMount() {
    if (!this.props.experience.exp) this.props.getExp();
    else this.onStateInit();
  }

  componentDidUpdate(prev) {
    if (!prev.experience.exp && this.props.experience.exp) this.onStateInit();
  }

  onStateInit() {
    const { id } = this.props.match.params;
    const theExp = this.props.experience.exp.find(i => i.id - 0 === id - 0);
    this.setState({
      exp_title: theExp.exp_title,
      range: theExp.range,
      exp_company: theExp.exp_company,
      exp_from: theExp.exp_from,
      exp_to: theExp.exp_to,
      exp_is_current: theExp.exp_is_current,
      exp_image: theExp.exp_image,
      exp_description: theExp.exp_description
    });
  }

  static propTypes = {
    experience: PropTypes.object.isRequired,
    getExp: PropTypes.func.isRequired,
    updateExp: PropTypes.func.isRequired
  };

  onSubmit(e) {
    e.preventDefault();
    const { id } = this.props.match.params;
    this.props.updateExp({ ...this.state, id }, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { exp, loading, error } = this.props.experience;
    return (
      <div className="page">
        <PageTitle text="Update Experience" />
        <div className="container">
          {exp && (
            <form onSubmit={this.onSubmit.bind(this)}>
              <Input
                onChange={this.onChange.bind(this)}
                name="exp_title"
                value={this.state.exp_title}
              />
              <Input
                onChange={this.onChange.bind(this)}
                name="range"
                value={this.state.range}
              />
              <Input
                onChange={this.onChange.bind(this)}
                name="exp_company"
                value={this.state.exp_company}
              />
              <Input
                onChange={this.onChange.bind(this)}
                name="exp_from"
                value={this.state.exp_from}
              />
              <div>
                <input
                  type="checkbox"
                  onChange={() =>
                    this.setState({
                      exp_is_current: !this.state.exp_is_current
                    })
                  }
                />
                {!this.state.exp_is_current && (
                  <Input
                    onChange={this.onChange.bind(this)}
                    name="exp_to"
                    value={this.state.exp_to}
                  />
                )}
              </div>
              <Input
                onChange={this.onChange.bind(this)}
                name="exp_image"
                value={this.state.exp_image}
              />
              <Input
                onChange={this.onChange.bind(this)}
                name="exp_description"
                value={this.state.exp_description}
              />
              <button type="submit">Save</button>
            </form>
          )}

          {error && <p className="error">{error}</p>}
          {loading && <Spinner />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  experience: state.experience
});

export default connect(
  mapStateToProps,
  { getExp, updateExp }
)(withRouter(index));
