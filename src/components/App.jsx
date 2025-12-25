import Header from "./Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Router>
                <Header />
                <Routes>
                    <Route path="/add" element={<AddContact />} />

                    <Route path="/" element={<ContactList />} />
                    <Route path="/contact/:id" element={<ContactDetail />} />

                    <Route path="/contact/edit/:id" element={<EditContact />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
