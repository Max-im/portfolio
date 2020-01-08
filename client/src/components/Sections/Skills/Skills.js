import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import mixitup from 'mixitup';
import SkillItem from './SkillItem';
import Category from './Category';
import Spinner from "../../Common/Spinner";
import { getSkills } from '../../../store/actions/resume';
import './style.scss';

export class Skills extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  state = { catIds: [] };

  componentDidMount() {
    if (!this.props.skills.isReady) {
      this.props.getSkills();
    }
  }

  componentDidUpdate(prev) {
    if (!prev.skills.categories && this.props.skills.categories) {
      const catIds = this.props.skills.categories.map(i => i.id);
      this.setState({ catIds });
    }
  }

  static propTypes = {
    skills: PropTypes.object.isRequired,
    getSkills: PropTypes.func.isRequired
  };

  render() {
    const { skills, categories, error, isReady } = this.props.skills;
    if (this.myRef.current) {
      mixitup(this.myRef.current);
    }

    return (
      <section className="section skills">
        <div className="container">
          <h3 className="section__title">Skills</h3>

          {!error && isReady && (
            <>
              <ul className="categories">
                {categories.map(cat => (
                  <Category category={cat} key={cat.id}/>
                ))}
              </ul>

              <ul className="skills__list" ref={this.myRef}>
                {skills.map(skill => (
                  <SkillItem key={skill.id} skill={skill} />
                ))}
              </ul>
            </>
          )}

          {error && <p className="error skills__error">{error}</p>}
          {!isReady && <Spinner />}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  skills: state.skills
});

export default connect(mapStateToProps, { getSkills })(Skills);
