// src/components/MailboxList/MailboxList

const MailboxList = ({ mailboxes }) => {
    return (
      <div>
        <h2>Mailbox List</h2>
        {mailboxes.length === 0 ? (
          <p>No mailboxes yet!</p>
        ) : (
          <ul>
            {mailboxes.map((mailbox) => (
              <li key={mailbox._id}>
                <strong>Box {mailbox._id}:</strong> {mailbox.boxOwner} ({mailbox.boxSize})
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default MailboxList;