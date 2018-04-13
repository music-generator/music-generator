Vue.component('song-info', {
    name: 'song-info',
    template:`
    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">

        <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" @click="like_song" class="btn btn-primary"><span class="fa fa-heart" aria-hidden="true"></span> LIKE </button>
        </div>
        <div class="btn-group mr-2" role="group" aria-label="First group">
            <a :href="\'http://www.facebook.com/sharer.php?u=http://127.0.0.1:8080/music_page.html?music_id=\'+idmusic"><button type="button" @click="share_facebook" class="btn btn-primary"><span class="fa fa-facebook-square" aria-hidden="true"></span> SHARE</button></a>
        </div>
        <div class="btn-group mr-2" role="group" aria-label="First group">
            <a :href="\'https://twitter.com/share?url=http://127.0.0.1:8080/music_page.html?music_id=\'+idmusic+\'&amp;text=Simple%20sharemusicgcs&amp;hashtags=hacktiv8\'"><button type="button" @click="share_twitter" class="btn btn-primary"><span class="fa fa-twitter-square" aria-hidden="true"></span> SHARE</button></a>
        </div>
        <div class="btn-group mr-2" role="group" aria-label="Second group">
            <button type="button" class="btn btn-primary"><span class="fa fa-heart" aria-hidden="true"></span> 120</button>
        </div>
        <div class="btn-group mr-2" role="group" aria-label="Third group">
            <button type="button" class="btn btn-primary"><span class="fa fa-cloud-download" aria-hidden="true"></span> 2,334</button>
        </div>
    </div>
    `,
    data: function(){
        return {
            url_data: 1,
        }
    },
    props: ['idmusic'],
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