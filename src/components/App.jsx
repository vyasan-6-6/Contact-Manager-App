import Header from "./Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import AddContact from "./AddContact";
import api from "../api/contacts"
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);
  //retrivedContacts
  const retrivedContacts = async()=>{
    const response = await api.get("/contacts");
    return response.data;
  };




  const addContactHandler = async(co) => {
    const request = {
      ...co,
      id:`${Date.now()}-${Math.floor(Math.random() * 10000)}`
    };

    const response = await api.post("/contacts",request)
    console.log(response);
    console.log(request);
    
    
    setContacts((pre) => [request,...pre]);
  };

  const removeContactHandler = async(id) => {
    // const newContactLists = contacts.filter((con)=>con.id !== id);
    // setContacts(newContactLists);
    await api.delete(`/contacts/${id}`);
    setContacts((pre) => pre.filter((c) => c.id !== id));
  };


  useEffect(()=>{
    const getAllContacts = async()=>{
      const allContacts = await retrivedContacts();
      if(retrivedContacts) setContacts(allContacts);
    };
    getAllContacts();
  },[]
  )

  // useEffect(() => {
    
  //   try {
  //     // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  //   } catch (error) {
  //     console.log("err from localStorage setup:", error);
  //   }
  // }, [contacts]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Router>

      <Header />
      <Routes>
     <Route path="/add"
     element={ 
  
      <AddContact   addContactHandler={addContactHandler}/>
     }/>
    
     <Route path="/"
     element={ 
      <ContactList    contacts={contacts} onDelete={removeContactHandler} />
   }
 />
    <Route  path="/contact/:id" element={ 
      <ContactDetail   contacts={contacts}/>
   }/>

    
        
      </Routes>
      </Router>
    </div>
  );
}

export default App;
