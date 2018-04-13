Vue.component('comment-list', {
    name: 'comment-list',
    template:`
    <div class="list-group list-group-comment">
        <div v-for="comment in comments" style="margin: 10px;">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{comment.userId}}</h5>
                <small>{{comment.createAt}}</small>
            </div>
            <p class="mb-1">{{comment.word}}</p>
            <button type="button" class="btn btn-primary"><span class="fa fa-heart" aria-hidden="true"></span> 1,232</button>
            </a>
        </div>

    </div>
    `,
    data: function(){
        return {
            dummy: [1,2,3,4,5],
        }
    },
    props:['comments']
})
