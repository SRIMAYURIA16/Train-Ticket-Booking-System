import React from 'react';

const PastJourneyPage = () => {
  // Define the list of past journeys
  const pastJourneys = [
    {
      id: 1,
      destination: 'Rome, Italy',
      date: '2023-06-20',
    },
    {
      id: 2,
      destination: 'New York City, USA',
      date: '2023-07-02',
    },
    // Add more journeys as needed
  ];

  return (
    <div>
      <h2>Past Journeys</h2>
      {pastJourneys.map((journey) => (
        <div key={journey.id} className="journey-card">
          <h3>{journey.destination}</h3>
          <p>Date: {journey.date}</p>
        </div>
      ))}
    </div>
  );
};

export default PastJourneyPage;
