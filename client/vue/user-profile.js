Vue.component('user-profile',{
    name: 'user-profile',
    template: `
    <div class="card user-profile" style="width: 18rem;">

        <img class="card-img-top" src="http://www.ppet.org/images/tamu/anonym.jpg">
        <div class="card-body">
            <h5 class="card-title">{{userdata[0].name}}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">{{userdata[0].email}}</li>
            <li class="list-group-item"><span class="fa fa-heart" aria-hidden="true">12.300 people like this</span> </li>
            <li class="list-group-item"><span class="fa fa-users" aria-hidden="true"></span> followers</li>
        </ul>
        <div class="card-body">
            <button type="button" @click="edit" class="btn btn-primary">EDIT</button>
            <button type="button" @click="upload" class="btn btn-primary">UPLOAD</button>
        </div>
    </div>
    `,
    props: ['userdata'],
    methods: {
        upload: function(){
            this.$emit('uploadfile', true)
        },
        edit: function(){
            this.$emit('editprofile', true)
        }
    }
})