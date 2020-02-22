var Days;
(function (Days) {
    Days[Days["SUN"] = 0] = "SUN";
    Days[Days["MON"] = 1] = "MON";
    Days[Days["TUE"] = 2] = "TUE";
    Days[Days["WED"] = 3] = "WED";
    Days[Days["THU"] = 4] = "THU";
    Days[Days["FRI"] = 5] = "FRI";
    Days[Days["SAT"] = 6] = "SAT";
})(Days || (Days = {}));
;
console.log("Day is ", Days.MON);
console.log("Day is ", Days.THU);
console.log("Day is ", Days.WED);
console.log("Day is ", Days.THU);
console.log("Day is ", Days.FRI);
console.log("Day is ", Days.SAT);
console.log("Day is ", Days.SUN);
