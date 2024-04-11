function solution(a:number, b:number) {
    
// 두 정수가 양의 정수인지 확인
if (a <= 0 || b <= 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
return "두 정수는 모두 양의 정수여야 합니다.";
}

//각 a+b를 x, b+a를 y라고 칭합니다
    const x = parseInt(a.toString() + b.toString());
    const y = parseInt(b.toString() + a.toString());

    function isInBound(n:number){
    let lowerBound = 1;
    let upperBound = 10000;
        return n >= lowerBound && n < upperBound;
    }

    if(isInBound(x) && isInBound(y)){
    if (x === y) {
    return x;
    } else if( x < y ){
        return y
    } else if(x > y){
        return x
    }
    }
    else{
        console.log('값이 맞지 않습니다')
    }
}

solution(2,5) 