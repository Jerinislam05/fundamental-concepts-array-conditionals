var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2) {
    // console.log('runing test');
  if (num1 > num3) {
    console.log('num1 is largest');
  } else if (num3 > num1) {
    console.log('num3 is largest');
  }
} else if (num1 < num2) {
    // console.log('runing test');
  if (num2 > num3) {
    console.log('num2 is largest');
  } else if (num3 > num2) {
    console.log('num3 is largest');
  }
}
