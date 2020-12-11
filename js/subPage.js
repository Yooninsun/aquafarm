$(document).ready(function(){
  

  $('.tabcontaniner-tab > li > a').on('click',function(e){
    e.preventDefault();
    var url = $(this).attr('href');
    $('#containerBox').remove();
    $('#boxArea').load(url);
    $(this).parent().addClass('on');
    $(this).parent().siblings().removeClass('on')
  })

  






})(jQuery)
