import { useEffect, useState } from "react";
import axios from "axios";

function ContactsList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/contacts")
      .then(res => {
        if (res.data.success) {
          setContacts(res.data.data);
        } else {
          setError("Failed to load contacts");
        }
      })
      .catch(() => setError("Error fetching contacts"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading contacts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Contact Submissions</h2>
      {contacts.length === 0 && <p>No contacts found.</p>}
      <ul>
        {contacts.map(({ id, name, email, message, submitted_at }) => (
          <li key={id} style={{ marginBottom: "1rem" }}>
            <strong>{name}</strong> ({email}) <br />
            <em>{new Date(submitted_at).toLocaleString()}</em> <br />
            <p>{message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactsList;