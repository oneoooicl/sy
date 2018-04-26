jQuery(document).ready(function($) {
  /*导航栏*/
  var nav=['首页','产品服务','关于我们','联系我们','登录'];
  var navLink=['index.html','team.html','team.html','#rel','login.html'];

  var secondNav=[
    [],
    ['CFD','BFD','TQM'],
    ['联系我们','公司简介','团队成员'],
    [],
    [],
    []
  ];

  var secondNavLink=[
    [],
    ['team.html#CFD','team.html#BFD','team.html#TQM'],
    ['index.html#rel','team.html','team.html#team'],
    [],
    [],
    []
  ]

  var i,j;
  for(i=0;i<nav.length;i++){
    var $linkNode=$("<li><a href='" + navLink[i] + "'>" + nav[i] + "</a></li>");
    $("#menu .nav").append($linkNode);
  }

  for(i=0;i<nav.length;i++){
    for(j=0;j<secondNav[i].length;j++){
      var $secondNode=$("<li><a href='" + secondNavLink[i][j] + "'>" + secondNav[i][j] + "</a></li>");
      $("#menu .nav>li").eq(i).append($secondNode);
    }
    $("#menu .nav>li").eq(i).children("li").wrapAll("<ul></ul>");
  }

  /*下拉菜单样式代码*/
  $(".nav li").on("mouseover",function(){
        $(this).children("ul").stop().slideDown(300);
   }).on("mouseout",function(){
        $(this).children("ul").stop().slideUp(300);
   })


   /*返回顶部*/

    $(window).scroll(function(){
      if($(this).scrollTop()>260){
        $(".back").fadeIn(500);
      }else{
        $(".back").fadeOut(500);
      }
    })
    $(".back").click(function(){
      $("body").animate({
        scrollTop:"0"
      },500)
    })
})
