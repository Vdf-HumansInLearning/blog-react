import React from "react";
import "./Article.css";

function Article() {
  return (
    <div id="fromServer">
      <h2 className="title">
        The complete guide to explore Trasilvania, with your bike
      </h2>
      <ul className="info__container">
        <li className="info__item">Destination Europe</li>
        <li className="info__item">
          Added by
          <span className="info__mark point">Jonnathan Mercadina</span>
        </li>
        <li className="info__item">July 18, 2019</li>
      </ul>
      <div className="actions__container">
        <button type="button" className="actions__btn border" id="fromServer">
          Edit
        </button>
        <button type="button" className="actions__btn" id="fromServer">
          Delete
        </button>
        <img src="fromServer" alt="fromServer"></img>
        <div className="content__container">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam
            laboriosam debitis magnam voluptatum, incidunt neque. Totam ullam
            non quis, repellendus molestiae in itaque natus labore quos ipsum
            alias, veritatis nihil! Quisquam labore, sequi minima expedita
            necessitatibus omnis error amet recusandae atque commodi quia! Vel
            laborum recusandae voluptatum rerum id harum, fuga beatae ut,
            consequuntur repellendus ipsum temporibus libero itaque. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Unde quod tempore
            quaerat deserunt. Voluptatibus possimus, magni quas rem adipisci,
            esse ipsa fuga, fugit eos repellendus quis? Dicta perferendis,
            doloremque provident repellendus natus fugit obcaecati, voluptate
            odio, nulla similique officia. Iure at aliquam dicta provident nulla
            modi optio maiores. Similique eos molestiae earum voluptatum nostrum
            porro, consequuntur nihil ex earum. Voluptatum placeat labore
            necessitatibus repellat. Repudiandae velit suscipit amet tenetur,
            mollitia aut dolor ipsa delectus a autem ut quibusdam incidunt? Nisi
            facilis voluptatem omnis debitis laborum cupiditate pariatur
            inventore molestiae eveniet! ...
          </p>
        </div>
        <div className="readmore__container">
          <a className="btn-details" href="fromServer">
            <button type="button" className="button button-details">
              Read More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Article;
