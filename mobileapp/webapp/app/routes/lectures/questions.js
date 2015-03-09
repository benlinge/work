import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
    	return this.store.find('question', {owner:31});//gets questions owned by owner 31
	}
});