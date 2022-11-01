const app = Vue.createApp({
    data() {
        return{ 
            input: "",
            confirmedInput: ""
        }
    },
    methods: {
        showAlert() {
        alert('Hello!')
        },
        showInput(event) {
            this.input = event.target.value;
        },
        confInput() {
            this.confirmedInput = this.input;
        }
    }
});

app.mount('#assignment')