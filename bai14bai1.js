/**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 */


 var Food = [
{ten:'tra sua', topping: 'tranchau'},
{ten:'com chien', topping: 'tuong ot'},
{ten:'mi xao', topping: 'tuong den'}

];

for (var X of Food) {
  console.log(X.ten,X.topping);
}


console.log('///////////////////');

var Food2={
  ten: 'dacbiet',
  topping: 'tat ca'
}

 for (key in Food2) {
    console.log(key,': ' + Food2[key]); 
  }
 

