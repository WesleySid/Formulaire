import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verif, setVerif] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === verif) {
      setShowError(false);
      alert("Merci de votre inscription");
    } else {
      setShowError(true);
      alert("Mots de passe différents");
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleVerifChange = (event) => {
    setVerif(event.target.value);
  };

  return (
    <>
      <main>
        <h1>Create account</h1>
        <form onSubmit={handleSubmit}>
          <h2>Nom et prénom</h2>
          <input
            value={name}
            type="text"
            placeholder="John Doe"
            name="name"
            onChange={handleNameChange}
          />
          <h2>Email</h2>
          <input
            value={email}
            type="email"
            placeholder="email@com"
            name="email"
            onChange={handleEmailChange}
          />
          <h2>Mot de passe</h2>
          <input
            value={password}
            type="password"
            placeholder="azerty"
            name="password"
            onChange={handlePasswordChange}
          />
          <h2>Confirmez votre mot de passe</h2>
          <input
            value={verif}
            type="password"
            placeholder="azerty"
            name="verif"
            onChange={handleVerifChange}
          />
          <input type="submit" value="Inscription" />
        </form>
      </main>
    </>
  );
};

export default Form;
