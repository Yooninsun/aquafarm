$(document).ready(function(){
  //메인 페이지 연결
  

  //메뉴 클릭시 해당페이지 연결
  $('.depth1 > li > a, .depth2 > li > a').on('click',function(e){
    e.preventDefault();
    var url = $(this).attr('href');
    $('#containerBox').remove();
    $('#boxArea').load(url);
  })

  



})
  
    







