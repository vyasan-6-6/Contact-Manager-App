import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { useRef } from "react";

const   ContactList = ({  contacts ,onDelete ,term,searchKeyword }) => {
 

//  if (!Array.isArray(contacts) || contacts.length === 0) {
//     return (
//       <div className="divide-y divide-gray-300 bg-white shadow rounded-lg">
//         <h1 className="flex justify-between items-center text-2xl mx-3 py-4">
//           Contact List
//           <Link to="/add">
//             <button className="bg-blue-700 text-white rounded-lg px-4 py-2">
//               Add Contact
//             </button>
//           </Link>
//         </h1>
//         <p className="text-center py-8 text-gray-500">No contacts yet</p>
//       </div>
//     );
//   }

  const renderContactsList = contacts.map(contact => (
    <ContactCard
      key={contact.id}
      contact={contact}
      onDelete={onDelete}
    />
  ));

  const inputEle = useRef("")
  const getSearchTerm = ()=>{
searchKeyword(inputEle.current.value);

  }

  return (
    <div className="divide-y divide-gray-300 bg-white shadow rounded-lg ">
      <h1 className="flex justify-between items-center text-2xl mx-3">Contact List
         <Link to="/add">
        <button className="bg-blue-700 text-white rounded-lg " >Add Contact</button>
         
         </Link>
      </h1>
      <div>
        <div>
       <div className="relative">
  <input
    type="text"
    placeholder="Search..."
    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    value={term} onChange={getSearchTerm} ref={inputEle}
  />
  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
</div>
        </div>
      </div>
      <div>
      {renderContactsList.length > 0 ? renderContactsList:"NO Contacts Available"}

      </div>
    </div>
  );
};

export default ContactList;
