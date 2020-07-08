i=0;
pool = document.getElementsByTagName("td")[27].textContent;
pool = pool.split('wpm')[pool.split('wpm').length - 1];
pools = pool.split(' ');
document.onkeydown = function handle(e) { if(e.keyCode == 32) document.getElementsByClassName("txtInput")[0].value = pools[i++]; };