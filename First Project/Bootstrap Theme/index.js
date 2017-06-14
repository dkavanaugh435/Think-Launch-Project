$.ajax({
  type:"GET",
  url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&keyword=weeknd&apikey=q0weW5HWGbr6aWFoMnAZA2YHGMhGCcWc",
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json);
              console.log(json._embedded.events[0].name);
              document.getElementById("concerts").innerHTML = (json._embedded.events[0].name);

              // Parse the response.
              // Do other things.
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
});
console.log("it works")
