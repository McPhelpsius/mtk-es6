<template>
<section>
  <img class="dog-pic" :src="avatar" title="dog"/>
  <h1>{{name}} - {{gender}}</h1>

<article class="dog-profile" v-for="d in dogs">
  <img class="dog-pic" :src="d.avatar" title="dog"/>
  <h1>{{d.name}} - {{d.gender}}</h1>
</article>
</section>
</template>

<script>
import axios from "axios";
export default {
  name: "Arrow",
  data() {
    return {
      avatar: '',
      name: '',
      names: ['Garth', 'Bella', 'Rex'],
      gender: '',
      dogs: [
        {
          avatar: '',
          name: '',
          gender: ''
        }
      ]
    }
  },
  async created() {
      this.createSingleDog();
      const three = await this.createThreeDogs();
      this.dogs = three;
  },
  methods: {
    createSingleDog() {
      axios.get("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp)
        .then(res => this.avatar = res.data.message);

      namey.get({frequency: 'rare', callback: data => {
        axios.get(`https://api.genderize.io/?name=${data[0]}`)
          .then(resp => resp)
          .then(res => {
            const { data: { name, gender } } = res;
            this.name = name;
            this.gender = gender;
          });
        }
      });
    },
    async createThreeDogs() {
      const theImgs =  await this.getThreeImages();
      const theNames = await this.getThreeNames();
      return this.mapDogProfiles(theImgs, theNames);
    },
    async getThreeImages() {
      const threeImages = await axios.get("https://dog.ceo/api/breeds/image/random/3")
      return threeImages.data;
    },
    async getThreeNames() {
      const nameReturn = await axios.get(`https://api.genderize.io/?name=${this.names[0]}&name=${this.names[1]}&name=${this.names[2]}`);
      return nameReturn.data;
    },
    mapDogProfiles(images, names) {

      const {message} = images;

      const mappedDogs = names.map((item, index) => {
        const {name, gender} = item;
        const avatar = message[index];

        return {name, gender, avatar};
      });
      return mappedDogs;
    },
  }
};
</script>

<style lang="scss">
.dog-profile {
  border-radius: 10px;

  h4 {
    font-size: 15px;
  }
}

img {
  max-width: 100px
}

</style>
