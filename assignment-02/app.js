const app = Vue.createApp({
    data() {
        return{
            number1: 0,
            number2: 0
        }
    },
    methods: {
        showNumbers() {
            const total = this.number1 + this.number2
            console.log(this.number1);
        }
    }
})
app.mount('#app')