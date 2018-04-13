Vue.component('user-info',{
    name: 'user-info',
    template:`
    <div class="card" style="width: 18rem; margin: 10px;">
        <img class="card-img-top" src="http://www.ppet.org/images/tamu/anonym.jpg">
        <div class="card-body">
            <h5 class="card-title">Anonym</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">anonym@gmail.com</li>
                <li class="list-group-item"><span class="fa fa-heart" aria-hidden="true">12.300 people like this</span> </li>
                <li class="list-group-item"><span class="fa fa-users" aria-hidden="true"></span> followers</li>
                <button type="button" class="btn btn-primary">FOLLOW</button>

            </ul>
        </div>
    </div>
    `
})