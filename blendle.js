var inp = location.href.split(/\//);
var j = inp[2].replace(/(www\.|\.nl|\.com)/g, "");
var url;
function add_z(n) { n = Number(n); return n<10? '0'+n:''+n; }
if (j === "nrc") {
    var v = inp[3];
    var vers = "nrc";
    if (v === "next") { vers = "nn"};
    var m = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
    var dat = inp[5]+add_z((m.indexOf(inp[6])+1))+add_z(inp[7]);
    var art = inp.pop().split("-");
    var num = art.pop();
    url = "https://blendle.nl/i/nrc-handelsblad/"+art.join("-")+"/bnl-"+vers+"-"+dat+"-"+num;
    location.href=url;
} else {
    alert("Helaas... deze krant wordt niet ondersteund op dit moment.");
};
