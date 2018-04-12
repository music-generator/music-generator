Vue.component('submit-comment', {
    name: 'submit-comment',
    template: `
    <div class="input-group mb-3">
        <input type="text" class="form-control" name="user_comment" placeholder="Add comment" aria-label="Add-comment" aria-describedby="basic-addon2">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="submit_comment()">Comment</button>
        </div>
    </div>
    `,
    data: function(){
        return {
            comment: '',
        }
    },
    methods: {
        submit_comment: function(){
            let comment = $('[name="user_comment"]').val()
            let payload = {
                comment
            }
            this.$emit('submit-comment', payload)
        }
    },
})