var score1 = 0;
var btn1 = document.getElementById("ctr1");
var p1s = document.getElementById("score1");

var score2 = 0;
var btn2 = document.getElementById("ctr2");
var p2s = document.getElementById("score2");

var reset = document.getElementById("reset");

btn1.addEventListener("click", function() {
    score1++;
    p1s.textContent = score1;
});

btn2.addEventListener("click", function() {
    score2++;
    p2s.textContent = score2;
});

reset.addEventListener("click", function() {
    score1 = 0;
    score2 = 0;
    p1s.textContent = score1;
    p2s.textContent = score2;
});