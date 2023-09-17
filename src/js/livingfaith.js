/* this function fires only after the page is loaded */
$(document).ready(function() {

    // set up the nav links both on the nav bar and the carousel
    loadContent("#home");
    $('.lfmNavLink').click(function (e){	//traverse through all our navigation links..
        loadContent(this.hash);	//.. and assign them a new onclick event, using their own hash as a parameter (#page1 for example)
        e.preventDefault(); // cancels the default action. this is how we keep the page from jumping back to the top when a nav link is clicked.
    });

    // teach the navbar to auto colapse
    $(".lfmNavLink").click(function(event) {
        // check if window is small enough so dropdown is created
        $(".navbar-collapse").removeClass("in").addClass("collapse");
    });

    // Prepare
    var History = window.History; // Note: We are using a capital H instead of a lower h
    if ( !History.enabled ) {
        // History.js is disabled for this browser.
        // This is because we can optionally choose to support HTML4 browsers or not.
        return false;
    }

    // Bind to StateChange Event
    History.Adapter.bind(window,'statechange',function() { // Note: We are using statechange instead of popstate
        var State = History.getState();
        $('#contentDiv').load(State.url);
        /* Instead of the line above, you could run the code below if the url returns the whole page instead of just the content (assuming it has a `#content`):
         $.get(State.url, function(response) {
         $('#content').html($(response).find('#content').html()); });
         */
    });


    // Capture all the links to push their url to the history stack and trigger the StateChange Event
    $('a').click(function(evt) {
        evt.preventDefault();
        History.pushState(null, $(this).text(), $(this).attr('href'));
    });
});

// Load the requested content dynamically via AJAX
function loadContent(url) {
    //strip the # part of the hash and leave only the page name
    url = url.replace('#','');

    //create an ajax request to load_file.php
    $.ajax({
        type: "POST",
        /*url: "load_file.php",*/
        url: url + ".php",
        data: 'page=' + url,
        dataType: "html",	//expect html to be returned
        success: function(msg){
            if(parseInt(msg) != 0)
            {
                //no errors found, load the returned html into contentDiv
                $('#contentDiv').html(msg);
            }
        }
    });
}

// send the contact request dynamically via AJAX
/*
function sendMail() {
    var $form = $('#contactForm');
    $form.submit(function() {
        var lfmName = $('#name').val();
        var lfmEmail = $('#email').val();
        var lfmMessage = $('#message').val();

        alert("name: " + lfmName + "\nemail: " + lfmEmail + "\nmessage: " + lfmMessage);

        $.post($(this).attr('sendMail.php'), { name: lfmName, email: lfmEmail, message: lfmMessage }, function(response) {
            // do something here on success
            alert("mail sent");
        });

        return false;
    });
}
*/


function sendMail() {
    var email = $("#email").val();
    var msg = $("#message").val();

    var alertMsg = 'sendMail.php?email='+email+'&msg='+msg;
    alert(alertMsg);

    $.ajax({ url: 'http://dev.livingfaith.x10.mx/sendMail.php?email='+email+'&msg='+msg, cache: false })
        .done(function(html){
            if(html == 'error'){
                alert("An error occurred and the message can't be sent.");
            }
            else {
                alert('Email has been successfully sent.');
            }
        })
        .fail(function(xhr, errorType){
            alert("Email Failed: " + xhr.status + " " + xhr.statusText);
        });
}
