Vue.component('music-player-1', {
  name: 'music-player-1',
  template: `
    <div class="row jumbotron">
      <img class="col-md-3 col-12" style="height: 20rem; width: 20rem;" :src="datamusic[0].picture" alt="">
        <div class="container-audio col-md-9 col-12">
            <audio controls autoplay loop>
                <source :src="datamusic[0].music" type="audio/mp3">
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
  props: ['datamusic'],
  methods: {
    showAllMusicList: function () {
        axios.get('http://server-mg.creart.xyz/musics',{
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