import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function() {
    	Ember.run.schedule('afterRender', this, this.initPage);
	},
	initPage: function() {
    	this.$().enhanceWithin();
    	jQuery('#application').pagecontainer("change", this.$('.ui-page'));
	},
	lecturesObserver: function() {//lecture observer function
    	Ember.run.schedule('afterRender', this, this.refresh);//after changes refresh this page
	}.observes('controller.content.[].length'),//updates content
	refresh: function() {
    	this.$('.ui-listview').listview('refresh');//refreshes the list view of lectures
	}
});