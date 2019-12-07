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
              <img
                className="about__contactIcon"
                src={"/photo/" + item.contact_picture}
                alt={item.contact_title}
              />
              <p className="about__contactValue">{item.contact_value}</p>
            </li>
          ))}
        {/* <li className="about__contact">
          <i className="fas fa-phone-square about__contactIcon" />
          <p className="about__contactValue">+38 (050) 772-31-69</p>
        </li>
        <li className="about__contact">
          <i className="fas fa-envelope about__contactIcon"></i>
          <p className="about__contactValue">pogidaevmo@gmail.com</p>
        </li>
        <li className="about__contact">
          <i className="fab fa-skype about__contactIcon"></i>
          <p className="about__contactValue">pogidaev_mo</p>
        </li> */}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts
});

export default connect(mapStateToProps, { getContacts })(Contacts);
