// src/components/MailboxList/MailboxList

import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
    return (
      <div>
        <h2>Mailbox List</h2>
        {mailboxes.length === 0 ? (
          <p>No mailboxes yet!</p>
        ) : (
          <ul>
            {mailboxes.map((mailbox) => (
              <li key={mailbox._id} className="mail-box">
                <Link to={`/mailboxes/${mailbox._id}`} style={{ textDecoration: 'none', color: 'inherit' }}></Link>
                <strong>Box {mailbox._id}:</strong> {mailbox.boxOwner} ({mailbox.boxSize})
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default MailboxList;