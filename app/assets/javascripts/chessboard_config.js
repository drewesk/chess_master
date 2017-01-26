var board = ChessBoard('board', {
  draggable: true,
  dropOffBoard: 'trash',
  sparePieces: true,
  showNotation: true,
});
$('#start').on('click', board.start);
$('#clear').on('click', board.clear);
$('#flip').on('click', board.flip);

$('#ruyLopez').on('click', function() {
  board.position('r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R');
});

$('#checkMate').on('click', function() {
  board.position({
    a4: 'bK',
    c4: 'wK',
    a7: 'wQ'
  });
});

$('#vanGeet').on('click', function() {
  board.position('rnbqkbnr/pppp1ppp/8/4p3/8/2N5/PPPPPPPP/R1BQKBNR w KQkq e6 0 2');
});
$('#urusovGambit').on('click', function() {
  board.position('rnbqkb1r/ppp1pppp/5n2/8/2BpP3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4');
});
$('#dutchDefence').on('click', function() {
  board.position('rnbqkb1r/pppp2pp/4pn2/5p2/3P4/5NP1/PPP1PPBP/RNBQK2R b KQkq - 3 4');
});
$('#queensGambit').on('click', function() {
  board.position('rnbqkb1r/pp3ppp/4pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1 b kq - 1 6');
});
$('#napoleon').on('click', function() {
  board.position('rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR b KQkq - 3 3');
});

$('#hide_button').click(function() {
  $('#hide_content').toggle(4000);
});
