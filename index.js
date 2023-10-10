// index diye array upadan access kori
var numbers = [45, 68, 74, 72, 19, 89];
console.log(numbers);

// jodi index number ber korte chai tahole array er name er pore 3rd braket diye sei number dite hobe tahone oi array te sei number index ki/koto ache seita ashbe
console.log(numbers[3]);

//1. get element by index
var element = numbers[1];
console.log(element);
//2. set element value by index
numbers[1] = 77; //array er upadan k set korte bam pashe boshate hoy
numbers[3] = 44;
console.log(numbers);
// 3. find index of element
var positionIndex = numbers.indexOf(77);
console.log(positionIndex);