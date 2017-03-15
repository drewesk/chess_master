var game = engineGame({book: 'assets/book.bin'});
function newGame() {
  var baseTime = parseFloat($('#timeBase').val()) * 60;
  var inc = parseFloat(0);
  game.reset();
  game.setTime(baseTime, inc);
  game.setSkillLevel(20);
  game.setPlayerColor($('#color-white').hasClass('active') ? 'white' : 'black');
  game.setDisplayScore(true);
  game.start();
}
newGame();
