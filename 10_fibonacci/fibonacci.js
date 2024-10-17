const fibonacci = function(n) {
    let m ;

    if(typeof n !== "number"){
        m = parseInt(n);
    }
    else{
        m = n
    }

    if (n < 0) return "OOPS";
     if(n == 0) return 0;
     if(n === 1) return 1;
    let a = 0;
    let b = 1;
    let c;

    for (let i = 2 ; i <= n ; i++){
        c = a + b;
        a = b;
        b = c;
    }
    return b

};
// Do not edit below this line
module.exports = fibonacci;
