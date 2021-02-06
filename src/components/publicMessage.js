export default function PublicMessage({ message, lastMessage }) {
  const firstMessage =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className="public-message">
      {firstMessage && (
        <div
          className="message-container"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}

      {message?.attachment?.length > 0 ? (
        <img
          className="image-message"
          style={{ marginLeft: firstMessage ? "8px" : "40px" }}
          src={message.attachments[0].file}
          alt="img-message"
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
