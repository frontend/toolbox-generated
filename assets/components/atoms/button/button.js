import $ from 'jquery';
/* globals $ */

export default () => {
  $('.button').click(function () {
    console.log($(this));
    console.log($(this).text());
    console.log('Strong is the Force inside you.');
  });
};
