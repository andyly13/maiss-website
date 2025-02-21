import React from 'react';
import '../App.css';

const boardMembers = [
  {
    name: 'Vivian Phu',
    title: 'President',
    image: '/board-headshots/vivian.JPG'
  },
  {
    name: 'Evan Choe',
    title: 'Executive Vice President',
    image: '/board-headshots/evan.JPG'
  },
  {
    name: 'Andrew Ly',
    title: 'Co-VP of Professional Development',
    image: '/board-headshots/andrew_ly.JPG'
  },
  {
    name: 'Maggie Zhang',
    title: 'Co-VP of Professional Development',
    image: '/board-headshots/maggie.JPG'
  },
  {
    name: 'Keya Shah',
    title: 'Co-VP of External Affairs',
    image: '/board-headshots/keya.JPG'
  },
  {
    name: 'Kayla Kim',
    title: 'Co-VP of External Affairs',
    image: '/board-headshots/kayla.JPG'
  },
  {
    name: 'Skyler Chang',
    title: 'Co-VP of Internal Affairs',
    image: '/board-headshots/skyler.JPG'
  },
  {
    name: 'Felix Werner',
    title: 'Co-VP of Internal Affairs',
    image: '/board-headshots/marketing.jpg'
  },
  {
    name: 'Chloe Chan',
    title: 'Co-VP of Marketing',
    image: '/board-headshots/chloe.JPG'
  },
  {
    name: 'Andrew Lee',
    title: 'Co-VP of Marketing',
    image: '/board-headshots/andrew_lee.JPG'
  },
  {
    name: 'Aidan Jayakumar',
    title: 'VP of Finance',
    image: '/board-headshots/marketing.jpg'
  },
  {
    name: 'Michael Bakhtiar',
    title: 'VP of Community Developement',
    image: '/board-headshots/marketing.jpg'
  },
  
  // Add all 13 board members here
];

function Board() {
  return (
    <div className="board-container">
      <section className="board-hero">
        <h1>Our Board</h1>
        <p>Meet the dedicated team leading MAISS</p>
      </section>

      <section className="board-grid">
        {boardMembers.map((member, index) => (
          <div key={index} className="board-member">
            <div className="member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Board; 