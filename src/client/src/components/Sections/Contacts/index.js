import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";
import ContactItem from "../../Items/ContactItem";
import { getContacts, deleteContact } from "../../../store/actions/contacts";
import Spinner from "../../Common/Spinner";

export class index extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  onDelete(id) {
    if (window.confirm("Are you sure?")) this.props.deleteContact(id);
  }

  static propTypes = {
    contacts: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getContacts: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired
  };

  render() {
    const { loading, contacts } = this.props.contacts;
    const { user } = this.props.auth;
    return (
      <section className="section">
        <h3 className="section__title">Contacts</h3>

        {contacts && (
          <ul>
            {contacts.map(contact => (
              <ContactItem
                key={contact.id}
                contact={contact}
                onDelete={this.onDelete.bind(this)}
                isadmin={user.isadmin}
              />
            ))}
          </ul>
        )}

        {loading && <Spinner />}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getContacts, deleteContact }
)(index);
