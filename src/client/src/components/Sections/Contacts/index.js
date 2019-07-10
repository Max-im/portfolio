import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ContactItem from "../../Items/ContactItem";
import Spinner from "../../Common/Spinner";
import { getContacts, deleteContact } from "../../../store/actions/contacts";
import "./style.scss";

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
    const { contacts, error, loading } = this.props.contacts;
    const { isadmin } = this.props.auth.user;

    return (
      <section className="section">
        <div className="container">
          <h3 className="section__title">Contacts</h3>

          {contacts && (
            <ul>
              {contacts.map(contact => (
                <ContactItem
                  key={contact.id}
                  contact={contact}
                  onDelete={this.onDelete.bind(this)}
                  isadmin={isadmin}
                />
              ))}
            </ul>
          )}

          {error && <p className="error contacts__error">{error}</p>}
          {loading && <Spinner />}
        </div>
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
