export default class Dog {
  constructor(name = "Fido", country = "US", age = "puppy") {
    this.name = name;
    this.country = country;
    this.age = age;
  }

  speak = (bark = "bark") => bark;

  template() {
    return `<article>
      ${this.name}
    </article>`;
  }
}
