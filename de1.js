<!--By codetienich.blogsopot.com-->
<
link rel = "stylesheet"
href = "https://codetienich.github.io/dulieu/ttn.css" >
    <
    script >
    var seconds = 20 * 60;

function secondPassed() {
    var minutes = Math.round((seconds - 30) / 60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById('thoigian').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('thoigian').innerHTML = "đã hết!";
        buttonT1_onclick();
    } else {
        seconds--;
    }
}
var countdownTimer = setInterval('secondPassed()', 1000); < /script>  <
div class = "onthi5phut" >
    <
    b > < span style = "color:  black; font-family: Times, Times New Roman, serif;" > Câu 10: < /span></b > < b > < span style = "color: black; font-family: Times, Times New Roman, serif;" > Một sóng truyền trên mặt biển có bước sóng 2 m.Khoảng cách giữa hai điểm gần nhau nhất trên cùng một phương truyền sóng dao động cùng pha nhau là: < /span></b >
    <
    input id = "codetienich_blogspot_comT1text10"
style = "visibility: hidden; width: 1px;"
value = "B" / > < br / >
    <
    input id = "codetienich_blogspot_comT1Cau10A"
name = "codetienich_blogspot_comT1.10"
type = "radio"
value = "A" / > < label
for = "codetienich_blogspot_comT1Cau10A"
id = "codetienich_blogspot_comT1.10A" > 1, 5 m < /label></span > < br / >
    <
    input id = "codetienich_blogspot_comT1Cau10B"
name = "codetienich_blogspot_comT1.10"
type = "radio"
value = "B" / > < label
for = "codetienich_blogspot_comT1Cau10B"
id = "codetienich_blogspot_comT1.10B" > 2 m < /label></span > < br / >
    <
    input id = "codetienich_blogspot_comT1Cau10C"
name = "codetienich_blogspot_comT1.10"
type = "radio"
value = "C" / > < label
for = "codetienich_blogspot_comT1Cau10C"
id = "codetienich_blogspot_comT1.10C" > 1 m < /label></span > < br / >
    <
    input id = "codetienich_blogspot_comT1Cau10D"
name = "codetienich_blogspot_comT1.10"
type = "radio"
value = "D" / > < label
for = "codetienich_blogspot_comT1Cau10D"
id = "codetienich_blogspot_comT1.10D" > 0, 5 m < /label></span > < br / > < br / > Thời gian làm bài < span style = "color: red;" > < b > < span class = "timer"
id = "thoigian" > < /span></b > < /span><br/ >