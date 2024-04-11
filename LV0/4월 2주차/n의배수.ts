function solution(num:number, n:number) {
        let answer = 1; 
        const lowerBound = 2;
    
    if ( num <= lowerBound || num >= 100 || n <= lowerBound || n >= 9 ){
        console.log("값이 올바르지 않습니다!")
    }    


    if (num % n !== 0){
        let answer = 0;
        return answer;
    }

    return answer;
}