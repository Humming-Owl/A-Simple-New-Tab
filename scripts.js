function showChangeBox() {document.getElementById("cbc").style.display = 'block';}

function showChangeButton1() {document.getElementById("changeButton1").style.display = 'block';}

function showChangeButton2() {document.getElementById("changeButton2").style.display = 'block';}

function showChangeButton3() {document.getElementById("changeButton3").style.display = 'block';}

function showChangeButton4() {document.getElementById("changeButton4").style.display = 'block';}

function showChangeButton5() {document.getElementById("changeButton5").style.display = 'block';}

function showChangeButton6() {document.getElementById("changeButton6").style.display = 'block';}

function showChangeButton7() {document.getElementById("changeButton7").style.display = 'block';}

function showChangeButton8() {document.getElementById("changeButton8").style.display = 'block';}

function setid1() {

document.getElementById("a.1").id = "link";
document.getElementById("a.2").id = "letter";
document.getElementById("a.3").id = "title";}

function setid2() {

document.getElementById("b.1").id = "link";
document.getElementById("b.2").id = "letter";
document.getElementById("b.3").id = "title";}

function setid3() {

document.getElementById("c.1").id = "link";
document.getElementById("c.2").id = "letter";
document.getElementById("c.3").id = "title";}

function setid4() {

document.getElementById("d.1").id = "link";
document.getElementById("d.2").id = "letter";
document.getElementById("d.3").id = "title";}

function setid5() {

document.getElementById("e.1").id = "link";
document.getElementById("e.2").id = "letter";
document.getElementById("e.3").id = "title";}

function setid6() {

document.getElementById("f.1").id = "link";
document.getElementById("f.2").id = "letter";
document.getElementById("f.3").id = "title";}

function setid7() {

document.getElementById("g.1").id = "link";
document.getElementById("g.2").id = "letter";
document.getElementById("g.3").id = "title";}

function setid8() {

document.getElementById("h.1").id = "link";
document.getElementById("h.2").id = "letter";
document.getElementById("h.3").id = "title";}

/* Change element properties functions */

/* Load Changes */ 

if ("a.1" in localStorage) {
window.onload = loadChanges1();} else {}

if ("b.1" in localStorage) {
window.onload = loadChanges2();} else {}

if ("c.1" in localStorage) {
window.onload = loadChanges3();} else {}

if ("d.1" in localStorage) {
window.onload = loadChanges4();} else {}

if ("e.1" in localStorage) {
window.onload = loadChanges5();} else {}

if ("f.1" in localStorage) {
window.onload = loadChanges6();} else {}

if ("g.1" in localStorage) {
window.onload = loadChanges7();} else {}

if ("h.1" in localStorage) {
window.onload = loadChanges8();} else {}

function loadChanges1() {

document.getElementById("a.1").title = localStorage.getItem("a.2");
document.getElementById("a.1").href = localStorage.getItem("a.4");
document.getElementById("a.2").innerHTML = localStorage.getItem("a.1");
var element = document.getElementById("a.2");
element.style.color = localStorage.getItem("a.3");
document.getElementById("a.3").innerHTML = localStorage.getItem("a.2");}

function loadChanges2() {

document.getElementById("b.1").title = localStorage.getItem("b.2");
document.getElementById("b.1").href = localStorage.getItem("b.4");
document.getElementById("b.2").innerHTML = localStorage.getItem("b.1");
var element = document.getElementById("b.2");
element.style.color = localStorage.getItem("b.3");
document.getElementById("b.3").innerHTML = localStorage.getItem("b.2");}

function loadChanges3() {

document.getElementById("c.1").title = localStorage.getItem("c.2");
document.getElementById("c.1").href = localStorage.getItem("c.4");
document.getElementById("c.2").innerHTML = localStorage.getItem("c.1");
var element = document.getElementById("c.2");
element.style.color = localStorage.getItem("c.3");
document.getElementById("c.3").innerHTML = localStorage.getItem("c.2");}

function loadChanges4() {

document.getElementById("d.1").title = localStorage.getItem("d.2");
document.getElementById("d.1").href = localStorage.getItem("d.4");
document.getElementById("d.2").innerHTML = localStorage.getItem("d.1");
var element = document.getElementById("d.2");
element.style.color = localStorage.getItem("d.3");
document.getElementById("d.3").innerHTML = localStorage.getItem("d.2");}

function loadChanges5() {

document.getElementById("e.1").title = localStorage.getItem("e.2");
document.getElementById("e.1").href = localStorage.getItem("e.4");
document.getElementById("e.2").innerHTML = localStorage.getItem("e.1");
var element = document.getElementById("e.2");
element.style.color = localStorage.getItem("e.3");
document.getElementById("e.3").innerHTML = localStorage.getItem("e.2");}

function loadChanges6() {

document.getElementById("f.1").title = localStorage.getItem("f.2");
document.getElementById("f.1").href = localStorage.getItem("f.4");
document.getElementById("f.2").innerHTML = localStorage.getItem("f.1");
var element = document.getElementById("f.2");
element.style.color = localStorage.getItem("f.3");
document.getElementById("f.3").innerHTML = localStorage.getItem("f.2");}

function loadChanges7() {

document.getElementById("g.1").title = localStorage.getItem("g.2");
document.getElementById("g.1").href = localStorage.getItem("g.4");
document.getElementById("g.2").innerHTML = localStorage.getItem("g.1");
var element = document.getElementById("g.2");
element.style.color = localStorage.getItem("g.3");
document.getElementById("g.3").innerHTML = localStorage.getItem("g.2");}

function loadChanges8() {

document.getElementById("h.1").title = localStorage.getItem("h.2");
document.getElementById("h.1").href = localStorage.getItem("h.4");
document.getElementById("h.2").innerHTML = localStorage.getItem("h.1");
var element = document.getElementById("h.2");
element.style.color = localStorage.getItem("h.3");
document.getElementById("h.3").innerHTML = localStorage.getItem("h.2");}

/* Load Changes End */

function changeLetter() {

let letter = document.getElementById('changeletter').value;
document.getElementById("letter").innerHTML = letter;}

function changeColor() {

let color = document.getElementById('changecolor').value;
var element = document.getElementById("letter");
element.style.color = color;}

function changeTitle() {

let title = document.getElementById('changetitle').value;
document.getElementById("link").title = title;
document.getElementById("title").innerHTML = title;}

function changeLink() {

let link = document.getElementById('changelink').value;
document.getElementById("link").href = link;}

function clearLocalStorage() {

localStorage.clear();
window.location.reload(true);}

function storeChanges() {

if (document.getElementById('changeButton1').style.display === "block") {storeChanges1()} 
else if (document.getElementById('changeButton2').style.display === "block") {storeChanges2()}
else if (document.getElementById('changeButton3').style.display === "block") {storeChanges3()}
else if (document.getElementById('changeButton4').style.display === "block") {storeChanges4()}
else if (document.getElementById('changeButton5').style.display === "block") {storeChanges5()}
else if (document.getElementById('changeButton6').style.display === "block") {storeChanges6()}
else if (document.getElementById('changeButton7').style.display === "block") {storeChanges7()}
else {storeChanges8()}}

function storeChanges1() {

let letter = document.getElementById('changeletter').value;
let title = document.getElementById('changetitle').value
let color = document.getElementById('changecolor').value;
let link = document.getElementById('changelink').value;
localStorage.removeItem("a.1");
localStorage.removeItem("a.2");
localStorage.removeItem("a.3");
localStorage.removeItem("a.4");
localStorage.setItem("a.1", letter);
localStorage.setItem("a.2", title);
localStorage.setItem("a.3", color);
localStorage.setItem("a.4", link);}

function storeChanges2() {

let letter = document.getElementById('changeletter').value;
let title = document.getElementById('changetitle').value
let color = document.getElementById('changecolor').value;
let link = document.getElementById('changelink').value;
localStorage.removeItem("b.1");
localStorage.removeItem("b.2");
localStorage.removeItem("b.3");
localStorage.removeItem("b.4");
localStorage.setItem("b.1", letter);
localStorage.setItem("b.2", title);
localStorage.setItem("b.3", color);
localStorage.setItem("b.4", link);}

function storeChanges3() {

let letter = document.getElementById('changeletter').value;
let title = document.getElementById('changetitle').value
let color = document.getElementById('changecolor').value;
let link = document.getElementById('changelink').value;
localStorage.removeItem("c.1");
localStorage.removeItem("c.2");
localStorage.removeItem("c.3");
localStorage.removeItem("c.4");
localStorage.setItem("c.1", letter);
localStorage.setItem("c.2", title);
localStorage.setItem("c.3", color);
localStorage.setItem("c.4", link);}

function storeChanges4() {

let letter = document.getElementById('changeletter').value;
let title = document.getElementById('changetitle').value
let color = document.getElementById('changecolor').value;
let link = document.getElementById('changelink').value;
localStorage.removeItem("d.1");
localStorage.removeItem("d.2");
localStorage.removeItem("d.3");
localStorage.removeItem("d.4");
localStorage.setItem("d.1", letter);
localStorage.setItem("d.2", title);
localStorage.setItem("d.3", color);
localStorage.setItem("d.4", link);}

function storeChanges5() {

let letter = document.getElementById('changeletter').value;
let title = document.getElementById('changetitle').value
let color = document.getElementById('changecolor').value;
let link = document.getElementById('changelink').value;
localStorage.removeItem("e.1");
localStorage.removeItem("e.2");
localStorage.removeItem("e.3");
localStorage.removeItem("e.4");
localStorage.setItem("e.1", letter);
localStorage.setItem("e.2", title);
localStorage.setItem("e.3", color);
localStorage.setItem("e.4", link);}

function storeChanges6() {

let letter = document.getElementById('changeletter').value;
let title = document.getElementById('changetitle').value
let color = document.getElementById('changecolor').value;
let link = document.getElementById('changelink').value;
localStorage.removeItem("f.1");
localStorage.removeItem("f.2");
localStorage.removeItem("f.3");
localStorage.removeItem("f.4");
localStorage.setItem("f.1", letter);
localStorage.setItem("f.2", title);
localStorage.setItem("f.3", color);
localStorage.setItem("f.4", link);}

function storeChanges7() {

let letter = document.getElementById('changeletter').value;
let title = document.getElementById('changetitle').value
let color = document.getElementById('changecolor').value;
let link = document.getElementById('changelink').value;
localStorage.removeItem("g.1");
localStorage.removeItem("g.2");
localStorage.removeItem("g.3");
localStorage.removeItem("g.4");
localStorage.setItem("g.1", letter);
localStorage.setItem("g.2", title);
localStorage.setItem("g.3", color);
localStorage.setItem("g.4", link);}

function storeChanges8() {

let letter = document.getElementById('changeletter').value;
let title = document.getElementById('changetitle').value
let color = document.getElementById('changecolor').value;
let link = document.getElementById('changelink').value;
localStorage.removeItem("h.1");
localStorage.removeItem("h.2");
localStorage.removeItem("h.3");
localStorage.removeItem("h.4");
localStorage.setItem("h.1", letter);
localStorage.setItem("h.2", title);
localStorage.setItem("h.3", color);
localStorage.setItem("h.4", link);}

function closeEditWindow() {

resetid();
document.getElementById('cbc').style.display = "none";
document.getElementById("changeButton1").style.display = 'none';
document.getElementById("changeButton2").style.display = 'none';
document.getElementById("changeButton3").style.display = 'none';
document.getElementById("changeButton4").style.display = 'none';
document.getElementById("changeButton5").style.display = 'none';
document.getElementById("changeButton6").style.display = 'none';
document.getElementById("changeButton7").style.display = 'none';
document.getElementById("changeButton8").style.display = 'none';
resetfillwarning();}

function resetid() {

if (document.getElementById('changeButton1').style.display === "block") {resetid1()} 
else if (document.getElementById('changeButton2').style.display === "block") {resetid2()}
else if (document.getElementById('changeButton3').style.display === "block") {resetid3()}
else if (document.getElementById('changeButton4').style.display === "block") {resetid4()}
else if (document.getElementById('changeButton5').style.display === "block") {resetid5()}
else if (document.getElementById('changeButton6').style.display === "block") {resetid6()}
else if (document.getElementById('changeButton7').style.display === "block") {resetid7()}
else {resetid8()}}

function resetid1() {

document.getElementById("link").id = "a.1";
document.getElementById("letter").id = "a.2";
document.getElementById("title").id = "a.3";}

function resetid2() {

document.getElementById("link").id = "b.1";
document.getElementById("letter").id = "b.2";
document.getElementById("title").id = "b.3";}


function resetid3() {

document.getElementById("link").id = "c.1";
document.getElementById("letter").id = "c.2";
document.getElementById("title").id = "c.3";}


function resetid4() {

document.getElementById("link").id = "d.1";
document.getElementById("letter").id = "d.2";
document.getElementById("title").id = "d.3";}


function resetid5() {

document.getElementById("link").id = "e.1";
document.getElementById("letter").id = "e.2";
document.getElementById("title").id = "e.3";}


function resetid6() {

document.getElementById("link").id = "f.1";
document.getElementById("letter").id = "f.2";
document.getElementById("title").id = "f.3";}

function resetid7() {

document.getElementById("link").id = "g.1";
document.getElementById("letter").id = "g.2";
document.getElementById("title").id = "g.3";}


function resetid8() {

document.getElementById("link").id = "h.1";
document.getElementById("letter").id = "h.2";
document.getElementById("title").id = "h.3";}

function fillWarning() {

document.getElementById('fillwarningtext').style.color = 'red';
document.getElementById('fillwarningbox').style.borderColor = 'red';}

function resetfillwarning() {

document.getElementById('fillwarningtext').style.color = '0cb300';
document.getElementById('fillwarningbox').style.borderColor = '0cb300';}

function checkFields1() {

if (document.getElementById('changeletter').value === "") {fillWarning()} else {checkFields2();}}

function checkFields2() {

if (document.getElementById('changetitle').value === "") {fillWarning()} else {checkFields3();}}

function checkFields3() {

if (document.getElementById('changecolor').value === "") {fillWarning()} else {checkFields4();}}

function checkFields4() {

if (document.getElementById('changelink').value === "") {fillWarning();} else {changeLetter(); changeTitle(); changeColor(); changeLink(); storeChanges(); closeEditWindow(); resetfillwarning();}}
