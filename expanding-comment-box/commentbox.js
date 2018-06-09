// Auto-selection when clicked
$(".comment_box").click(function() {
    $(".comment_box").css('color', 'black');
});
    
// Text turns gray again when not typing
$(".comment_box").blur(function() {
  $(".comment_box").css('color', '#7A7A7A');
});

// Post a comment... dissapears when field is clicked
$('.comment_box').focus(function() {
  if ($(this).val() === 'Post a comment...') {
    return $(this).val('');
  }
});
    
// Post a comment... reappears when field is not in focus anymore
$('.comment_box').blur(function() {
  if ($(this).val() === '') {
    return $(this).val('Post a comment...');
  }
});

// Expanding
$(".comment_box").focus(function() {
    $(this).animate({ width: "470px" }, 250);
    $(this).animate({ height: "200px" }, 250);
});

$(".comment_box").blur(function() {
    $(this).animate({ width: "300px" }, 200);
    $(this).animate({ height: "130px" }, 200);
});​