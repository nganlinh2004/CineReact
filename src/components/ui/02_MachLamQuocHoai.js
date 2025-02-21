import { useState, useEffect } from "react";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State để kiểm soát đăng nhập

  const handleLogin = () => {
    if (username === password) {
      alert("Pass");
      setIsLoggedIn(true); // Đánh dấu đã đăng nhập
    } else {
      alert("Username và Password không khớp!");
    }
  };

  if (isLoggedIn) {
    return (
      <div>
        <Colors />
        <div style={{ margin: "20px" }}></div>
        <Clock />
        <div style={{ margin: "20px" }}></div>
        <Counter />
        <div style={{ margin: "20px" }}></div>
        <StudentInfo />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border rounded"
      />
      <button onClick={handleLogin} className="p-2 bg-blue-500 text-white rounded">
        Login
      </button>
    </div>
  );
}

// Component Colors
function Colors() {
  const [color, setColor] = useState("red");
  return (
    <div>
      <button onClick={() => setColor("red")} style={{ backgroundColor: "red", color: "white", margin: "5px" }}>Red</button>
      <button onClick={() => setColor("blue")} style={{ backgroundColor: "blue", color: "white", margin: "5px" }}>Blue</button>
      <button onClick={() => setColor("green")} style={{ backgroundColor: "green", color: "white", margin: "5px" }}>Green</button>
      <button onClick={() => setColor("yellow")} style={{ backgroundColor: "yellow", color: "black", margin: "5px" }}>Yellow</button>
      <p>My favorite color is <i style={{color: color, fontWeight:"bold"}}>{color}</i></p>
    </div>
  );
}

// Component Clock
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return <h2>{time.toLocaleTimeString()}</h2>;
}

// Component Counter
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button style={{backgroundColor:"green", color:"white", padding:"5px"}} onClick={() => setCount(count + 1)}>Click me</button>
      <button style={{backgroundColor:"red", color:"white", padding:"5px", marginLeft:"10px"}} onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Component StudentInfo
function StudentInfo() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isStudent, setIsStudent] = useState(false);

  return (
    <div>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
      <label>
        <input type="checkbox" onChange={(e) => setIsStudent(e.target.checked)} /> Are you a student?
      </label>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

export default function App() {
  return (
    Login()
  );
}