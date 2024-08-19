// Simple Drag and Drop by DAZ, Nov 2020
function drag(el){
    // set to position absolute
  el.style.position = 'absolute';
    // these 2 variables need to be available to all the event handler functions so need declaring outside their scope
  let offsetX,offsetY;
    // start the drag and drop
  const start = e => {
    // calculate the offset between the mouse position when the click happened and the position of the element
    offsetX = e.pageX - parseInt(getComputedStyle(el).left);
    offsetY = e.pageY - parseInt(getComputedStyle(el).top);
    // add mouse and touch event listeners when the dragging starts
    addEventListener( 'touchmove', move);
    addEventListener( 'touchend', stop );
    addEventListener( 'mousemove', move);
    addEventListener( 'mouseup', stop);
  }
  
  const move = e => {
    // set the position of element to be the same as the mouse, taking account of the offset
    el.style.left = `${e.pageX - offsetX}px`;
    el.style.top = `${e.pageY - offsetY}px`;
  }
  
  const stop = () => {
      // remove mouse and touch event listeners when the dragging stops
    removeEventListener( 'touchmove', move );
    removeEventListener( 'touchend', stop );
    removeEventListener( 'mousemove', move );
    removeEventListener( 'mouseup', stop );
  }
  // add event listener to iniate the drag and drop when element is clicked on or touched
  el.addEventListener( 'touchstart', start);
  el.addEventListener( 'mousedown', start);
  };
  // A couple of elements to test it out....
  const star = document.querySelector('#star');
  drag(star);
  const heart = document.querySelector('#heart');
  drag(heart);