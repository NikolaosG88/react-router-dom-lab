// src/components/MailboxDetails/MailboxDetails


import { useParams } from 'react-router-dom';

const MailboxDetails = () => {
    
  const { mailboxId } = useParams();

  return <h2>Details for Mailbox {mailboxId}</h2>;
};
export default MailboxDetails;