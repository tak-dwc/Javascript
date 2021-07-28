// // let hello ="Hello World";
// // alert(hello);

// // // 整数を代入する
// // let int1 = 1;
// // alert(int1);

// // // 負数を代入する
// // let int2 = -10;
// // alert(int2);

// // // 小数点を代入する
// // let float1 = 3.14;
// // alert(float1);

// // // 文字列を代入する
// // let str1 = 'JavaScriptを覚えよう';
// // alert(str1);

// // // 足し算
// // alert(4 + 3);

// // // 引き算
// // alert(8 - 5);

// // // 掛け算
// // alert(2 * 6);

// // // 割り算
// // alert(10 / 2);

// // let str1 = 'Hello';
// // let str2 = 'World!!';
// // alert(str1 + str2);

// // //条件分岐スタート

// // //else if と　else　違い？

// // let orange = 100;
// // let apple = 120;

// // if(orange < apple){
// //   alert('みかんの値段がりんごより安い');
// // } else if(orange == apple){
// //   alert('みかんとりんごが同じ値段');
// // } else{
// //   alert('みかんの値段がりんごより高い');
// // }

// // let max = 16;
// // let num = 1;
// // let count = 0;

// // while(num < max){
// //   num = num * 2;
// //   count = count + 1;
// // }

// // alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// let max = 10;
// let num = 5;
// let count = 0;

// while(num < max){
//  num = num * 2;
//  count = count + 1;
// }

// alert("2をかけ続けて"+ max + "と同じになる回数は" + count + "回");

let i;
let num = 0;

for(i = 1; i < 11; i++){//←同じi=i+1
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です');