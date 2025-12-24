 
 
import { ErrorMessage, Field, Formik,Form } from "formik";
import validationSchema from "../formValidation/AddValidation";
import { useNavigate } from "react-router-dom";
import { useContactCrud } from "../context/ContactsCrudContext";
 
function AddContact() {
  const navigate = useNavigate();
  const {contacts,addContactHandler} = useContactCrud();
 

    return (
      <div className="mt-20 max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Add Contact
        </h1>
        <Formik initialValues={{name:"",email:""}}
        validationSchema={validationSchema(contacts)} 
        onSubmit={(values,{resetForm})=>{
          addContactHandler(values);
          resetForm();
            navigate("/");

        }}>

        {({errors,touched})=>(
          <Form  

className="space-y-4" >
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Name</label>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              
  className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
                  errors.name && touched.name
                    ? 'border-red-500 focus:ring-red-400'
                    : 'border-gray-300 focus:ring-blue-400'
                }`}              />
                <ErrorMessage
                name="name"
                component="p"
                  className="text-red-500 text-sm mt-1"
                />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Email</label>
            <Field
              type="email"
              name="email"
              placeholder="Email"
   className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
                  errors.email && touched.email
                    ? 'border-red-500 focus:ring-red-400'
                    : 'border-gray-300 focus:ring-blue-400'
                }`}              />
                 <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition"
            >
            Add
          </button>
        </Form>
        )}
            </Formik>
      </div>
    );
  }
 

export default AddContact;
