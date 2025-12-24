import Header from "./Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import AddContact from "./AddContact";
import api from "../api/contacts"
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";

function App() {
    
    const [contacts, setContacts] = useState([]);
  //search bar states
  const [ searchResult,setSearchresult] = useState([]);
  
  
  
  
  //   const addContactHandler = async(co) => {
    //     const existEmail = contacts.some(contact =>   contact.email.toLowerCase() === co.email.toLowerCase()
    //      );
    
    //     if(existEmail){
      //       alert("This email already exist!")
      //       return ;
      //     }
      //     const request = {
        //       ...co,
        //       id:`${Date.now()}-${Math.floor(Math.random() * 10000)}`
        //     };
        // try {
          
        //     const response = await api.post("/contacts",request)
        //     console.log(response);
        //     console.log(request);
        
        
        //     setContacts((pre) => [request,...pre]);
        // } catch (error) {
          // console.log("Error adding contacts",error);
          
          // }
          //   };
          
          //   const removeContactHandler = async(id) => {
            
            //     await api.delete(`/contacts/${id}`);
            //     setContacts((pre) => pre.filter((c) => c.id !== id));
            //   };
            
            
            // const updateContactHandler = async(co)=>{
              //   try {
                
              // const response = await api.put(`/contacts/${co.id}`,co);
              //  console.log(response.data);
              
              //  const contact = await retrivedContacts();
              
              //  setContacts(contact);
              //   } catch (error) {
                //     console.log(error.message);
                
                //   } 
                // };
                
                
//                 const [searchTerm, setSearchterm] = useState('');
// const searchHandler = (searchTerm) =>{
// setSearchterm(searchTerm);
// if(searchTerm !== ''){
//   const newContactList = contacts.filter((contact)=>{
//     return  Object.values(contact).join().toLowerCase().includes(searchTerm.toLowerCase());
//   });
//   setSearchresult(newContactList);
  

// }else{
//   setSearchresult(contacts)
// }
// }


  // useEffect(()=>{
  //   const getAllContacts = async()=>{
  //     const allContacts = await retrivedContacts();
  //     if(retrivedContacts) setContacts(allContacts.reverse());
  //   };
  //   getAllContacts();
  // },[]
  // )


  return (
    <div className="min-h-screen bg-gray-50">
      <Router>

      <Header />
      <Routes>
     <Route path="/add"
     element={ 
  
      <AddContact
        // contacts={contacts} addContactHandler={addContactHandler}
      />
     }/>
    
     <Route path="/"
     element={ 
      <ContactList 
        // term={searchTerm} searchKeyword={searchHandler} contacts={searchTerm.length < 1 ? contacts : searchResult  } onDelete={removeContactHandler} 
        />
   }
 />
    <Route  path="/contact/:id" element={ 
      <ContactDetail  
      //  contacts={contacts}
      />
   }/>

<Route path="/contact/edit/:id" element={
  <EditContact 
  // contacts={contacts} onUpdate={updateContactHandler}
  />
}/>
    
        
      </Routes>
      </Router>
    </div>
  );
}

export default App;
