Vue.component('music-player-1', {
  name: 'music-player-1',
  template: `
    <div class="row jumbotron">
      <img class="col-md-3 col-12" style="height: 20rem; width: 20rem;" src="http://ksassets.timeincuk.net/wp/uploads/sites/55/2015/05/2014JoyDivision_UnknownPleasures_150414.jpg" alt="">
        <div class="container-audio col-md-9 col-12">
            <audio controls autoplay loop>
                <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg" type="audio/ogg">
                Your browser dose not Support the audio Tag
            </audio>
            <div class="container-audio d-none d-md-block">
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <!-- <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div>
                <div class="colum1">
                    <div class="row"></div>
                </div> -->
            </div>
        </div>
    </div>
  `,
  data () {
      return {
        name: '',
        music: '',
        picture: '',
        showAll: []
      }
  },
  methods: {
    showAllMusicList: function () {
        axios.get('http://localhost:3000/musics',{
            headers: {
                token: localStorage.getItem('token')
            }
        }).then(response =>{
            console.log('show music axios==',response.data)
            this.showAll = response.data.dataMusic
        }).catch(error =>{
            console.log(error)
        })
    }
  }
})