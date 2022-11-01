const app = Vue.createApp({
    data() {
      return  {
        outputName: 'Vlad',
        outputAge: 29,
        pictureLink: 'https://media.wired.com/photos/5932db92b44176024420f10a/master/pass/cat-watching-computer-flickr-peasap.jpg',
      }
    },
    methods: {
      randomNum() {
        return Math.random();
        },
      incrementAge() {
          return this.outputAge+5;
        },
    }
})

app.mount('#assignment')