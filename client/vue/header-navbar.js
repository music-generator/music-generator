Vue.component('header-navbar', {
    name: 'header-navbar',
    template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
   
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
                <button  v-if="islogin" type="button" class="btn btn-danger" @click="logout()" style="margin: 10px;">
                    Logout
                </button>
                <button v-else="" type="button" class="btn btn-success" data-toggle="modal" data-target="#user-login" style="margin: 10px;">
                    Login
                </button>
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#user-register">
                Register
            </button>
        </div>

        <!-- Modal Register-->
        <div class="modal fade" id="user-register" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitleRegister">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" name="new_name" v-model="new_name" class="form-control" id="newName" aria-describedby="nameHelp" placeholder="Enter name">
                        <small id="nameHelp" class="form-text text-muted"></small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name="new_email" v-model="new_email" class="form-control" id="newEmail" aria-describedby="emailHelp" placeholder="Enter email">
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="new_password" v-model="new_password" class="form-control" id="newPassword" placeholder="Password">
                        <small id="passwordHelp" class="form-text text-muted"></small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPasswordConfirm">Confirm Password</label>
                        <input type="password" name="confirm_new_password" v-model="confirm_new_password" class="form-control" id="exampleInputPasswordConfirm" placeholder="Confirm Password">
                        <small id="confirmPasswordHelp" class="form-text text-muted"></small>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="register-form">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" v-show="isName && isEmail && isPassword && isConfirm" @click="register()">Submit</button>
                </div>
                </div>
            </div>
        </div>

       
        <!-- Modal Login-->
        <div class="modal fade" id="user-login" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="form">
                        <div class="form-group">
                            <input name="username" placeholder="Username" class="form-control form-control-sm" type="text" required="">
                        </div>
                        <div class="form-group">
                            <input name="password" placeholder="Password" class="form-control form-control-sm" type="text" required="">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="login()">Login</button>
                </div>
                </div>
            </div>
        </div>
    </nav>
    `,
    props: ['islogin'],
    data: function() {
        return {
            new_name: '',
            new_email: '',
            new_password: '',
            confirm_new_password: '',
            isEmail: false,
            isPassword: false,
            isConfirm: false,
            isName: false
        }
    },
    methods: {
        login: function(){
            this.$emit('login', true)
        },
        logout: function(){
            this.$emit('logout', false)
        },
        register: function(){

            let email = $('#newEmail').val()
            let password = $('#newPassword').val()
            let name = $('#newName').val()
            let payload = {
                email,
                password,
                name,
            }
            this.$emit('register', payload)
        }
    },
    watch: {
        new_name: function(){
            let name = this.new_name;
            if(name.length>6){
                this.isName = true;
                $('#nameHelp').text("correct name").css("color","green")
                $('[name="new_name"]').css({"border-color": "green", "border-solid": "bold", "border-width": "3px"})
            }else{
                this.isName = false;
                $('#nameHelp').text("name at least 6 characters").css("color","red")
                $('[name="new_name"]').css({"border-color": "red", "border-solid": "bold", "border-width": "3px"})
            }
        },
        new_email: function(){
            let email = this.new_email
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let checkEmail = re.test(String(email).toLowerCase());
            if(checkEmail){
                $('#emailHelp').text("correct email").css("color","green")
                $('[name="new_email"]').css({"border-color": "green", "border-solid": "bold", "border-width": "3px"})
                this.isEmail = true;
            }else{
                $('#emailHelp').text("wrong email").css("color","red")
                $('[name="new_email"]').css({"border-color": "red", "border-solid": "bold", "border-width": "3px"})
                this.isEmail = false;
            }
        },
        new_password: function(){
            let password = this.new_password;
            console.log('ini password', password)
            if(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(String(password))){
                $('#passwordHelp').text("correct password").css("color","green")
                $('[name="new_password"]').css({"border-color": "green", "border-solid": "bold", "border-width": "3px"})
                this.isPassword = true;
            }else{
                $('#passwordHelp').text("password must contain at least 1 uppercase, 1 lowercase, and 1 number").css("color","green")
                $('[name="new_password"]').css({"border-color": "red", "border-solid": "bold", "border-width": "3px"})
                this.isPassword = false;
            }
        },
        confirm_new_password: function(){
            if(this.confirm_new_password == this.new_password){
                $('#confirmPasswordHelp').text("password match").css("color","green")
                $('[name="confirm_new_password"]').css({"border-color": "green", "border-solid": "bold", "border-width": "3px"})
                this.isConfirm = true
            }else{
                $('#confirmPasswordHelp').text("password not match").css("color","red")
                $('[name="confirm_new_password"]').css({"border-color": "red", "border-solid": "bold", "border-width": "3px"})
                this.isConfirm = false;
            }
        }
    }
})
