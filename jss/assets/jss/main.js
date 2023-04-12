// var num = prompt("eded daxil ediin");
// if(num>9 && num<100);
// var teklik=num%10;
// var onluq=(num-teklik)/10;
// if(teklik==onluq){
//     alert("eynidir");
// }
// else{
//     alert("ferqlidir");
// }

//var num=prompt( "ededi daxil edin");
// if(num>999 && num<100000);{

//     var teklik=num%10;

// var onluq=((num-teklik)%100)/10;
// var yeni=onluq*10+teklik
// var yuzluk=((num-yeni)%1000)/100;
// var uclu= yuzluk*100+yeni
// var minlik=((num-uclu)%10000)/1000
// var sum= teklik+onluq+yuzluk+minlik ;
// alert(sum);}
// else{
//     alert("duz deyil")
// }
// 
// var month= prompt("month")
// switch(month){
//     case "January":
//         alert(31);
//         break;
//         case "feburary":
//             alert(29);
//             alert(28);
//             break;
//             case "Marth":
//                 alert(alert);

// }
// var dayofmoon=prompt("Zehmet olmasa ay daxil edin.")
// switch (dayofmoon) {
//     case "Yanvar":
//         alert("31 gun");
//         break;
//         case "Fevral":
//             alert("28-29 gun");
//             break;
//             case "Mart":
//         alert("31 gun");
//         break;
//         case "Aprel":
//         alert("30 gun");
//         break;
//         case "May":
//             alert("31 gun");
//             break;
//         case "Iyun":
//         alert("30 gun");
//         break;
//         case "Iyul":
//         alert("31 gun");
//         break;
//         case "Avqust":
//             alert("31 gun");
//             break;
//             case "Sentyabr":
//         alert("30 gun");
//         break;
//         case "Oktyabr":
//         alert("31 gun");
//         break;
//         case "Noyabr":
//             alert("30 gun");
//             break;
//             case "Dekabr":
//         alert("31 gun");
//         break;

//     default:
//         alert("Bele ay mumkun deyl");
//         break;
// }



// var num= Number(prompt("Ededi daxil edin"))

// if (num>=10 && num<100) {
//     var num1=num%10;
//     var num2=(num-num1)/10;
//     if(num1==num2){
//         alert("Ededin reqemleri beraberdir");
//     } 
//     else {
//         alert("Ededin reqemleri beraber deyl")
//     }

// }

// var num= Number(prompt("Ededi daxil edin"))
// if (num>=1000 && num<=9999) {
// var numtek=num%10;
// var numonluq=(num-numtek)%100/10;
// var numyuzluk=(num-num%100)%1000/10;
// var numminlik=(num-num%1000)%1000;
// var sum=numtek+numonluq+numyuzluk+numminlik ;
// alert(sum);
// }
// else{
//     alert("Eded 4 reqemli deyl")
// }


var s = 0;

for(var i = 1; i <= 100; i++){
if (i%2==0) {
    s = s + i; 
}
 }
alert(s)