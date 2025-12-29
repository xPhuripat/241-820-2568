/*
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
< น้อยกว่า
>= มากกว่าเท่ากับ
<= น้อยกว่าเท่ากับ
*/


/*let number1 = 25;
let number2 = 25;
*/

/*
Grade
>= 80 เป็นเกรด A
>= 70 เป็นเกรด B
>= 60 เป็นเกรด C
>= 50 เป็นเกรด D
< 50 เป็นเกรด F
*/

/*let score = prompt("ป้อนคะแนน")
console.log("คะแนนของคุณ     "+score)
if (score >= 80) {
    console.log("Grade A")
} else if (score>=70){
    console.log("Grade B")
}else if (score>=60){
    console.log("GradeC")
}else if(score>=50){
    console.log("Grade D")
}else
    console.log("GradeF")
*/





// if - else condition
/*if (number1 != number2){
    console.log('this if')
} else if (number1 == number2){
    console.log('this else if')
} else {
    console.log('this else')
}


/*
&& และ
|| หรือ
! not หรือ ไม่
*/
/*let number1= 5
let number2=8
//true && true
let condition = !(number1 >= 3 || number2 >= 10)
console.log("condition",condition)

let age =30
let gender ="ชาย"

if (age>=20 && gender=="ชาย"){
    console.log("ผู้ชายที่อายุ 20 ปีขึ้นไป")
}
*/
/*
loop statements :
wjile
for
*/

let counter =-5
while (counter<10){
    console.log('Hello world')
    counter += 1
}
for(let i=0; i<10; i++){
    console.log('Hello World from for loop')
}