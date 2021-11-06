const vapp = new Vue({
    el: '#events',
    data() {
        return {
            counter: 0
        }
    },
  methods: {
      add() {
          this.counter = this.counter + 1
      },
      remove() {
       this.counter = this.counter - 1
   }   
  }  
})

