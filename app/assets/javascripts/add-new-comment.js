$(document).ready(function(){
  $('#add_comment form').on("submit",function(e){
    if ($('#new-content-comment').val() !== '') {

      e.preventDefault();

      $.ajax({
        url: '/comments',
        type: 'post',
        dateType: 'json',
        data: $(this).serialize(),
        success: function(result){
          $(result.html_comment).insertBefore('#comment_list');
          $('#commets_size').text(parseInt($("#commets_size").text()) + 1);
          clear();
        },
        error: function(result){
          alert(I18n.t('javascript.error_comment') + result.errors)
          clear();
        }
      });

    } else {
      alert(I18n.t('javascript.please_enter'));
      document.getElementById("submit").disabled = false;
      return false;
    }
  })
});

$(function(){

  var clearCommentBtn = $('#clear_comment');

  clearCommentBtn.click(function(e){
    clear();
  });
});

function clear(){
  $('#add_comment form')[0].reset();
  document.getElementById("submit").disabled = false;
}
