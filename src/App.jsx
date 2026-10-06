import { Routes, Route } from "react-router-dom";
import Navigation from "./navigation";

export default function App() {
  return (
    <div className="flex">
      <Navigation />
      <main className="h-screen flex-1 overflow-y-auto p-6">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/signup" element={<h1>Sign up</h1>} />
          <Route path="/chat/:id" element={<h1>Chat</h1>} />
        </Routes>
      </main>
    </div>
  );
}