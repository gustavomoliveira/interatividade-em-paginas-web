/* 
Practice exercise 11.3
Using a basic HTML file, the below exercise will demonstrate the order of loading
for the window object and the document object using DOMContentLoaded, which is an event
that fires once the document object content is loaded in the browser.
The window object will load afterward, even if the window.onload statement comes first.
    Within a basic HTML file, create a function named message that requires two parameters,
    the first one being a string value for the message and the second an event object.
    Within the function, output into the console using console.log the event and the message.
    Using the window object, attach an onload function to the event object.
    Invoke the function, passing a string value of Window Ready and the event object to the message function for output.
    Create a second function to capture the DOM content loading, and add an event listener
    listening for DOMContentLoaded to the document object. Once that event is triggered,
    pass the event object and a string value of Document Ready to the message output function.
    Change the order of the event listeners, placing the document event statement prior
    to the window onload: does it make a difference in the output?
    Using the document object, add the DOMContentLoaded event listener,
    which will send to the function the arguments of Document Ready and the event object that was triggered.
    Run the script and see which event is triggered first; change the order of the events to see if the output sequence changes.
*/

function message(string, e) {
    console.log(string, e);
}

window.onload = function() {
    message('Window Ready', e);
}

function captureDom() {
    document.addEventListener('DOMContentLoaded', );
}