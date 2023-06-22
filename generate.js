import Jabber from "jabber";
import { faker } from "@faker-js/faker";

const LIMIT = 50;
const themeWords = [
  "dog",
  "cat",
  "lizard",
  "mouse",
  "hamster",
  "goldfish",
  "hippopotamus",
  "elephant",
  "kangaroo",
  "scorpion",
];

const data = [];
const jabber = new Jabber.default(themeWords);
for (let i = 0; i < LIMIT; i++) {
  const object = {
    id: i,
    image: faker.image.urlLoremFlickr({ category: "nature" }),
    caption: jabber.createParagraph(20),
  };
  if (i === LIMIT - 1) {
    object.nextId = 0;
  } else {
    object.nextId = i + 1;
  }
  data.push(object);
}

console.log(JSON.stringify(data));
