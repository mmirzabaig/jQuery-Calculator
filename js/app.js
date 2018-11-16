// // for ( var i = 0; i <= 16; i++ ) {
// //   $('button').on('click', "calculator.answer.value +=" + )
// // }
// $(document).ready(function () {
//   // i$(event.currentTarget.)
//   console.log($input.val());
// });
$('.allClear').on('click', () => {
  $('input').val('0');
});

$('.equals').on('click', () =>  {
  let eq = $('input').val();
  eq = eq.slice(0, eq.length -1);
  eq = eval(eq);
  $('input').val(eq);
});
