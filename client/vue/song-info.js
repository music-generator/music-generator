Vue.component('song-info', {
    name: 'song-info',
    template:`
    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" @click="like_song" class="btn btn-primary"><span class="fa fa-heart" aria-hidden="true"></span> LIKE </button>
        </div>
        <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" @click="share_facebook" class="btn btn-primary"><span class="fa fa-facebook-square" aria-hidden="true"></span> SHARE</button>
        </div>
        <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" @click="share_twitter" class="btn btn-primary"><span class="fa fa-twitter-square" aria-hidden="true"></span> SHARE</button>
        </div>
        <div class="btn-group mr-2" role="group" aria-label="Second group">
            <button type="button" class="btn btn-primary"><span class="fa fa-heart" aria-hidden="true"></span> 120</button>
        </div>
        <div class="btn-group mr-2" role="group" aria-label="Third group">
            <button type="button" class="btn btn-primary"><span class="fa fa-cloud-download" aria-hidden="true"></span> 2,334</button>
        </div>
    </div>
    `,
    methods: {
        share_facebook: function(){
            this.$emit('facebookshare', true)
        },
        share_twitter: function(){
            this.$emit('twittershare', true)
        },
        like_song: function(){
            this.$emit('likesong', true)
        }
    }
})