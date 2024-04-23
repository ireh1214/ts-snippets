 //https://school.programmers.co.kr/learn/courses/30/lessons/120818
 //옷가게 할인 받기
 
 export default function solution(price:number) {

    const dc1 = 100000
    const dc2 = 300000
    const dc3 = 500000

    if (price >= dc1 && price < dc2) {
        return Math.floor(price * .95)
    } else if (price >= dc2 && price < dc3) {
        return Math.floor(price * .9)
    } else if (price >= dc3) {
        return Math.floor(price * .8)
    } else {
        return price
    }
}