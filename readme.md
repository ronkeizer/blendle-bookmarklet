# Blendle bookmarklet

Een bookmarklet om snel vanuit een paywall-artikel op bijvoorbeeld bijvoorbeeld www.nrc.nl naar hetzelfde artikel op Blendle te gaan. Andere kranten worden waarschijnlijk later toegevoegd (pull-requests welkom).

## Comments
- werkt nu alleen voor NRC en NRC next.
- nog niet uigebreid getest.

## Installatie
[@blendle](javascript:var inp=location.href.split(/\//);var j=inp[2].replace(/(www\.|\.nl|\.com)/g,"");var url;if(j==="nrc"){var v=inp[3];var vers="nrc";if(v==="next"){vers="nn"};var m=["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"];var dat=inp[5]+(m.indexOf(inp[6])+1)+inp[7];var art=inp.pop().split("-");var num=art.pop();url="https://blendle.nl/i/nrc-handelsblad/"+art.join("-")+"/bnl-"+vers+"-"+dat+"-"+num;location.href=url;};)

Sleep de bovenstaande link naar je bookmark bar.

## License
MIT



