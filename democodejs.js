var cm = document.querySelector(".textcm");
var kg = document.querySelector(".textkg");
var btn = document.querySelector(".btnClass");
var list = document.querySelector(".list");
var btnBMI = document.querySelector(".btnBMI");
var bnitxtBox = document.querySelector(".bnitxtBox");
var bmitxt = document.querySelector(".bmitxt");
var icon = document.querySelector(".icon");
var bmiresult = document.querySelector(".bmiresult");
var bmiUnit = document.querySelector(".bmiUnit");
start();

function start() {
    btn.addEventListener(
        "click",
        function() {
            Calculate_BMI();
        },
        false
    );
}

function Calculate_BMI(e) {
    var h = cm.value / 100;
    var w = kg.value;
    var num = w / (h * h);
    var BMI = num.toFixed(1);
    if (BMI < 18.5) {
        txt = "過輕";
    } else if (BMI >= 18.5 && BMI < 24) {
        txt = "理想";
    } else if (BMI >= 24 && BMI < 27) {
        txt = "稍重";
    } else if (BMI >= 27 && BMI < 30) {
        color = "#FF6C03";
        txt = "輕度肥胖";
    } else if (BMI >= 30 && BMI < 35) {
        txt = "中度肥胖";
    } else if (BMI >= 35) {
        txt = "重度肥胖";
    }
    //結果存入
    bmi = {
        height: cm.value,
        weight: kg.value,
        BMIVal: BMI,
        Color: color,
        text: txt,
        date: today
    };
}

function updateHistory() {
    str = "";
    var len = data.length;
    for (var i = 0; i < len; i++) {
        str +=
            "<li>" +
            '<div class="Li">' +
            '<div class="color" style=" background-color:' +
            data[i].Color +
            ';"></div>' +
            '<div class="txt">' +
            data[i].text +
            "</div>" +
            '<div class="bmi">' +
            "<p>BMI</p>" +
            data[i].BMIVal +
            "</div>" +
            '<div class="kg">' +
            "<p>weight</p>" +
            data[i].weight +
            "kg</div>" +
            '<div class="cm">' +
            "<p>height</p>" +
            data[i].height +
            "cm</div>" +
            '<div class="date">' +
            data[i].date +
            "</div>" +
            '<a href="#" data-num="' +
            i +
            '">╳</a>' +
            "</div>" +
            "</li>";
    }
    list.innerHTML = str;
}