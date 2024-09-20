import React from 'react';
import './Date.css'; // Import your CSS file
import '../Plans/Plans.css'

const Date = () => {
  const act_data = [
    { id: 1, name: 'LastDate for Submission of Paper', value: '16th September 2024' },
    { id: 2, name: 'Intimation of selected papers', value: '20th September 2024' },
    {
      id: 3, name: 'Last Date for Registration', value: '23rd September 2024'
    },
    { id: 4, name: 'Event Date', value: '27thSeptember 2024' },
    { id: 5, name: 'Schedule', value: 'Schedule will be communicated through e-mail' },
  ];

  return (
    <div className="table-container">
      <span className='stroke-text'>Important Dates</span>
      <table>
        <thead>
          <tr>
            <th>SL. NO.</th>
            <th>EVENTS</th>
            <th>DATES</th>
          </tr>
        </thead>
        <tbody>
          {act_data.map((item) => (
            <tr key={item.id} className="scale-row">
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

export default Date;
