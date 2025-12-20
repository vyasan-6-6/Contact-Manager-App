import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, onDelete, searchKeyword, term }) => {
  const handleClear = () => {
    searchKeyword(''); // Clear search
  };

  const renderContactsList = contacts.map((contact) => (
    <ContactCard
      key={contact.id}
      contact={contact}
      onDelete={onDelete}
    />
  ));

  return (
    <div className="divide-y divide-gray-300 bg-white shadow rounded-lg">
      {/* Search Bar */}
      <div className="mx-3 py-4">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={term}
            onChange={(e) => searchKeyword(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {term && (
            <button 
              onClick={handleClear} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>

        {/* Result Count */}
        {term && (
          <p className="text-sm text-gray-600">
            Found {contacts.length} result{contacts.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {/* Header */}
      <h1 className="flex justify-between items-center text-2xl mx-3 py-4">
        Contact List
        <Link to="/add">
          <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-lg px-4 py-2 font-medium transition-colors">
            Add Contact
          </button>
        </Link>
      </h1>

      {/* Contacts */}
      {renderContactsList.length > 0 ? (
        renderContactsList
      ) : (
        <p className="text-center py-8 text-gray-500">
          {term ? 'No contacts found' : 'No contacts yet'}
        </p>
      )}
    </div>
  );
};

export default ContactList;