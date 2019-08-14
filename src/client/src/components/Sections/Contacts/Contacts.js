import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ContactItem from "./ContactItem";
import AddContact from "./AddContact";
import Spinner from "../../Common/Spinner";
import { getContacts } from "../../../store/actions/contacts";
import "./style.scss";

export class index extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  static propTypes = {
    contacts: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getContacts: PropTypes.func.isRequired
  };

  render() {
    const { contacts, error, loading } = this.props.contacts;
    const { isadmin } = this.props.auth.user;

    return (
      <section className="section contacts">
        <div className="container">
          <h3 className="section__title">Contacts</h3>

          <div className="contacts__wrapper">
            {contacts && (
              <>
                <ul className="contacts__list">
                  {contacts.map(contact => (
                    <ContactItem
                      key={contact.id}
                      contact={contact}
                      isadmin={isadmin}
                    />
                  ))}
                </ul>
                {error && <p className="error contacts__error">{error}</p>}
              </>
            )}

            {isadmin && <AddContact />}
            {loading && <Spinner />}
          </div>
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
  { getContacts }
)(index);