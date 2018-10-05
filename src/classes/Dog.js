import axios from "axios";

export default class Dog {
  constructor(gender, name, breed) {
    this.name = name;
    this.gender = gender;
    this.avatar =
      "https://images.dog.ceo/breeds/bulldog-french/n02108915_1137.jpg";
    this.breed = breed;
    this.setAvatar(breed);
  }

  async setAvatar(breed) {
    const breedExists = !!breed && breed.length > 0;
    let avatarString = "";

    if (breedExists) {
      avatarString = `https://dog.ceo/api/breed/${breed}/images/random`;
    } else {
      avatarString = "https://dog.ceo/api/breeds/image/random";
    }

    const avatarUrl = await axios.get(avatarString);
    const avatar = await avatarUrl.data.message;

    this.avatar = avatar;
    console.log("requested: ", this.avatar);
  }

  speak = () => "bark";

  generateTemplate() {
    console.log(this.name);
    console.log(this.breed);
    console.log(this.avatar);
    return `<article class="dog-profile">
      <img src="${this.avatar}" />
      <span>${this.name}, ${this.breed}</span>
    </article>`;
  }
}

export class Collie extends Dog {
  constructor(gender, name = "Lassie") {
    super(gender, name, "collie");
    this.avatar = "https://images.dog.ceo/breeds/collie/n02106030_14653.jpg";
  }

  speak = () => "ruff!";
}
