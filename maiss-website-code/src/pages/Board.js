// Board page component showing organization leadership
function Board() {
  // You could later move this data to a separate file or fetch from an API
  const boardMembers = [
    {
      id: 1,
      name: "Jane Doe",
      position: "President",
      bio: "Jane has been leading our organization since 2020..."
    },
    {
      id: 2,
      name: "John Smith",
      position: "Vice President",
      bio: "John brings 15 years of experience..."
    }
  ];

  return (
    <div className="board">
      <h1>Our Board</h1>
      <div className="board-members">
        {boardMembers.map(member => (
          <div key={member.id} className="member-card">
            <h2>{member.name}</h2>
            <h3>{member.position}</h3>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board; 