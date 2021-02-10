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

            this.ordinaDischi();
            this.filtroGeneri();
        }).catch((error) => alert('errore'));
    },
    methods: {
        filtroGeneri(){
            this.dischi.forEach(element => {
                if ( !this.generi.includes(element.genre) ){
                    this.generi.push(element.genre);
                }
            });
        },
        ordinaDischi(){
            this.dischi.sort((discoA,discoB) => discoA.year - discoB.year);
        }
    }
});
