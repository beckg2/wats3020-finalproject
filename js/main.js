$( document ).ready(function() { //Runs all JS code once document is ready
    //simulated user data
  var userInfo = { 
        firstName: 'Jane',
        lastName: 'Doe'
    };

      // set an event handler for clicking the 'login' button to simulate login feature
      //use '.btn-sm' class to listen for click
      $('.btn-sm').click(function() {
     // when button is clicked, the '#login-form' field is hidden
        $('#login-form').hide();
      // when button is clicked, show '.user-fullname'
      // fade in at 650ms
        $('.user-info').fadeIn(650);
      // use css to add padding to top and increase font size
        $('.user-info').css({
           'padding-top': '5px',
           'font-size': '20px'
        });
      // when button is clicked , return 'firstName+lastName'
        $('.user-fullname').html(userInfo.firstName + '  ' + userInfo.lastName);

      });
    
      //  create event handler for clicking the 'view details' buttons
      $('.view-details').on('click', function(event) { 
      // create variable to target event
          var targetElement = event.target;
      //  create variable to tell function where the location of the target is
          var container = targetElement.parentElement.parentElement;
      //  finding 'details' class r for each element
          $(container).find('.details').each(function( index, el){
      //  when element is visible , fade out 
          if ($(el) .is ( ':visible')){
              $(el) .fadeOut(650);
      // change text within button with 'view details' 
              targetElement.innerText = "View Details"
      // allows element to 'fadeIn' when not visible
          } else {
                $(el).fadeIn(650);
      // change text within buttons with 'Hide Details'
      // user is able to 'Hide Details'
                targetElement.innerText= "Hide Details"
          }
        });
      });
});