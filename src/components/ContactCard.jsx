import { Link,   } from 'react-router-dom';
import user from '../images/useravatar.png'

const ContactCard = ({ contact, onDelete }) => {
   
  if (!contact) return null;
  const { id, name, email } = contact;

  return (
    <div
      className="flex justify-between items-center p-4 border-b border-gray-200"
      key={id}
    >
      <img
        src={user}
        alt="user"
        className="w-10 h-10 rounded-full object-cover"
      />
      
      <div className="flex flex-col ml-4 flex-1">
      <Link to={ `/contact/${id}`}>
        <div className="font-medium text-gray-800">{name}</div>
        <div className="text-gray-600 text-sm">{email}</div>
      </Link>
      </div>
 
  <div className="flex gap-5">
    <Link to={`/contact/edit/${id}`}>
    <button className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200">
      Edit
    </button>
    </Link>
     <button
        className="ml-auto text-red-500 hover:text-red-600"
        onClick={() => onDelete && onDelete(id)}
        
        >
         
      <i className="w-6 h-6 bg-red-500 hover:bg-red-600 rounded-sm inline-block"  ></i>
     

      </button>
        </div>
    </div>
  )
}

export default ContactCard;
