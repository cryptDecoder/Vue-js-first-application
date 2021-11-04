const app = Vue.createApp({
    data() {
        return {
            num1: 0,
            num2: 0
        }
    },
    methods: {
        totalNumber() {
            const totalSum = this.num1 + num2
            console.log(totalSum)
            return totalSum
        }
    }
})

app.mount('#app')