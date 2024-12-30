// Events page component
function Events() {
  // You could later add state here to manage event listings
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Conference",
      date: "June 15, 2024",
      description: "Join us for our annual conference..."
    },
    {
      id: 2,
      title: "Workshop Series",
      date: "July 1, 2024",
      description: "Monthly workshop on various topics..."
    }
  ];

  return (
    <div className="events">
      <h1>Events</h1>
      <div className="events-list">
        {upcomingEvents.map(event => (
          <div key={event.id} className="event-card">
            <h2>{event.title}</h2>
            <p className="date">{event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events; 