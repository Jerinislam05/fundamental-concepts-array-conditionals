var me = 85;
var tom = 66;
var jane = 95;
var peter = 56;
var jon = 40;

var myGrade;
var tomGrade;
var janeGrade;
var peterGrade;
var jonGrade;

if (me >= 80) {
    myGrade = 'A';
} else if (me >= 60) {
    myGrade = 'B';
} else if (me >= 50) {
    myGrade = 'C';
} else if (me >= 40) {
    myGrade = 'D';
} else {
    myGrade = 'F';
}

if (tom >= 80) {
    tomGrade = 'A';
} else if (tom >= 60) {
    tomGrade = 'B';
} else if (tom >= 50) {
    tomGrade = 'C';
} else if (tom >= 40) {
    tomGrade = 'D';
} else {
    tomGrade = 'F';
}

if (jane >= 80) {
    janeGrade = 'A';
} else if (jane >= 60) {
    janeGrade = 'B';
} else if (jane >= 50) {
    janeGrade = 'C';
} else if (jane >= 40) {
    janeGrade = 'D';
} else {
    janeGrade = 'F';
}

if (peter >= 80) {
    peterGrade = 'A';
} else if (peter >= 60) {
peterGrade = 'B';
} else if (peter >= 50) {
    peterGrade = 'C';
} else if (peter >= 40) {
    peterGrade = 'D';
} else {
    peterGrade = 'F';
}

if (jon >= 80) {
    jonGrade = 'A';
} else if (jon >= 60) {
jonGrade = 'B';
} else if (jon >= 50) {
    jonGrade = 'C';
} else if (jon >= 40) {
    jonGrade = 'D';
} else {
    jonGrade = 'F';
}
console.log('My Grade: ' +  myGrade);
console.log('tom Grade: ' +  tomGrade);
console.log('jane Grade: ' +  janeGrade);
console.log('peter Grade: ' +  peterGrade);
console.log('jon Grade: ' +  jonGrade);
/*node task2.js[answer]
My Grade: A
tom Grade: B
jane Grade: A
peter Grade: C
jon Grade: D */