import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
{
    id:"1",
    name:"vyasan",
    email:"vyas@gmail.com"
},
{
    id:"2",
    name:"asan",
    email:"as@gmail.com"
},
{
    id:"3",
    name:"nas",
    email:"nas@gmail.com"
},
{
    id:"4",
    name:"gymis",
    email:"gymis@gmail.com"
},
{
    id:"5",
    name:"juti",
    email:"juti@gmail.com"
},
    ];
 return (
  <div className="ui container"> 
  <Header/>
  <AddContact/>
  <ContactList contacts={contacts}/>
  </div>
 )
}

export default App
