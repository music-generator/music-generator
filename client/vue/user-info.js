Vue.component('user-info',{
    name: 'user-info',
    template:`
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://cdn1-a.production.images.static6.com/2sokfzk1mvvnS3-1qqOBLboEN68=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/liputan6-media-production/medias/1128176/original/064850500_1454304784-download.jpg">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">billggates@gmail.com</li>
            <li class="list-group-item"><span class="fa fa-heart" aria-hidden="true">12.300 people like this</span> </li>
            <li class="list-group-item"><span class="fa fa-users" aria-hidden="true"></span> followers</li>
        </ul>
        <div class="card-body">
            <button type="button" class="btn btn-primary">FOLLOW</button>
        </div>
    </div>
    `
})