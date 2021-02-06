import { useState } from "react";

//icons
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

//import from chat engine api
import { isTyping, sendMessage } from "react-chat-engine";

export default function Form(props) {
  const [value, setValue] = useState("");
  const { creds, chatId } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);

    isTyping(props, chatId);
  };

  const handleUpload = (e) => {
    console.log(e.target);
    sendMessage(creds, chatId, { files: e.target.files, text: "" });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Enter message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload}
      />
      <button className="send-button" type="submit">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
}
