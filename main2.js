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

/*let counter =-5
while (counter<10){
    console.log('Hello world')
    counter += 1
}
for(let i=0; i<10; i++){
    console.log('Hello World from for loop')
}
*/

/*
let a=10
let b=20
let c=30
console.log('a:',a,'b:',b,'c:',c)

let ages =[10,20,30]
console.log('ages:',ages)
console.log('ages[1]:',ages[1])
//1.แทนที่ค่า ค่าข้อมูลในอาเรย์
ages = [15,25]
console.log('ages list',ages)

//2.ต่อarray
ages.push(35)
console.log('ages after push:',ages)

//3.ลบข้อมูลตัวสุดท้าย ในarray
ages.pop()
console.log('ages after pop:',ages)
*/

/*let ages=[25,35,40,45]
console.log('Arges:',ages)

let fruits = ['apple','banana','cherry']
console.log('Fruits:',fruits)
fruits.push('mango')
console.log('Frruit after push:',fruits)
console.log('First fruit:',fruits.length)

for(let i=0; i< fruits.length;i++){
    console.log('fruit at index',i,':',fruits[i])
}
*/

/*
functions
*/

/*
let score1 = 10
let score2 = 80

function calculation_grade(score){

    if (score>=80){
    grade ='A'
    }else if (score>=70){
    grade ='B'
    }else if (score>=60){
    grade ='C'
    }else if(score>=50){
    grade ='D'
    }else{
    grade ='F'
    }
    return grade
}
// เรียกใช้ฟังก์ชัน calculation_grade เพื่อหาค่าเกรดจากคะแนนที่่กำหนด
let grade1 = calculation_grade(score1)
let grade2 = calculation_grade(score2)
console.log('Scoore1: '+ score1+' Grade: '+grade1)
console.log('Scoore2: '+ score2+' Grade: '+grade2)
*/

/*
let score = [90, 80, 70, 60, 50];
for (let i = 0; i < score.length; i++) {
    console.log(`Score ${i + 1}: ${score[i]}`);
}
/*
score[0]=score[0]*2
score[1]=score[1]*2
score[2]=score[2]*2
score[3]=score[3]*2
score[4]=score[4]*2
*/
/*score = score.map((s) => {
    return s * 2;
})


score.forEach((s) => {
    console.log('Score:', s);
})
*/
/*
object functions
*/
let students = [
    { name: 'John', age: 20, grade: 'A' },
    { name: 'Jane', age: 22, grade: 'B' },
    { name: 'Jim', age: 21, grade: 'C' }
];

console.log('Student', students[0]);

let studentFound = students.find((s) => {
    return s.name === 'Jane';
});

let doblescoresStudents = students.map((s) => {
    return {
        ...s,
        age: s.age * 2
    };
});
let highGradeStudents = students.filter((s) => {
    return s.grade === 'A';
});

console.log('Doble Score Students: ', doblescoresStudents);
console.log('Student Found: ', studentFound);
console.log('High Grade Students: ', highGradeStudents);
