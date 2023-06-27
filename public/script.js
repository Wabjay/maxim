

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



function waitlist(){
 
  const waitlist_pop = document.getElementById("waitlist_popup");
  const waitlist_text  = document.getElementById("waitlist_text");
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();

  const headers_ = {
    // API KEY IN Bearer
    'Authorization': 'Bearer keyOpje8r4lQVibqB',
    'Content-Type': 'application/json'
};
const Email = document.getElementById("email").value
if(Email){
  // POST the data
  axios.post('https://api.airtable.com/v0/apprrJKWwFeEItsWb/waitlist',
 {
    "fields": {
      "Email": document.getElementById("email").value
    }
  },
 {headers: headers_}
  )
  .then((resp) => {
    console.log("success!")
  document.getElementById("email").value = " "
    waitlist_pop.classList.add("show")
    waitlist_text.textContent = "Your details has been added to our waitlist."
    if(waitlist_pop.classList.contains("show")) // Check if the popup is shown
  setTimeout(() => waitlist_pop.classList.remove("show"), 3500);
  })
      .catch(function (error) {
          console.log(error);
      })}
      else{
        waitlist_pop.classList.add("show")
    waitlist_text.textContent = "Please enter your email address"
        if(waitlist_pop.classList.contains("show")) // Check if the popup is shown
      setTimeout(() => waitlist_pop.classList.remove("show"), 3500);
      }
}
)
}