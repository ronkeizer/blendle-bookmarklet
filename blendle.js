var inp = location.href.split(/\//);
var j = inp[2].replace(/(www\.|blogs\.|\.nl|\.com)/g, "");
var url;
function add_z(n) { n = Number(n); return n<10? '0'+n:''+n; }
var f = false;
if (j === "nrc") {
    var v = inp[3];
    if (v === "next") { vers = "nn"};
    var m = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
    var dat = inp[5]+add_z((m.indexOf(inp[6])+1))+add_z(inp[7]);
    var art = inp.pop().split("-");
    var num = art.pop();
    url = "https://blendle.nl/i/nrc-handelsblad/"+art.join("-")+"/bnl-"+j+"-"+dat+"-"+num;
    location.href=url;
    f = true;
} 
if( j === "wsj") {
    function get_meta(name,content){
      var content = (content==null)?'content':content;
      return document.querySelector("meta[name='"+name+"']").getAttribute(content);
    }
    var art = inp.pop().split("-");
    var num = get_meta('article.id');
    var dat = get_meta('article.published');
    dat = dat.replace(/-/g, "").substring(0, 8);
    // https://blendle.com/i/wsjcom/tulsa-sheriff-limits-volunteers-duties-after-fatal-shooting/bnl-wsj-20150430-SB10728864788803823480504580612561525483500
    url = "https://blendle.com/i/wsjcom/"+art.join("-")+"/bnl-"+j+"-"+dat+"-"+num;
    location.href=url;
    f = true;
}
if (!f) {
    alert("Sorry... this newspaper or magazine is not supported yet by this bookmarklet.");
};
