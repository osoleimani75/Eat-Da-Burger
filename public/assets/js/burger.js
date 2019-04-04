// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    // Select the new burger
    $("#newBurger").on("click", function(){
        $("#newBurgerBlock").css("display","block")
    });
    $(".form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#burger_name").val().trim(),
        };
        // Send the POST request.
        if (! (newBurger.burger_name == ""))
            $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
            }).then(
            function() {
                location.reload();
            }
            );
            else 
                location.reload();
      });
    


    // select the Eating Button
    $(".eatBtn").on("click", function(event) {
      var id = $(this).data("id");
      var eaten = {
        devoured: 1
      };
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eaten
      }).then( 
         function() {
          location.reload();
        }
      )
    });
  
    // select the Delete Button
    $(".delBtn").on("click", function(e){
     let id = $(this).data("id");
      $.ajax({
        url: "/api/burgers/" + id,
        method: "DELETE"
      }).then(function(data){
        if(data) {
          location.reload();
        }
      });
    });
  });
  