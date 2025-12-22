import * as Yup from "yup";
 

const validationSchemaEdit =(contacts,id) => Yup.object({
    name:Yup.string().required("Name is required.").min(2,'Name must be at least 2 characters'),
    email:Yup.string().required("Email is required").email("Email invalid format.").test("unique-email","This email is already exist.",(value)=>{
        if(!value) return true;
        if(!Array.isArray(contacts)) return true;
        return !contacts.some(c =>c.email.toLowerCase() === value.toLowerCase() && String(c.id) !== String(id))
    })
});

export default validationSchemaEdit;