$(document).ready(function(){
  

  $('.tabcontaniner-tab > li > a').on('click',function(e){
    e.preventDefault();
    var url = $(this).attr('href');
    $('#containerBox').remove();
    $('#boxArea').load(url);
  })

  

})
  

