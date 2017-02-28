$(document).ready(function() {
  console.log('jquery loaded');
  var whoseJoke;
  var jokeQuestion;
  var punchLine;
  var joke = {};
  $('#jokeClick').on('click', function (){
    $.ajax({
        type: 'GET',
        url: '/jokes',
        success: function(response) {
          console.log(response);
          for (var i = 0; i < response.length; i++) {
            $('#jokesDisplay').append('<br>' + response[i].whoseJoke, ': ');
            $('#jokesDisplay').append('<br>' + response[i].jokeQuestion);
            $('#jokesDisplay').append('<p>' + response[i].punchLine + '</p>');
            console.log(response[i]);
          }
          // $('#jokesDiv1').text(response.whoseJoke);
          // $('#jokesDiv2').text(joke.jokeQuestion);
          // $('#jokesDiv3').text(joke.punchLine);
          // console.log(joke);
        } //  END OF SUCCESS
    }); //END OF AJAX
  }); //END CLICK
  $('#addJoke').on('click', function() {
      myJoke=$('#myJoke').text();
      console.log(myJoke);
      $.ajax({
          type: 'POST',
          url: '/jokes',
          data: jokes,
          success: function(response) {  //later clear input
              $('#displayJoke4').html(response);
          } //  END OF SUCCESS
      }); //END OF AJAX
  }); // end of click



// $('#jokeTwo').on('click', function (){
//   $.ajax({
//       type: 'GET',
//       url: '/jokes1',
//       success: function(response) {
//         var joke2 = response;
//         $('#jokesDiv4').text(joke2.whoseJoke);
//         $('#jokesDiv5').text(joke2.jokeQuestion);
//         $('#jokesDiv6').text(joke2.punchLine);
//         console.log(joke2);
//       } //  END OF SUCCESS
//   }); //END OF AJAX
// }); //END CLICK
//
// $('#jokeThree').on('click', function (){
//   $.ajax({
//       type: 'GET',
//       url: '/jokes2',
//       success: function(response) {
//         var joke3 = response;
//         $('#jokesDiv7').text(joke3.whoseJoke);
//         $('#jokesDiv8').text(joke3.jokeQuestion);
//         $('#jokesDiv9').text(joke3.punchLine);
//         console.log(joke3);
//       } //  END OF SUCCESS
//   }); //END OF AJAX
// }); //END CLICK
//
// // $('body').on('click', function (){
// // for (var i = 0; i < array.length; i++) {
// //   array[i]
// // }
// // //   $.ajax({
// //       type: 'GET',
// //       url: '/jokes[i]',
// //       success: function(response) {
// //         joke = response;
// //         $('#jokesDiv1').text(joke.whoseJoke);
// //         $('#jokesDiv2').text(joke.jokeQuestion);
// //         $('#jokesDiv3').text(joke.punchLine);
// //       } //  END OF SUCCESS
// //   }); //END OF AJAX
// // }); //END CLICK





}); // END DOC READY
