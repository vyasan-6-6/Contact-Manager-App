import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useEffect, useState, useRef } from "react";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const isInitialMount = useRef(true);

  // Add contact
  const addContactHandler = (co) => {
    const contactWithId = {
      ...co,
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
    };
    setContacts((pre) => [contactWithId, ...pre]);
  };

  // Remove contact
  const removeContactHandler = (id) => {
    setContacts((pre) => pre.filter((c) => c.id !== id));
  };

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (!raw) return;

      const retrieved = JSON.parse(raw);
      if (Array.isArray(retrieved)) {
        setContacts(retrieved);
      } else if (retrieved && typeof retrieved === "object") {
        setContacts([retrieved]);
      } else {
        setContacts([]);
      }
    } catch (err) {
      console.error("Error parsing contacts:", err);
      setContacts([]);
    }
  }, []);

  // Save to localStorage on state change (guard first render)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    } catch (err) {
      console.error("Failed to save contacts:", err);
    }
  }, [contacts]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed header */}
      <Header />

      {/* Main content with top padding to avoid overlap */}
      <main className="max-w-3xl mx-auto mt-24 px-4">
        {/* Add Contact Section */}
        <div className="mb-8">
          <AddContact addContactHandler={addContactHandler} />
        </div>

        {/* Contact List Section */}
        <div>
          <ContactList contacts={contacts} onDelete={removeContactHandler} />
        </div>
      </main>
    </div>
  );
}

export default App;
