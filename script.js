let day = Number(document.getElementById('input_day').value); // this makes sure that the day you are born is counted as day one 
let month = Number(document.getElementById('input_month').value);
let year = Number(document.getElementById('input_year').value); // becoz it counts from next yr since all 1997 are counted by day & month


let btn = document.getElementById('button')
btn.addEventListener('click',(e)=>{

    e.preventDefault();
    e.stopPropagation();

let month_array = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let d = new Date();

let past_total_month = 12 - month;
let present_total_month = d.getMonth() ;
let total_month = past_total_month + present_total_month;
let actual_year = 0;

if (total_month >= 12) {
    actual_year++;
    total_month = total_month-12;
  }

let past_total_day = month_array[month-1] - day;
let present_total_day = d.getDate();
let total_day = past_total_day + present_total_day;

if (total_day >= 30) {
  total_month++;
  total_day -= 30;
}



if (year == d.getFullYear) {
    actual_year = 0;
  } else {
     actual_year = d.getFullYear() - year;
  }



document.getElementById("year").innerHTML = actual_year;
let mm = document.getElementById("month");
mm.innerHTML = total_month;
let dd = document.getElementById("day");
dd.innerHTML = total_day;
})




