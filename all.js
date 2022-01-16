window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
  }

$(function(){
  setTimeout('stopload()',20000);
});
  
function stopload(){
  $('.loaded').delay(600).fadeOut(300);
}

var userAgent = window.navigator.userAgent.toLowerCase();

if(userAgent.indexOf('msie') != -1 ||
        userAgent.indexOf('trident') != -1) {
    console.log('Internet Explorer をJiyukenは対応していません。Microsoft Edge またはGoogle Chrome を使用してください。');
} else if(userAgent.indexOf('safari') != -1) {
    console.log('SafariをJiyukenは対応していません。Microsoft Edge またはGoogle Chrome を使用してください。');
} else if(userAgent.indexOf('firefox') != -1) {
    console.log('FireFoxをJiyukenは対応していません。Microsoft Edge またはGoogle Chrome を使用してください。');
} else if(userAgent.indexOf('opera') != -1) {
    console.log('OperaをJiyukenは対応していません。Microsoft Edge またはGoogle Chrome を使用してください。');
} else {
    console.log('このブラウザをJiyukenは対応していません。Microsoft Edge またはGoogle Chrome を使用してください。');
}
