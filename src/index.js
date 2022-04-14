// change require to es6 import style
// import $ from 'jquery';
import $ from 'jquery';
import './style.scss';

$('#main').html('Here we go!');
// THIS IS SUPPOSED TO BE THE TIMER
let seconds = 0;

function incrementSeconds() {
  seconds += 1;
  $('#main').html(`You've been on this page for ${seconds} seconds.`);
}

setInterval(incrementSeconds, 1000);
