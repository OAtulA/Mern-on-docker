import React, { useState } from "react";

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function ChatHeader({ currentContact }) {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b">
      <h3 className="text-lg font-medium">{currentContact}</h3>
    </div>
  );
}

function ContactsList({ contacts }) {
  return (
    <div className="w-1/4">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.name}
          name={contact.name}
          avatar={contact.avatar}
          message={contact.message}
        />
      ))}
    </div>
  );
}

function Chatpage() {
  const contactsList = [
    {
      name: "Alice",
      avatar:
        "https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato",
      message: "Hoorayy!!",
    },
    {
      name: "Martin",
      avatar:
        "https://placehold.co/200x/ad922e/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato",
      message: "That pizza place was amazing! We should go again sometime. 🍕",
    },
    {
      name: "Charlie",
      avatar:
        "https://placehold.co/200x/2e83ad/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato",
      message:
        "Hey, do you have any recommendations for a good movie to watch?",
    },
    // other contacts
  ];

  // const messages = [
  //   {
  //     from: "Alice",
  //     message: "Hey Bob, how's it going?",
  //   },
  //   {
  //     from: "Me",
  //     message: "Hi Alice! I'm good, just finished a great book. How about you?",
  //   },
  //   {
  //     from: "Alice",
  //     message: "That book sounds interesting! What's it about?",
  //   },
  //   // other messages
  // ];

  const messagesList = [
    {
      from: "Alice",
      message: "Hey handsome! Looking good today 😍",
    },
    {
      from: "Me",
      message: "Oh hey Alice! Thanks, just got a haircut actually.",
    },
    {
      from: "Alice",
      message:
        "I can tell - that style really suits you. We should grab drinks later so I can see it in person 😉",
    },
    {
      from: "Me",
      message:
        "Yeah, it would be cool to catch up! Maybe we could try that new pub on Main St?",
    },
    {
      from: "Alice",
      message:
        "I was thinking we could just hang at my place...I'll mix us some cocktails 🍸",
    },
    {
      from: "Me",
      message: "Oh sure, that works too! I do like your homemade drinks.",
    },
    {
      from: "Alice",
      message:
        "Great! And who knows, maybe I'll give you a little head massage after...you look tense 😏",
    },
    {
      from: "Me",
      message: "That would be awesome, my neck has been killing me lately.",
    },
    {
      from: "Alice",
      message:
        "I'll be sure to work out ALL your knots...I give great full body massages 💆‍♂️",
    },
    {
      from: "Me",
      message:
        "Wow, you must be really good at massages! That would hit the spot.",
    },
    {
      from: "Alice",
      message:
        "Oh I have all kinds of special talents 😉 Can't wait to show you later!",
    },
    {
      from: "Me",
      message: "Nice! I'd love to see some of your massage techniques.",
    },
    {
      from: "Alice",
      message:
        "It's a date then. Fair warning though - my massages tend to make clothes...optional 😈",
    },
    {
      from: "Me",
      message:
        "Oh really? I guess that makes sense to really work out the knots.",
    },
    {
      from: "Alice",
      message:
        "Exactly! Don't worry, I'll take good care of you 😘 We're going to have so much fun later!",
    },
    {
      from: "Me",
      message:
        "Awesome, looking forward to it! A massage sounds super relaxing.",
    },
    {
      from: "Alice",
      message:
        "Oh trust me, this will be a night you won't forget. Get ready for some serious relaxation 💆‍♂️🛌",
    },
    {
      from: "Me",
      message:
        "You're the best, Alice! This is just what I need after a long week.",
    },
  ];

  let [messages, setMessages] = useState(messagesList);
  let [contacts, setContacts] = useState(contactsList);

  return (
    <div className="flex h-screen">
      <p className="hidden"> This is contacts section</p>
      {/* contacts list */}
      <ContactsList contacts={contacts} />
      {/* messages list */}
      <Messages messages={messages} currentContact="Alice" />
    </div>
  );
}

export default Chatpage;

// ChatPage.jsx

// function ChatPage() {
//   const [contacts] = useState(getContacts());
//   const [messages] = useState(getMessages());

//   return (
//     <div className="flex h-screen">
//       <ContactsList contacts={contacts} />

//       <Messages messages={messages} currentContact="Alice" />
//     </div>
//   );
// }

// export default ChatPage;

// ContactItem.jsx

function ContactItem({ name, avatar, message }) {
  return (
    <div className="flex items-center mb-4 p-2 rounded hover:bg-gray-100 cursor-pointer">
      <img src={avatar} className="w-12 h-12 rounded-full" />

      <div className="flex-1 ml-3">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
}

// Messages.jsx

function Message({ key_var, isMe, text }) {
  let isMebg = isMe ? "bg-blue-100" : "bg-gray-100";
  let crypted_key = randomInt(key_var);

  return (
    <div
      key={crypted_key}
      className={`items-center w-[40%] justify-between mb-4 p-2 rounded-lg  ${isMebg}`}
      style={isMe? { marginLeft: "auto" } : { marginRight: "auto" }}
    >
      <p className="text-sm text-right">{text}</p>
    </div>
  );
}

function ComposeForm({ text, onChange, onSubmit }) {
  return (
    <form className="flex" onSubmit={onSubmit}>
      <input
        className="flex-1 px-4 py-2 bg-gray-100 rounded-lg"
        type="text"
        value={text}
        onChange={onChange}
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 rounded-lg">
        Send
      </button>
      <button className="px-4 py-2 bg-red-500 rounded-lg">Cancel</button>
      <button className="px-4 py-2 bg-green-500 rounded-lg">Save</button>
    </form>
  );
}

function Messages({ messages, currentContact }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // send text message
  }
  console.log(messages);

  return (
    <div className="flex-1">
      {/* Chat header */}
      <ChatHeader name={currentContact} />
      {/* Message */}
      <div className="h-full overflow-y-auto w-auto p-4">

        {messages.map((message, i) => (
          <Message
            key_var={message.id || i}
            isMe={message.from === "Me"}
            text={message.message}
          />
        ))}
      </div>
      {/* Compose form */}
      <ComposeForm text={text} onChange={setText} onSubmit={handleSubmit} />
    </div>
  );
}
