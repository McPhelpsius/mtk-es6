import axios from "axios";

export default class Dog {
  constructor(
    gender,
    name = "Fido",
    breed,
    subbreed,
    country = "US",
    age = "puppy"
  ) {
    this.name = name;
    this.country = country;
    this.age = age;
    this.gender = gender;
    this.avatar = "";
    this.breed = breed;
    this.subbreed = subbreed;
    this.setAvatar(breed, subbreed);
  }

  async setAvatar(breed, subbreed) {
    const breedExists = !!breed && breed.length > 0;
    let avatarString = "";

    if (breedExists) {
      const breedString = `${breed}`;
      const subbreedString = `/${subbreed}`;
      avatarString = `https://dog.ceo/api/breed/${breedString}${subbreedString}/image`;
    } else {
      avatarString = "https://dog.ceo/api/breeds/image/random";
    }

    const avatarUrl = await axios.get(avatarString);
    const {
      data: { message }
    } = avatarUrl;
    this.avatar = message;
  }

  speak = (bark = "bark") => `${bark}`;

  generateTemplate() {
    console.log(this);
    return `<article>
      <img src="${this.avatar}" />
      ${this.name}, ${this.gender} - ${this.breed}
    </article>`;
  }
}

export class Collie extends Dog {
  constructor(breed = "collie") {
    super();
    this.breed = "collie";
    this.avatar = "https://dog.ceo/api/breed/collie/image/random";
    console.log("ctorred");
  }
}
