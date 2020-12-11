$(document).ready(function(){
  //메인 페이지 연결
  
  //윈도우 팝업
  window.open('popup.html','자이아쿠아팜-투자자모집','top=100,left=200, width=1000, height=600')
  //조건에 따라 팝업창 열기
  // if($.cookie('pop') != 'none'){
  // window.open('popup.html','자이아쿠아팜-투자자모집','top=100,left=200, width=1000, heigh 1000')
  // }
    

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
  
    







