var app = new Vue({
    el: '#app',
    data: {
      title: 'Meus Estados Favoritos',
      message: 'Incrivel!',
      aula: 'FrontEnd é doidera',
      stateName: '',
      states: [{"id":2,"nome":"Paraná"},
               {"id":3,"nome":"Rio de Janeiro"},
               {"id":4,"nome":"Bahia"},
               {"id":5,"nome":"Santa Catarina"}]
    },
    methods: {
        setStateName(event){
            this.stateName = event.target.value;
        },
        addStateList(){
            const id = this.states.lenght;
            this.states.push({
                id: id,
                nome: this.stateName
            });
        }
    },
    created(){
        console.log('criou o componente')
      
    }

  })