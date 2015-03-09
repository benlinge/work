<?php

register_sidebar(array(
    'name' => __('1st right sidebar'),
    'id' => '1st-right-sidebar',
    'before_widget' => '<div>',
    'after_widget' => '</div>'
));

register_sidebar(array(
    'name' => __('2nd right sidebar'),
    'id' => '2nd-right-sidebar',
    'before_widget' => '<div>',
    'after_widget' => '</div>'
));

register_sidebar(array(
    'name' => __('about'),
    'id' => 'about',
    'before_widget' => '<div>',
    'after_widget' => '</div>'
));

register_sidebar(array(
    'name' => __('share'),
    'id' => 'share',
    'before_widget' => '<div>',
    'after_widget' => '</div>'
));

register_sidebar(array(
    'name' => __('latest post'),
    'id' => 'latest-post',
    'before_widget' => '<div>',
    'after_widget' => '</div>'
));