// type narrowing example...

function double(a: number | string): number {
    /*
        == here we cannot call methods on var 'a' 
        == which aren't available in any of the type assigned to it.
        == or produces different results like '+' operator..
        ## a.length   // gives error. because not available in numbers
        ## a * a      // gives error. because strings can't be multiplied.
    */
    if(typeof a === 'string') {
        // here 'a' is narrowed down to string type
        // we can here call any sting method..
        console.log(a.length);
        return +a * 2;
    };
    // here 'a' is narrowed down to number type only
    // because of returning from string block
    // if did not returning from string block no narrowing happens here
    return a * 2;
}

console.log(double(1));

// !! checking aginst the value 
//    returned by the 'typeof' is a 'type guard'.