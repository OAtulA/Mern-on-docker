import React from 'react'

function Chatpage() {

  const contacts = [
    {
      name: 'Alice',
      avatar: 'https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato', 
      message: 'Hoorayy!!'
    },
    {
      name: 'Martin',
      avatar: 'https://placehold.co/200x/ad922e/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato',
      message: 'That pizza place was amazing! We should go again sometime. 🍕'
    },
    {  
      name: 'Charlie',
      avatar: 'https://placehold.co/200x/2e83ad/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato',
      message: 'Hey, do you have any recommendations for a good movie to watch?'
    },
    // other contacts
  ]

  const messages = [
    {
      from: 'Alice',
      message: 'Hey Bob, how\'s it going?'
    },
    {
      from: 'Me',
      message: 'Hi Alice! I\'m good, just finished a great book. How about you?' 
    },
    {
      from: 'Alice', 
      message: 'That book sounds interesting! What\'s it about?'
    },
    // other messages
  ]

  return (
    <div className="flex h-screen">
      <ContactsList contacts={contacts} /> 

      <Messages 
        messages={messages}
        currentContact="Alice" 
      />
    </div>
  );
}

export default Chatpage


// ChatPage.jsx

import { ContactsList, Messages } from './components';

function ChatPage() {
  const [contacts] = useState(getContacts()); 
  const [messages] = useState(getMessages());

  return (
    <div className="flex h-screen">
      <ContactsList contacts={contacts} /> 

      <Messages 
        messages={messages}
        currentContact="Alice" 
      />
    </div>
  );
}

// export default ChatPage;

function ContactsList({ contacts }) {
  return (
    <div className="w-1/4">
      {contacts.map(contact => (
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

function Messages({ messages, currentContact }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // send text message
  }

  return (
    <div className="flex-1">
      <ChatHeader name={currentContact} />

      <div className="h-full overflow-y-auto p-4">
        {messages.map(message => (
          <Message 
            key={message.id}
            isMe={message.sender === 'Me'}
            text={message.text} 
          />
        ))}
      </div>

      <ComposeForm 
        text={text}
        onChange={setText}
        onSubmit={handleSubmit} 
      />
    </div>
  );
}
