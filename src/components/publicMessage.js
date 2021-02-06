export default function PublicMessage({ message, lastMessage }) {
  const firstMessage =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className="message-row">
      {firstMessage && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}

      {message?.attachments?.length > 0 ? (
        <img
          className="message-image"
          style={{ marginLeft: firstMessage ? "8px" : "40px" }}
          src={message.attachments[0].file}
          alt="message-attachment"
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "#CABCDC",
            marginLeft: firstMessage ? "8px" : "40px",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}
