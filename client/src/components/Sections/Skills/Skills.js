import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import mixitup from 'mixitup';
import SkillItem from './SkillItem';
import Category from './Category';
import Spinner from '../../Common/Spinner';
import { getSkills } from '../../../store/actions/resume';
import '../../../sass/skills.scss';

export class Skills extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  state = { catIds: [] };

  componentDidMount = () => {
    if (!this.props.skills.isReady) {
      this.props.getSkills();
    } else {
      this.initMixitup();
    }
  };

  componentDidUpdate = (prev) => {
    if (!prev.skills.categories && this.props.skills.categories) {
      this.initMixitup();
    }
  };

  initMixitup = () => {
    if (!this.props.skills.error) {
      const catIds = this.props.skills.categories.map((i) => i.id);
      this.setState({ catIds });
    }
  };

  static propTypes = {
    skills: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getSkills: PropTypes.func.isRequired,
  };

  render() {
    const { skills, categories, error, isReady } = this.props.skills;
    const { auth } = this.props;
    if (this.myRef.current) {
      mixitup(this.myRef.current);
    }

    return (
      <section className="skills">
        <div className="container">
          <h3 className="section__title">
            Skills
            {auth.user && auth.user.isadmin && (
              <Link to="/admin/edit-skills" className="section__editBtn fas fa-edit" />
            )}
          </h3>

          {skills && categories && (
            <>
              <ul className="categories">
                {categories.map((cat) => (
                  <Category category={cat} key={cat.id} />
                ))}
              </ul>

              <ul className="skills__list" ref={this.myRef}>
                {skills.map((skill) => (
                  <SkillItem key={skill.id} skill={skill} />
                ))}
              </ul>
            </>
          )}

          {!(isReady || error) && <Spinner />}
          {error && <p className="error skills__error">{error}</p>}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  skills: state.skills,
  auth: state.auth,
});

export default connect(mapStateToProps, { getSkills })(Skills);
