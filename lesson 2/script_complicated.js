let num = 266219;
num = num.toString();
num = num.split('');
console.log('num: ', num);
num = num.reduce(function(sum, current) {
    return +sum * +current;
});
console.log(num);
console.log(num = num ** 3);
num = num.toString();
console.log(num = num[0] + num[1]);
