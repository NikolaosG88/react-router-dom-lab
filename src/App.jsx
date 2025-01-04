// src/App.jsx

import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import { useState } from 'react';



const App = () => {

  const [mailboxes, setMailBoxes] = useState([])

  const addBox = (newBox) => {
    setMailBoxes((prevMailboxes) => [...prevMailboxes, 
      { _id: prevMailboxes.length + 1, ...newBox },
    ]);
  };

  return (
    <>
      <NavBar />
      {/* <h1>Hello from App</h1> */}
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </>
)};

export default App;