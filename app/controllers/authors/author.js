import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({
    PostDelete: computed('model.post.@each.isDeleted', function () {
		return this.get('model.post').filterBy('isDeleted', false);
    }),
    actions:{
        delete(post){
            post.deleteRecord();
        }
    }
});
