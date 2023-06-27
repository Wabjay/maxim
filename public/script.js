

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

$("#date").text(Date().getFullYear())


//   function waitlist(){
//   var thisForm = document.getElementById("waitlist");
 
//   thisForm.addEventListener("submit", function(event) {
//      event.preventDefault();
//   // POST the data
//  const email_address = document.getElementById("email").value

//     console.log(email_address)
  
//   });
//   }
  
  
document
.getElementById("submit")
.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event)
});

function waitlist(){

    const waitlist_pop = document.getElementById("waitlist_popup");
  var thisForm = document.getElementById("waitlist_form");
  const headers_ = {
    // API KEY IN Bearer
       'Authorization': 'Bearer keyAs1krG80fTzo0c',
       'Content-Type': 'application/json'
  };
  // When the form is submitted...
  thisForm.addEventListener("submit", function(event) {
     event.preventDefault();
  // POST the data
  axios.post('https://api.airtable.com/v0/appJWS6wauaLZ',
  {
     "fields": {
      "Email": document.getElementById("email").value,
  }
  }, {headers: headers_}
  )
  .then((resp) => {
    console.log("success!")
    waitlist_pop.classList.add("show")
    if(waitlist_pop.classList.contains("show")) // Check if the popup is shown
  setTimeout(() => waitlist_pop.classList.remove("show"), 5500);
  
  })
  .catch(function (error) {
    console.log(error);
  })
  return false
//   event.target.reset();
  });
  }
waitlist()