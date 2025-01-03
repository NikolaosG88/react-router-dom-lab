// src/components/MailboxForm/MailboxForm
import { useState } from 'react';



const MailboxForm = ({ addBox }) => {

  const [boxOwner, setBoxOwner] = useState('');
  const [boxSize, setBoxSize] = useState('small');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ boxOwner, boxSize }); // Pass form data to `addBox`
    setBoxOwner(''); // Clear the form
    setBoxSize('small');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="boxOwner">Box Owner:</label>
      <input
        type="text"
        id="boxOwner"
        value={boxOwner}
        onChange={(e) => setBoxOwner(e.target.value)}
        placeholder="Enter owner's name"
        required
      />

      <label htmlFor="boxSize">Box Size:</label>
      <select
        id="boxSize"
        value={boxSize}
        onChange={(e) => setBoxSize(e.target.value)}
      >
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <button type="submit">Create Mailbox</button>
    </form>
  );
};

export default MailboxForm;