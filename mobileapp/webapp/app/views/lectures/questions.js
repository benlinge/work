import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function() {
    	Ember.run.schedule('afterRender', this, this.initPage);
	},
	initPage: function() {
    	this.$().enhanceWithin();
	},
});
