import ContactCard from "./ContactCard";

const ContactList = ({ contacts, onDelete }) => {
  const renderContactsList = contacts.map(contact => (
    <ContactCard
      key={contact.id}
      contact={contact}
      onDelete={onDelete}
    />
  ));

  return (
    <div className="divide-y divide-gray-300 bg-white shadow rounded-lg">
      {renderContactsList}
    </div>
  );
};

export default ContactList;
