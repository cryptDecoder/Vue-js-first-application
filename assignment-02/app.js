const app = Vue.createApp({
    data() {
        return{
            number1: 0,
            number2: 0
        }
    },
    methods: {
        showNumbers() {
            console.log(this.number1);
        }
    }
})
app.mount('#app')