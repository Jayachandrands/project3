let x = 325;
let sum = 0;
while(x>0){
let lastdigit = (x%10);
sum = sum + lastdigit;
if(lastdigit>=5){
    x = x - lastdigit;
    }x = x/10;
    x = Math.round(x);
}
console.log(sum);