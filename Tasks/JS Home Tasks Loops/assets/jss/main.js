var num=Number(prompt("Zehmet olmasa ededi daxil edin"));
var sum=0
while (num !=0) {
    sum=sum+num%10;
    num=num/10;
    alert (sum)
}
