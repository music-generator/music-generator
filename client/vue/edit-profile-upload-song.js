Vue.component('edit-upload', {
    name: 'edit-upload',
    template: `
    <div>
        <div v-if="isedit">
            <div class="header-edit">
                <h5 class="modal-title" id="exampleModalCenterTitleRegister">Edit Profile</h5>
            </div>
            <div class="header-edit">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" name="edit_name" v-model="edit_name" class="form-control" id="editName" aria-describedby="nameHelp" placeholder="Enter name">
                        <small id="editNameHelp" class="form-text text-muted"></small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name="edit_email" v-model="edit_email" class="form-control" id="editEmail" aria-describedby="emailHelp" placeholder="Enter email">
                        <small id="editEmailHelp" class="form-text text-muted"></small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="edit_password" v-model="edit_password" class="form-control" id="editPassword" placeholder="Password">
                        <small id="editPasswordHelp" class="form-text text-muted"></small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Confirm Password</label>
                        <input type="password" name="confirm_edit_password" v-model="confirm_edit_password" class="form-control" id="confirmEditPassword" placeholder="Password">
                        <small id="confirmEditPasswordHelp" class="form-text text-muted"></small>
                    </div>
                </form>
            </div>
            <div class="header-edit">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" v-show="isName && isEmail && isPassword && isConfirm" @click="register()">Submit</button>
            </div>
        </div>
       <div v-else="">
            <div class="header-upload">
                    <h5 class="modal-title" id="exampleModalCenterTitleRegister">Upload Song</h5>
                </div>
                <div class="header-upload">
                    <form>
                        <label for="exampleInputTitle1">Title</label>
                        <div class="form-group">
                            <input type="title" name="title" class="form-control" id="title" placeholder="Enter titile song">
                            <small id="editEmailHelp" class="form-text text-muted"></small>
                        </div>
                        <label for="exampleInputTitle1">File Picture</label>

                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Upload file picture" aria-label="Recipient's username" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button">Upload</button>
                            </div>
                        </div>
                        <label for="exampleInputTitle1">File Song</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Upload file music" aria-label="Recipient's username" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button">Upload</button>
                            </div>
                        </div>
                
                        
                    </form>
                </div>
                <div class="header-upload">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>

       </div>        
    </div>
    
    
    `,
    data: function() {
        return {
            edit_name: '',
            edit_email: '',
            edit_password: '',
            confirm_edit_password: '',
            isEmail: false,
            isPassword: false,
            isConfirm: false,
            isName: false,
        }
    },
    props: ['isedit'],
    watch: {
        edit_name: function(){
            let name = this.edit_name;
            if(name.length>6){
                this.isName = true;
                $('#editNameHelp').text("correct name").css("color","green")
                $('[name="edit_name"]').css({"border-color": "green", "border-solid": "bold", "border-width": "3px"})
            }else{
                this.isName = false;
                $('#editNameHelp').text("name at least 6 characters").css("color","red")
                $('[name="edit_name"]').css({"border-color": "red", "border-solid": "bold", "border-width": "3px"})
            }
        },
        edit_email: function(){
            let email = this.edit_email
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let checkEmail = re.test(String(email).toLowerCase());
            if(checkEmail){
                $('#editEmailHelp').text("correct email").css("color","green")
                $('[name="edit_email"]').css({"border-color": "green", "border-solid": "bold", "border-width": "3px"})
                this.isEmail = true;
            }else{
                $('#editEmailHelp').text("wrong email").css("color","red")
                $('[name="edit_email"]').css({"border-color": "red", "border-solid": "bold", "border-width": "3px"})
                this.isEmail = false;
            }
        },
        edit_password: function(){
            let password = this.edit_password;
            console.log('ini password', password)
            if(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(String(password))){
                $('#editPasswordHelp').text("correct password").css("color","green")
                $('[name="edit_password"]').css({"border-color": "green", "border-solid": "bold", "border-width": "3px"})
                this.isPassword = true;
            }else{
                $('#editPasswordHelp').text("password must contain at least 1 uppercase, 1 lowercase, and 1 number").css("color","green")
                $('[name="edit_password"]').css({"border-color": "red", "border-solid": "bold", "border-width": "3px"})
                this.isPassword = false;
            }
        },
        confirm_edit_password: function(){
            if(this.confirm_edit_password == this.edit_password){
                $('#confirmEditPasswordHelp').text("password match").css("color","green")
                $('[name="confirm_edit_password"]').css({"border-color": "green", "border-solid": "bold", "border-width": "3px"})
                this.isConfirm = true
            }else{
                $('#confirmEditPasswordHelp').text("password not match").css("color","red")
                $('[name="confirm_edit_password"]').css({"border-color": "red", "border-solid": "bold", "border-width": "3px"})
                this.isConfirm = false;
            }
        }
    }
})