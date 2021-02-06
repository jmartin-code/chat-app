export default function PrivateMessage({ message }) {
  if (message?.attachments?.length > 0) {
    return (
      <img
        className="message-image"
        style={{ float: "right" }}
        src={message.attachments[0].file}
        alt="message-attachment"
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "10px",
        color: "black",
        backgroundColor: "#ffff",
      }}
    >
      {message.text}
    </div>
  );
}
