import {sumToString} from "./src/mild/mild_1.js";
console.log("Testing sumToString")
console.log(sumToString(3,4));
import { getIncreasingArray } from "./src/mild/mild_1.js";
console.log("Testing getIncreasingArray");
console.log(getIncreasingArray(3,7));
import { maxAndMin } from "./src/mild/mild_1.js";
console.log("Testing maxAndMin");
console.log(maxAndMin([1,2,3,4,5,6,7,8,9,10]));
import { countArray } from "./src/mild/mild_1.js";
console.log("Testing countarray");
console.log(countArray([1,1,1,3,3,3,5,4,5,4,5,4,5]));
import { identifyVariable } from "./src/mild/mild_2.js";
console.log("Testing identifyVariable");
console.log(identifyVariable(true));
import { identifyArray } from "./src/mild/mild_2.js";
console.log("Testing identifyArray");
console.log(identifyArray(['some', 3, [3, 4], false]));
import { removeKey } from "./src/mild/mild_2.js";
console.log("Testing removeKey");
var obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
console.log(removeKey(obj,'name'));
console.log(obj);
import { removeKeyNonDestructive } from "./src/mild/mild_2.js";
console.log("Testing removeKeyNondestructive");
console.log(removeKeyNonDestructive(obj,'age'));
import { removeKeys } from "./src/mild/mild_2.js";
console.log("Testing removekeys");
console.log(removeKeys(obj,["title","password"]));
import { getMedian, getSum } from "./src/medium/medium_1.js";
console.log("Testing getmedian");
console.log(getMedian([3,2,5,6,2,7,4,2,7,5]))
import { getStatistics } from "./src/medium/medium_1.js";
console.log("Testing getStatistics");
console.log(getStatistics([3,2,4,5,5,5,2,6,7]));