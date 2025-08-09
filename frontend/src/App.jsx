import ContactForm from "./ContactForm"; // your existing form
import ContactsList from "./ContactsList";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ContactForm />
      <hr />
      <ContactsList />
    </div>
  );
}

export default App;
