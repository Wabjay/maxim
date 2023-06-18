


//   Change text 

var tops = ["Endless Possibilities", "Unrestricted Access"];

var bottom = ["endless possibilities for","borderless credit for"];

var i = 1;
setInterval(function(){
 $(".addLine").toggleClass('line')
 $("#borderless").animate({opacity: 0.2}).animate({opacity: 1}).text(bottom[i])
 $("#endless").animate({opacity: 0.2}).animate({opacity: 1}).text(tops[i])
 i = (i+1) % bottom.length;
},4000)