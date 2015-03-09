jQuery(document).bind('mobileinit', function() {
    jQuery.mobile.ajaxEnabled = false;
    jQuery.mobile.pushStateEnabled = false;
    jQuery.mobile.linkBindingEnabled = false;
    jQuery.mobile.hashListeningEnabled = false;
	
	jQuery('#application').pagecontainer();
});