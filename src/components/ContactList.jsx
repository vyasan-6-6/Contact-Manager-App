import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = ({  contacts ,onDelete }) => {
 
  const renderContactsList = contacts.map(contact => (
    <ContactCard
      key={contact.id}
      contact={contact}
      onDelete={onDelete}
    />
  ));

  return (
    <div className="divide-y divide-gray-300 bg-white shadow rounded-lg ">
      <h1 className="flex justify-between items-center text-2xl mx-3">Contact List
         <Link to="/add">
        <button className="bg-blue-700 text-white rounded-lg " >Add Contact</button>
         
         </Link>
      </h1>
      {renderContactsList}
    </div>
  );
};

export default ContactList;
