<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php
        if ( function_exists( 'is_tag' ) && is_tag() ) {
           	echo 'Posts for &quot;'.$tag.'&quot; | ';
        } elseif ( is_archive() ) {
            wp_title(''); echo ' Posts | ';
        } elseif ( !( is_404() ) && ( is_single() ) || ( is_page() ) ) {
           	wp_title(''); echo ' | ';
        } elseif ( is_404() ) {
           	echo 'Not Found | ';
        }
        bloginfo('name');
           ?></title>
    <!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url')?>" />
    <?php wp_head()?>
</head>
<body>
<div id="header-bg">
    <header>
        <h1><a href="<?php echo home_url('/')?>"><?php bloginfo('name')?></a></h1>
    </header>
</div>
        <nav>
            <?php wp_nav_menu(); ?>
        </nav>
<div id="background">
    <div id="container">
