const app = Vue.createApp({
    data() {
        return {
            messages: "Finish the course",
            link: 'cryptdecoder.tech'
        }
    },
    methods: {
        outMyGoals() {
        const randomNum = Math.random()
        console.log(randomNum)
        if (randomNum > 0.5) {
            return "practice more code"
        } else {
            return "Improve Skills"
        }
    }
    }
})

app.mount('#my-goals')