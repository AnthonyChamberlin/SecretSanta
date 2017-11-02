$(document).ready(function(){
  setTimeout(function(){
    $('#notice_wrapper').animate({ 'margin-top': '200px' }, 500);
  });

  setTimeout(function(){
    $('#notice_wrapper').animate({ 'margin-top': '-200px' }, function(){
      $(this).remove();
    });
  }, 5000);
});
