import { useNavigate, useParams } from 'react-router-dom';
import user from '../images/useravatar.png'


const ContactDetail = ({contacts}) => {
  const {id} = useParams();
  const navigate = useNavigate();

 const contact = contacts.find((c)=> c.id===id);

 if(!contact){
    return <div>Contact Not Found</div>
 }

 const {email ,name} = contact;

   
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          
          <div className="bg-linear-to-r from-blue-500 to-indigo-600 py-12 px-6 text-center">
            <img 
              src={user} 
              alt={name}
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
            />
          </div>

          <div className="p-8 text-center space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Email</p>
              <p className="text-lg font-semibold text-gray-800">{email}</p>
            </div>

            <button
              onClick={() => navigate("/")}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors"
            >
              Back to Contacts
            </button>
          </div>
        </div>
      </div>
    </div>
  )

} 

export default ContactDetail;