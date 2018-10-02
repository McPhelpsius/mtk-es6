import axios from 'axios';

export default class Dog {
  constructor(
    name = 'Fido',
    age = 'puppy',
    country = 'US',
    breed = 'retriever',
    bark = 'woof',
    gender,
    avatar
  ) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.breed = breed;
    this.bark = bark;
    this.gender = gender || this.getGender(name);
    this.avatar = avatar || this.getAvatarUrl(breed);
  }

  getAvatarUrl() {
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(resp => resp)
      .then(res => (this.avatar = res.data.message));
  }

  async getGender(name) {
    const gender = await axios
      .get(`https://api.genderize.io/?name=${name}`)
      .then(resp => resp)
      .then(res => (this.gender = res.data.gender));

    return gender.data.gender;
  }

  speak = () => this.bark;

  template = () => `
    <article>
      <img :src="this.avatar" alt="this.name" />
      <h4>{{this.name}}</h4>, <h6>{{this.breed}} - {{this.country}}</h6>
    </article>
  `;
}
