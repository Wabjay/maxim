


//   Change text 

var tops = ["Endless Possibilities", "Unrestricted Access"];

var bottom = ["endless possibilities for","borderless credit for"];

var i = 1;
setInterval(function(){
 $(".addLine").toggleClass('line')
 $("#borderless").fadeTo(10 , 0.1).fadeTo(200 , 0.2).fadeTo(200 , 0.3).fadeTo(300 , 0.5).fadeTo(500 , 1).text(bottom[i])
 $("#endless").fadeTo(10 , 0.1).fadeTo(200 , 0.2).fadeTo(200 , 0.3).fadeTo(300 , 0.5).fadeTo(500 , 1).text(tops[i])
 i = (i+1) % bottom.length;
},4000)


var countries = ['britain', 'nig', 'usa', 'ghn', 'cnd', 'sa']
var count = 1;
setInterval(function(){
 $("#country").attr('src', `./public/images/${countries[count]}.png`).fadeIn(100)
 count= (count+1) % countries.length;
},1000)