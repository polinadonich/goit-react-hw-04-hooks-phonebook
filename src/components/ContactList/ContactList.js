import ContactElement from "../ContactElement";
import s from "./ContactList.module.css";
import PropTypes from "prop-types";

function ContactList({ contacts, deleteContact }) {
  console.log(contacts);
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <ContactElement
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        </li>
      ))}
    </ul>
  );
}

ContactList.prototype = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  deleteContact: PropTypes.func.isRequired,
};

PropTypes.checkPropTypes(ContactList);

export default ContactList;
