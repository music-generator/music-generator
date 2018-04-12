Vue.component('comment-list', {
    name: 'comment-list',
    template:`
    <div class="list-group list-group-comment">
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Nama User</h5>
            <small>3 days ago</small>
        </div>
        <p class="mb-1">Ini commentnya sih user tentang musicnya kayak gimana</p>
        <button type="button" class="btn btn-primary"><span class="fa fa-heart" aria-hidden="true"></span> 1,232</button>
        </a>
    </div>
    `,
    data: function(){
        return {
            dummy: [1,2,3,4,5],
        }
    }
})