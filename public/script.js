


//   Change text 

var tops = ["Endless Possibilities", "Unrestricted Access"];

var bottom = ["endless possibilities for","borderless credit for"];

var i = 1;
// setInterval(function(){
//  $(".addLine").toggleClass('line')
//  $("#borderless").fadeOut(3000).text(bottom[!i])
//  $("#borderless").fadeIn(4000).text(bottom[i])
//  $("#endless").fadeTo(10 , 0.1).fadeTo(200 , 0.2).fadeTo(200 , 0.3).fadeTo(300 , 0.5).fadeTo(500 , 1).text(tops[i])
// //  $("#borderless").animate({opacity: 0.2}, 300).animate({opacity: 0.5}, 700).animate({opacity: 1}, 1000 ).text(bottom[i])
//  i = (i+1) % bottom.length;
// },4000)


setInterval(function(){
    $(".addLine").toggleClass('line')
    $("#endless").fadeTo(10 , 0.3).fadeTo(200 , 0.2).fadeTo(200 , 0.3).fadeTo(300 , 0.5).fadeTo(500 , 1).text(tops[i])
    //  $("#endless").fadeOut(1000).animate({width: "hide"},1000,'easeInOutQuint').text(tops[!i])
    //  $("#endless").fadeIn(3000).animate({width: "show"},3000,'easeInOutQuint').text(tops[i])
   
    $("#borderless").fadeTo(10 , 0.3).fadeTo(200 , 0.2).fadeTo(200 , 0.3).fadeTo(300 , 0.5).fadeTo(500 , 1).text(bottom[i])
    // $("#borderless").fadeOut(1000).animate({width: "hide"},1000,'easeInOutQuint').text(bottom[!i])
    // $("#borderless").fadeIn(3000).animate({width: "show"},3000,'easeInOutQuint').text(bottom[i])
     
    //  $("#borderless").animate({opacity: 0.2}, 300).animate({opacity: 0.5}, 700).animate({opacity: 1}, 1000 ).text(bottom[i])
    i = (i+1) % bottom.length;
   },4000)
   


var countries = ['britain', 'nig', 'usa', 'ghn', 'cnd', 'sa']
var count = 1;
setInterval(function(){
 $("#country").attr('src', `./public/images/${countries[count]}.png`).fadeIn(100)
 count= (count+1) % countries.length;
},1000)