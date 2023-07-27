import React from 'react';

const UpcomingJourneyPage = () => {
  const upcomingJourneys = [
    {
      id: 1,
      destination: 'Paris, France',
      date: '2023-08-10',
    },
    {
      id: 2,
      destination: 'Tokyo, Japan',
      date: '2023-09-05',
    },
  ];

  return (
    <div>
      <h2>Upcoming Journeys</h2>
      {upcomingJourneys.map((journey) => (
        <div key={journey.id} className="journey-card">
          <h3>{journey.destination}</h3>
          <p>Date: {journey.date}</p>
        </div>
      ))}
    </div>
  );
};

export default UpcomingJourneyPage;
