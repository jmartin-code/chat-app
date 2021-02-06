import { useState } from "react";

export default function Form() {
  const [value, setValue] = useState("");
  const handleSubmit = () => {};
  const handleChange = () => {};

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-in"
        placeholder="Enter message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </form>
  );
}
