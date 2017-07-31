"use strict";
//alert();

function fib_sum(n)
{
    var tab=[0,1];
    var sum=0;
    var x;
    for(var i=2; i<=n;i++)
    {
        x=tab[i-1]+tab[i-2];
        tab.push(x);
    }
    for(var i=0;i<=n;i++)
    {
        sum=tab[i]+sum;
    }
    return sum; 
}

console.log(fib_sum(5));






