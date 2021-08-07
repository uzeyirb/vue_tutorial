const app = Vue.createApp({

  data() {

    return {
      name: 'Adam',
      age: 36,
      imageUrl: 'https://cdn.technologynetworks.com/tn/images/thumbs/jpeg/640_360/life-in-science-integrating-electronics-with-the-human-body.jpg',
    };
  },

  methods: {

    calculateAge() {
      return this.age + 5;

    },
    calculateRandom() {
      return Math.random();
    }
  }

});

app.mount('#assignment');