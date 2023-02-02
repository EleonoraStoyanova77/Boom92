import EventEmitter from "eventemitter3";
import Card from "./Card";
import Notification from "./Notification";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    let pizzas = [
      {
        type: Card.types.HAWAIIA,
        emoji: "🍍",
        price: 8.99,
      },
      {
        type: Card.types.PEPPERONI,
        emoji:"🍕",
        price: 9.99,
      },
      {
        type: Card.types.MARGHERITA,
        emoji:"🍅",
        price: 7.99,
      },
    ];

    pizzas.forEach((pizza) => {
      const card = new Card({ ...pizza });
      card.render();

      card.on(Card.events.ADD_TO_CART,(abj) => new Notification().render(obj));
      document.querySelector(".main").appendChild(card.container);
    });

    this.emit(Application.events.READY);
  }
}
