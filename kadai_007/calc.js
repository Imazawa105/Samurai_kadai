let num = 15;

// 倍数を判断するためにはどうするか調べる　
// 1.３の倍数でかつ５の倍数かどうかをチェックする
// 2.1をチェックして正しければ「3と5の倍数です」をコンソールに表示する
// 3.1が正しくなければ3の倍数かどうかをチェックする
// 
if (num % 3 == 0) {
  if(num % 5 == 0){
    console.log("3と5の倍数です");
  }else{
    console.log("3の倍数です");
  }
}else if (num % 5 == 0) {
  console.log("5の倍数です");
}else{
  console.log(num);
}  

/* if (num % 3 == 0) {
  console.log("3の倍数です");
}

if (num % 5 == 0) {
  console.log("5の倍数です");
}

if ((num % 3 == 0) && (num % 5 == 0)) {
  console.log("3と5の倍数です");
}
  */



if (num % 3 == 0) {
  console.log("3の倍数です");
}else if (num % 5 == 0) {
    console.log("5の倍数です");
}else {
    console.log(num);
}





if ((num % 3 == 0) && (num % 5 == 0)) {
    console.log("3と5の倍数です");
}
else if (num % 3 == 0) {
    console.log("3の倍数です");
}
else if (num % 5 == 0) {
    console.log("5の倍数です");
}
else {
    console.log(num);
}
