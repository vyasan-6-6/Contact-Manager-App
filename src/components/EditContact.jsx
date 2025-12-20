import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function  EditConatact({ onUpdate , contacts }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const {id} = useParams();
  const navigate = useNavigate();
  
useEffect(()=>{
  const contact = contacts.find(c => c.id ===id);

  if(contact){
    setName(contact.name);
    setEmail(contact.email);
  };
},[id,contacts])


  const update = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      alert("All the fields are mandatory!");
      return;
    }
   const originalContact = contacts.find(c => String(c.id) === String(id));
  
  // Only check if email changed
  if (email.toLowerCase() !== originalContact.email.toLowerCase()) {
    const emailExists = contacts.some(c => 
      c.email.toLowerCase() === email.toLowerCase()
    );
    
       if(emailExists){
         alert("This email already exist!")
         return ;
       }
  }
    

 

    onUpdate({ id,name: name.trim(), email: email.trim() });
    setName("");
    setEmail("");
    navigate("/");
  };

    return (
      <div className="mt-20 max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Edit Contact
        </h1>

        <form className="space-y-4" onSubmit={update}>
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName( e.target.value )}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(  e.target.value )}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition"
          >
            Update
          </button>
        </form>
      </div>
    );
  }
 

export default  EditConatact;
