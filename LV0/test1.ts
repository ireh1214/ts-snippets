 //https://school.programmers.co.kr/learn/courses/30/lessons/120818
 //옷가게 할인 받기
 
 export default function solution(price:number) {

    const dc1 = 100000
    const dc2 = 300000
    const dc3 = 500000

    //중복을 줄이다 보니까 이렇게 하는게 더 괜찮지 않을까 하는 생각이 들었습니다
    return Math.floor((price >= dc3) ? price * .8 
    : price >= dc2 ? price * .9 
    : (price >= dc1) ? price * .95 
    : price)  
    
}