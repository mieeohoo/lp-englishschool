'use strict';

$(function(){
// ハンバーガーメニュー
$('#menu-btn').on('click', function(){
  if($('header').hasClass('open')){
    $('header').removeClass('open');
  }
  else {
    $('header').addClass('open');
  }
});

$('#mask').on('click', function(){
  $('header').removeClass('open');
});

$('.global-menu').on('click', function(){
  $('header').removeClass('open');
});

// アコーディオン（よくある質問）
$('.qanda h4').on('click', function(){
  $(this).next().slideToggle();
  $(this).toggleClass('open');
});

// ページトップボタン
var pagetop = $('#top-btn');

pagetop.hide();
$(window).scroll(function(){
  if($(this).scrollTop() > 100){
    pagetop.fadeIn();
  } else {
    pagetop.fadeOut();
  }
});

pagetop.click(function(){
  $('body, html').animate({scrollTop:0}, 300);
  return false;
});

});