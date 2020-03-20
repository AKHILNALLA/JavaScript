var MarkAvg;
var Mark1 = 116;
var Mark3 = 123;
var Mark2 = 94;
var JohnAvg;
var John1 = 89;
var John2 = 120;
var John3 = 103;
var AkhilAvg;
var Akhil1 = 124;
var Akhil2 = 124;
var Akhil3 = 124;
MarkAvg = (Mark1 + Mark2 + Mark3) / 3;
JohnAvg = (John1 + John2 + John3) / 3;
AkhilAvg = (Akhil1 + Akhil2 + Akhil3) / 3;
if (MarkAvg > JohnAvg && MarkAvg > AkhilAvg) {
    console.log(MarkAvg, "mark team win");
}
else if (MarkAvg < JohnAvg && AkhilAvg < JohnAvg) {
    console.log(JohnAvg, "John team win");
}
else if (AkhilAvg > MarkAvg && AkhilAvg > JohnAvg) {
    console.log(AkhilAvg, "Akhil team win");
}
else {
    console.log(" draw")
}
