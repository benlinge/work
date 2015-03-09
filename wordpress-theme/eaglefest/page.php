<?php get_header() ?>
<script>
jQuery(document).ready(function($) {
    if(matchMedia) {
	    var mediaquery = window.matchMedia("(min-width: 750px)");
	    mediaquery.addListener(WidthChange);
	    WidthChange(mediaquery);
    }
    function WidthChange(mediaquery) {
	    if (mediaquery.matches) {
	    }
	    else {
		    $('img').removeAttr('width').removeAttr('height');
	    }
    }
});
</script>
<div id="content">
    <?php while(have_posts()): the_post() ?>
        <div class="post">
            <h2><?php the_title() ?></h2>
                <p>
                    Posted on <?php echo get_the_time('d/m/Y', $post); ?> by
                    <a href="<?php echo get_author_link(false, $authordata->ID, $authordata->user_nicename); ?>"><?php the_author() ?></a>
                </p>
            <?php the_content(); ?>
                <p>
                    Posted in <?php the_category(', '); ?> | <a href="<?php comments_link(); ?>">Leave A Comment</a>
                </p>
        </div>
        <hr />
    <?php endwhile; ?>
</div>

<?php get_sidebar()?>
<?php get_footer() ?>
