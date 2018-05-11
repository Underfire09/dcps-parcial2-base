import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({
    PostNoDelete: computed('model.posts.@each.isDeleted', function () {
		return this.get('model.posts').filterBy('isDeleted', false);
    }),
    actions:{
        delete(post){
            post.deleteRecord();
        }
    }
});
