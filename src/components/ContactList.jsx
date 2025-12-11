  const ContactList = ({contacts}) => {
    console.log(contacts);
    // const renderContacts
    
   return (
     <div className='ui celled list'>{contacts.name}</div>
   )
 }
 
 export default ContactList;