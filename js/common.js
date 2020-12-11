$(document).ready(function(){
  //메인 페이지 연결
  

  //메뉴 클릭시 해당페이지 연결
  $('.depth1 > li > a').on('click',function(e){
    e.preventDefault()
    var url =$(this).attr('href');
    var num =$(this).parent().index();
    $('#containerBox').remove();
    $('#boxArea').load(url,function(){
      $('.conbox').hide()
      $('.conbox').eq(num).show()
    });
  })
  
  
  //2단계 메뉴 선택
  $('.depth1 > li > .depth2 > li > a').on('click',function(e){
    e.preventDefault();
    var url = $(this).attr('href');
    var num = $(this).parent().index();
    $('#containerBox').remove();
    $('#boxArea').load(url,function(){
      $('container-tab > li').eq(num).addClass('on').siblings().removeClass('on')
      $('conbox').hide()
      $('conbox').eq(num).show()
    });

  })

  



})
  
    







