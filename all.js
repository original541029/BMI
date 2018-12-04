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
var data = JSON.parse(localStorage.getItem("listdata")) || [];
start();
updateHistory();
reset();

function start() {
    btn.addEventListener(
        "click",
        function() {
            changebtnColor();
            Calculate_BMI();
            updateHistory();
        },
        false
    );
}

function reset() {
    btnBMI.addEventListener(
        "click",
        function() {
            toreset();
        },
        false
    );
}

function Calculate_BMI(e) {
    var h = cm.value / 100;
    var w = kg.value;
    var num = w / (h * h);
    var BMI = num.toFixed(1);
    var date = new Date();
    var yyyy = date.getFullYear();
    var mm = (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1);
    var dd = (date.getDate() < 10 ? "0" : "") + date.getDate();
    var today = mm + "-" + dd + "-" + yyyy;
    if (BMI < 18.5) {
        color = "#31baf9";
        txt = "過輕";
    } else if (BMI >= 18.5 && BMI < 24) {
        color = "#86d73f";
        txt = "理想";
    } else if (BMI >= 24 && BMI < 27) {
        color = "#FF982D";
        txt = "稍重";
    } else if (BMI >= 27 && BMI < 30) {
        color = "#FF6C03";
        txt = "輕胖";
    } else if (BMI >= 30 && BMI < 35) {
        color = "#FF6C03";
        txt = "中胖";
    } else if (BMI >= 35) {
        color = "#FF1200";
        txt = "重胖";
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
    changebtnColor(color, BMI, txt);
    data.push(bmi);
    var dataString = JSON.stringify(data);
    localStorage.setItem("listdata", dataString);
    console.log(dataString);
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
list.addEventListener("click", listlidelete, false);

function listlidelete(e) {
    var nodeName = e.target.nodeName;
    var num = e.target.dataset.num;
    if (nodeName !== "A") {
        return;
    }
    data.splice(num, 1);
    localStorage.setItem("listdata", JSON.stringify(data));
    updateHistory();
}

function changebtnColor(color, BMI, txt) {
    btn.style.display = "none";
    btnBMI.style.display = "block";
    bnitxtBox.style.display = "block";
    btnBMI.style.borderColor = color;
    icon.style.backgroundColor = color;
    bmiresult.style.color = color;
    bmiUnit.style.color = color;
    bmitxt.style.color = color;
    bmiresult.textContent = BMI;
    bmitxt.textContent = txt;
    console.log(bmitxt.textContent);
}

function toreset() {
    btn.style.display = "block";
    btnBMI.style.display = "none";
    bnitxtBox.style.display = "none";
}