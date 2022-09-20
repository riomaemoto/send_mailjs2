import { init, send } from "emailjs-com";
import { ChangeEvent, useState } from "react";

const App = () => {
  const userId = process.env.REACT_APP_USER_ID;
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contents, setContents] = useState("");

  const onSubmit = () => {
    if (!userId || !serviceId || !templateId) return;
    init(userId);
    const sendItem = {
      to_name: "leo",
      from_name: name,
      email: email,
      contents: contents,
    };
    send(serviceId, templateId, sendItem).then(() =>
      console.log("success to send email")
    );
  };

  const putName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const putEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const putContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact form</h2>
      <div>
        <div>Your name</div>
        <input type="text" value={name} onChange={putName} />
        <div>Email address</div>
        <input type="email" value={email} onChange={putEmail} />
        <div>Content</div>
        <textarea rows={5} value={contents} onChange={putContents} />
        <div style={{ marginTop: "20px" }}>
          <button onClick={onSubmit}>Submit Contact Message!</button>
        </div>
      </div>
    </div>
  );
};

export default App;
