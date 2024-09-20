import React from 'react';
import './Account.css'; // Import your CSS file

const Account = () => {
  const data = [
    { id: 1, name: 'Account Holder Name', value: 'ISTE STUDENT CHAPTER, KPT, MANGALURU' },
    { id: 2, name: 'Account Number', value: '37220050741' },
    { id: 3, name: 'Type Of Account', value: 'CURRENT A/C   ' },
    { id: 4, name: 'IFSC Code No', value: 'SBIN0008033' },
    { id: 5, name: 'Bank Name', value: 'STATE BANK OF INDIA' },
    { id: 6, name: 'Branch', value: 'YEYYADI BRANCH, MANGALURU' },
  ];

  return (
    <div className="table-container">
      <span className='stroke-text'>Account Details</span>
      <table>
        <thead>
          <tr>
            <th>SL. NO.</th>
            <th>EVENTS</th>
            <th>DATES</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Account;
