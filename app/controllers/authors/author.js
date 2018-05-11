import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({
    PostDelete: computed('model.author.@each.isDeleted', function () {
		return this.get('model.author').filterBy('isDeleted', false);
    }),
    actions:{
        delete(post){
            post.deleteRecord();
        }
    }
});
