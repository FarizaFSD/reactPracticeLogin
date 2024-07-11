import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [ad, setAd] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [girisEmail, setGirisEmail] = useState("");
  const [girisPassword, setGirisPassword] = useState("");

  const navigate = useNavigate();

  const adChange = (e) => {
    setAd(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const girisEmailChange = (e) => {
    setGirisEmail(e.target.value);
  };

  const girisPasswordChange = (e) => {
    setGirisPassword(e.target.value);
  };

  const kayitOl = async () => {
    let obj = {
      name: ad,
      email: email,
      password: password,
    };

    let response = await fetch(
      "https://proje-bir.altayagency.com/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );
    if (response.status == 200) {
      setAd("");
      setEmail("");
      setPassword("");
      alert("Kayıt işlemi başarılı!");
    }
  };

  const girisYap = async () => {
    let obj = {
      email: girisEmail,
      password: girisPassword,
    };
    let response = await fetch("https://proje-bir.altayagency.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    let result = await response.json();

    if (response.status == 200) {
      localStorage.setItem("token", result.access_token);

      setGirisEmail("");
      setGirisPassword("");
      navigate("/hesabim");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Kayıt ol</h2>
        <label style={styles.label}>İsim</label>
        <input
          placeholder="İsminizi giriniz"
          type="text"
          value={ad}
          onChange={adChange}
          style={styles.input}
        />
        <label style={styles.label}>Email</label>
        <input
          placeholder="Email"
          type="text"
          value={email}
          onChange={emailChange}
          style={styles.input}
        />
        <label style={styles.label}>Şifre</label>
        <input
          placeholder="Şifrenizi giriniz"
          type="password"
          value={password}
          onChange={passwordChange}
          style={styles.input}
        />
        <button onClick={kayitOl} style={styles.button}>
          Kayıt ol
        </button>
      </div>

      <hr style={styles.hr} />

      <div style={styles.formContainer}>
        <h2 style={styles.title}>Giriş Yap</h2>
        <label style={styles.label}>Email</label>
        <input
          placeholder="Email"
          type="email"
          value={girisEmail}
          onChange={girisEmailChange}
          style={styles.input}
        />
        <label style={styles.label}>Şifre</label>
        <input
          placeholder="Şifrenizi giriniz"
          type="password"
          value={girisPassword}
          onChange={girisPasswordChange}
          style={styles.input}
        />
        <button onClick={girisYap} style={styles.buttonSecondary}>
          Giriş Yap
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    margin: 30
  },
  formContainer: {
    width: "300px",
    padding: "45px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  },
  label: {
    marginTop: "10px",
    marginBottom: "5px",
    color: "#666",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  buttonSecondary: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  hr: {
    width: "100%",
    margin: "20px 0",
    border: "0",
    borderTop: "1px solid #ccc",
  },
};
export default Login;
