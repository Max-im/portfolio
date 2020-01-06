import React, { Component } from "react";
import { connect } from "react-redux";
import { getContacts } from "../../../store/actions/contacts";

export class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props.contacts;
    return (
      <ul className="about__contacts">
        {contacts &&
          contacts.map(item => (
            <li className="about__contact" key={item.id}>
              <i className={item.classname + " about__icon"}></i>
              <p className="about__contactValue">{item.contact_value}</p>
            </li>
          ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts
});

export default connect(mapStateToProps, { getContacts })(Contacts);
