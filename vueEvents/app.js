const vapp = new Vue({
    el: '#events',
    data() {
        return {
            counter: 0,
            name: '',
            username: ''
        }
    },
    methods: {
        submitForm(event) {
            event.preventDefault();
            console.log(this.username);
            alert("submitted!! " + this.username)
     },
      add() {
          this.counter = this.counter + 1
      },
      remove() {
       this.counter = this.counter - 1
      },
      setName(event) {
       this.name = event.target.value
      },
      
  }  
})

