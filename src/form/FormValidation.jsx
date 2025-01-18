import { useState } from "react";

function FormValidation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newData, setNewData] = useState([]);

  const handleSubmitData = (e) => {
    e.preventDefault();
    const newEntry = { name: name, email: email, password: password };
    setNewData(...newData, newEntry);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form onSubmit={handleSubmitData} className="formStyles">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default FormValidation;
