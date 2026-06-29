import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function App() {
  const [leads, setLeads] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("New");

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/leads");
      setLeads(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addLead = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/leads", {
        name,
        email,
        status,
      });
      setName("");
      setEmail("");
      setStatus("New");
      fetchLeads();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteLead = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/leads/${id}`);
      fetchLeads();
    } catch (err) {
      console.error(err);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/leads/${id}`, {
        status: newStatus,
      });
      fetchLeads();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.page}>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.container}
      >
        <h1 style={styles.title}>Mini CRM</h1>

        {/* Add Lead Card */}
        <motion.div whileHover={{ scale: 1.02 }} style={styles.card}>
          <h2 style={styles.cardTitle}>Add New Lead</h2>

          <form onSubmit={addLead}>
            <input
              style={styles.input}
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              style={styles.input}
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <select
              style={styles.input}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>New</option>
              <option>Contacted</option>
              <option>Closed</option>
            </select>

            <button style={styles.button} type="submit">
              Add Lead
            </button>
          </form>
        </motion.div>

        {/* Leads List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={styles.card}
        >
          <h2 style={styles.cardTitle}>Leads</h2>

          {leads.length === 0 ? (
            <p style={{ color: "#aaa" }}>No leads yet...</p>
          ) : (
            leads.map((lead) => (
              <motion.div
                key={lead._id}
                whileHover={{ scale: 1.02 }}
                style={styles.leadItem}
              >
                <div>
                  <strong style={styles.leadName}>
                    {lead.name}
                  </strong>
                  <p style={styles.leadEmail}>
                    {lead.email}
                  </p>
                </div>

                <div style={styles.actions}>
                  <select
                    value={lead.status}
                    onChange={(e) =>
                      updateStatus(lead._id, e.target.value)
                    }
                    style={styles.statusSelect}
                  >
                    <option>New</option>
                    <option>Contacted</option>
                    <option>Closed</option>
                  </select>

                  <button
                    onClick={() => deleteLead(lead._id)}
                    style={styles.deleteButton}
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
    display: "flex",
    justifyContent: "center",
    padding: "60px 20px",
    fontFamily: "Segoe UI, sans-serif",
  },
  container: {
    width: "100%",
    maxWidth: "800px",
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "40px",
    letterSpacing: "1px",
  },
  card: {
    background: "#1c1c1c",
    padding: "30px",
    borderRadius: "16px",
    marginBottom: "30px",
    boxShadow: "0 0 40px rgba(0,255,200,0.08)",
    border: "1px solid rgba(255,255,255,0.05)",
  },
  cardTitle: {
    color: "white",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #333",
    background: "#111",
    color: "white",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(90deg, #00f5ff, #00ffae)",
    fontWeight: "bold",
    cursor: "pointer",
  },
  leadItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#111",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "12px",
    border: "1px solid #222",
  },
  leadName: {
    color: "#00f5ff",
    fontSize: "16px",
  },
  leadEmail: {
    margin: 0,
    fontSize: "13px",
    color: "#aaa",
  },
  actions: {
    display: "flex",
    gap: "10px",
  },
  statusSelect: {
    background: "#1f1f1f",
    color: "white",
    border: "1px solid #333",
    padding: "6px 10px",
    borderRadius: "6px",
  },
  deleteButton: {
    background: "#ff3b3b",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default App;