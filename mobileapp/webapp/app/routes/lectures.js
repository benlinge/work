import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
    	return this.store.find('lecture', {owner: 31});//gets lectures owned by owner 31
	}
});

