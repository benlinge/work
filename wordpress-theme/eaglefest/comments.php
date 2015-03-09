<hr />
<div id ="comments">
        <h3>Comments</h3>
    <?php wp_list_comments( array(
        'walker'            => null,
        'max_depth'         => '',
        'style'             => 'div',
        'reply_text'        => 'Reply to comment',
        'avatar_size'       => 64,
    ) ); ?>
</div>
<hr />
<div id="comment-form">
    <?php comment_form( array(
        'title_reply' => 'Reply to Post'
    ) ); ?>
</div>