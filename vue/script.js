//! API: https://flynn.boolean.careers/exercises/api/array/music

var app = new Vue({
    el: '#root',
    data: {
        dischi: '',
        generi: [],
        valoreGenere: ''
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((result) => {

            this.dischi = result.data.response;

            this.filtroGeneri();
        });
    },
    methods: {
        filtroGeneri(){
            this.dischi.forEach(element => {
                if ( !this.generi.includes(element.genre) ){
                    this.generi.push(element.genre);
                }
            });
        }
    }
});
