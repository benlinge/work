import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	namespace: 'api',
	host: 'http://teaching.room3b.eu/ask-the-lecturer',//API Link
	headers: function() {
    	var auth = sessionStorage.getItem('Atl-user-password');
		auth = '31:password';//User id: User Password
    	return {
        	"X-Atl-Authentication": auth
    	};
	}.property().volatile()
});
