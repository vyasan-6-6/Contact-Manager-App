import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const   ContactList = ({  contacts ,onDelete }) => {
 

 if (!Array.isArray(contacts) || contacts.length === 0) {
    return (
      <div className="divide-y divide-gray-300 bg-white shadow rounded-lg">
        <h1 className="flex justify-between items-center text-2xl mx-3 py-4">
          Contact List
          <Link to="/add">
            <button className="bg-blue-700 text-white rounded-lg px-4 py-2">
              Add Contact
            </button>
          </Link>
        </h1>
        <p className="text-center py-8 text-gray-500">No contacts yet</p>
      </div>
    );
  }

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
