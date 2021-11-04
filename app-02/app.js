const app = Vue.createApp({
    data() {
        return {
            messages: "Finish the course",
            link: 'cryptdecoder.tech',
            myGoalA: "Need to focus on Studies",
            myGoalB: "Work Hard, Be Smart"
        }
    },
    methods: {
        outMyGoals() {
        const randomNum = Math.random()
        console.log(randomNum)
        if (randomNum > 0.5) {
            return this.myGoalA
        } else {
            return this.myGoalB
        }
    }
    }
})

app.mount('#my-goals')