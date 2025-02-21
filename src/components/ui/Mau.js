import React, { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === password) {
      alert("ÄÄƒng nháº­p thĂ nh cĂ´ng!");
      setIsLoggedIn(true);
    } else {
      alert("Sai username hoáº·c password!");
    }
  };

  if (isLoggedIn) {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>ChĂ o má»«ng báº¡n Ä‘áº¿n vá»›i á»©ng dá»¥ng!</h1>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 calc(50% - 20px)", textAlign: "center" }}>
            <h2>Favorite Color</h2>
            <FavoriteColor />
          </div>
          <div style={{ flex: "1 1 calc(50% - 20px)", textAlign: "center" }}>
            <h2>Demo Counter</h2>
            <Demo />
          </div>
          <div style={{ flex: "1 1 calc(50% - 20px)", textAlign: "center" }}>
            <h2>User Form</h2>
            <UserForm />
          </div>
          <div style={{ flex: "1 1 calc(50% - 20px)", textAlign: "center" }}>
            <h2>Clock</h2>
            <Clock />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "50px", fontFamily: "Arial" }}>
      <h1>Login</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "10px",
            margin: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "10px",
            margin: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </div>
      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
}

function FavoriteColor() {
  const [favoriteColor, setFavoriteColor] = useState("red"); // MĂ u yĂªu thĂ­ch máº·c Ä‘á»‹nh

  const colors = ["Blue", "Red", "Pink", "Green"]; // Danh sĂ¡ch cĂ¡c mĂ u

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>
        My favorite color is{" "}
        <span style={{ color: favoriteColor.toLowerCase() }}>
          {favoriteColor.toLowerCase()}
        </span>
        !
      </h1>
      <div>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setFavoriteColor(color)}
            style={{
              backgroundColor: color.toLowerCase(),
              color: "white",
              border: "none",
              padding: "10px 20px",
              margin: "5px",
              cursor: "pointer",
              borderRadius: "5px",
              outline: favoriteColor === color ? "3px solid black" : "none",
            }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

function Demo() {
  const strings = {
    header: {
      title: "Xin chĂ o React!",
    },
    counter: {
      clickCount: "Sá»‘ láº§n click:",
      increase: "TÄƒng",
      decrease: "Giáº£m",
    },
  };

  function Header() {
    return (
      <header>
        <h1>{strings.header.title}</h1>
      </header>
    );
  }

  function Counter() {
    const [count, setCount] = useState(0);

    function handleIncrease() {
      setCount(count + 1);
    }

    function handleDecrease() {
      setCount(count - 1);
    }

    return (
      <div>
        <p>
          {strings.counter.clickCount} {count}
        </p>
        <button onClick={handleIncrease}>{strings.counter.increase}</button>
        <button onClick={handleDecrease}>{strings.counter.decrease}</button>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Counter />
    </div>
  );
}

function UserForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isStudent, setIsStudent] = useState(false);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>User Information Form</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            marginRight: "10px",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={{
            marginRight: "10px",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <label>
          <input
            type="checkbox"
            checked={isStudent}
            onChange={(e) => setIsStudent(e.target.checked)}
            style={{ marginRight: "5px" }}
          />
          Are you a student?
        </label>
      </div>

      <div
        style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}
      >
        <p>
          <strong>Name:</strong> {name || "N/A"}
        </p>
        <p>
          <strong>Age:</strong> {age || 0}
        </p>
        <p>
          <strong>Student:</strong> {isStudent ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
}

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Dá»n dáº¹p interval khi component unmount
  }, []);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        display: "inline-block",
      }}
    >
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;