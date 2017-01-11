$('document').ready(function() {
  var videoDefault;
  var time;

  videoDefault = prompt('Enter YouTube ID,\n' +
    'ID example( ZCAnLxRvNNc ),\n' +
    'Or type( lesson of the week ),\n' +
    'Default Video if  left empty.\n' +
    'none = no Video');

  switch (videoDefault) {
    case 'lesson of the week':
      videoDefault = 'JuLYgClRe-Q';
      time = 0;
      break;
    case  '':
      videoDefault = 'xmXwdoRG43U';
      time = 300;
      break;
    case  null:
      videoDefault = 'xmXwdoRG43U';
      time = 300;
      break;
    default:
      time = 0;
      break;
  }

  if (videoDefault === 'none') {
    // do nothing
  } else {
    var options = {videoId: videoDefault, start: time};
    $('#wrapper').tubular(options);
  }

});
