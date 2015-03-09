import Ember from 'ember';

export default Ember.View.extend({
    didInsertElement: function() {
        Ember.run.schedule('afterRender', this, this.initPage);
    },
    initPage: function() {
        this.$().enhanceWithin();
        jQuery('#application').pagecontainer("change", this.$('.ui-page'));
    },
});