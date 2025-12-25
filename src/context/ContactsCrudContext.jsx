import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/contacts";

const ContactsCrudContext = createContext();

export function ContactsCrudProvider({ children }) {
    const [contacts, setContacts] = useState([]);
    //retrivedContacts
    const retrivedContacts = async () => {
        const response = await api.get("/contacts");
        if (response.data) {
            const reversed = [...response.data].reverse();

            setContacts(reversed);
            return reversed;
        }
        return [];
    };

    const addContactHandler = async (co) => {
        const existEmail = contacts.some((contact) => contact.email.toLowerCase() === co.email.toLowerCase());

        if (existEmail) {
            alert("This email already exist!");
            return;
        }
        const request = {
            ...co,
            id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
        };
        try {
            const response = await api.post("/contacts", request);
            console.log(response);
            console.log(request);

            setContacts((pre) => [request, ...pre]);
        } catch (error) {
            console.log("Error adding contacts", error);
        }
    };

    const removeContactHandler = async (id) => {
        await api.delete(`/contacts/${id}`);
        setContacts((pre) => pre.filter((c) => c.id !== id));
    };

    const updateContactHandler = async (co) => {
        try {
            const response = await api.put(`/contacts/${co.id}`, co);
            console.log(response.data);

            const contact = await retrivedContacts();

            setContacts(contact);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        const getAllContacts = async () => {
            const allContacts = await retrivedContacts();
            if (retrivedContacts) setContacts(allContacts);
        };
        getAllContacts();
    }, []);
    const value = { contacts, retrivedContacts, updateContactHandler, removeContactHandler, addContactHandler };
    return <ContactsCrudContext.Provider value={value}>{children}</ContactsCrudContext.Provider>;
}

export function useContactCrud() {
    const context = useContext(ContactsCrudContext);
    if (!context) {
        throw new Error("useContact must be used within ContactProvider");
    }
    return context;
}
