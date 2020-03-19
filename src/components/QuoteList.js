import React from 'react';
// import QuoteList from './QuoteList';
import QuoteCard from './QuoteCard';

// An array of objects
const quotes = [
  {
    quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
    character: "Nelson Muntz",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqUuyCEmsgq_bJCXWw-NFwvrG39FY2PJPGoOlz9MExIvcmbTFr",
  },
  {
    quote: "Family, religion, friendship. These are the three demons you must slay if you wish to succeed in busniess.",
    character: "Mr Burns",
    image: "https://upload.wikimedia.org/wikipedia/en/5/56/Mr_Burns.png",
  },
  {
    quote: "Me fail English? That's unpossible..",
    character: "Ralph Wiggun",
    image: "https://upload.wikimedia.org/wikipedia/en/1/14/Ralph_Wiggum.png",
  },
  {
    quote:
      "Hello, Simpson. I'm riding the bus today because Mother hid my car keys to punish me for talking to a woman on the phone. She was right to do it.",
    character: 'Principal Skinner',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460',
  },
];

const QuoteList = () => (
  <div>
    {quotes.map(item => (
      <QuoteCard
        key={item.quote}
        quote={item.quote}
        character={item.character}
        image={item.image}
      />
    ))}
  </div>
);

export default QuoteList;



         

     
         

      
        