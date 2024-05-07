const map = new Map<string, number>();
// set, get, has, delete
map.set("foo", 1);
map.set("bar", 2);

const set = new Set<string>();
// add, has, delete
set.add("123");
set.delete("123");

const xs = Array.from(set);
// xs = ["123"]
// xs = [["foo", 1], ["bar", 2]]

// (map.get('bar'))
const arr: [key: string, value: number][] = [];
arr.push(["foo", 1]);
arr.push(["bar", 2]);
arr.push(["bar", 3]);
arr[10]; //

// 배열에다가 추가(push): O(1)
// 배열에서 검색: O(N)

// function set(arr: [key: string, value: number][], key: string, value: number) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i][0] === key) {
//             arr[i][1] = value;
//             return;
//         }
//     }
//     arr.push([key, value]);
// }
// set(arr, "foo", 1)

// Number.NaN

// if (set.has("123")){
//     console.log("OK");
// }
// npx tsx example.ts
