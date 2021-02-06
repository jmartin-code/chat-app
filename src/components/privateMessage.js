export default function PrivateMessage({ message }) {
  if (message?.attachment?.length > 0) {
    return (
      <img
        className="image-message"
        style={{ float: "right" }}
        src={message.attachments[0].file}
        alt="img-message"
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
