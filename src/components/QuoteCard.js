import React from 'react';
import './QuoteCard.css';


// function Quote (props) {
//   return (
//     <figure className="QuoteCard">
//       <img src={props.image} alt={props.character} />
//       <figcaption>
//         <blockquote>{props.quote}</blockquote>
//         <cite>{props.character}</cite>
//       </figcaption>
//     </figure>
//   );
// }
// export default Quote;


export default function Quote ({ character }) {

    return (
      <figure className="QuoteCard">
        <img src={character.image} alt={character.name}/>
        <figcaption>
          <blockquote>{ character.quote }</blockquote>
          <p>
            <cite>{ character.character }</cite> 
          </p>
        </figcaption>
      </figure>
    );
}
