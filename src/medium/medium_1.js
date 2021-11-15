import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let a = 0;
    array.forEach(element => {
        a = a + element;
    });
    return a;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(arr) {
    const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    /* let statistics = [];
    statistics.push('length: ' + array.length);
    statistics.push('sum: ' + getSum(array));
    let mean = getSum(array) / array.length;
    statistics.push('mean: '+ mean);
    statistics.push('median: '+ getMedian(array));
    statistics.push('min:'+ Math.min(...array));
    statistics.push('max: '+ Math.max(...array));
    statistics.push('vairance: '+ variance(array, mean));
    statistics.push('standard_deviation: '+ Math.sqrt(variance(array, mean)));
    return statistics; */

    /* let statistics = {length: , sum: getSum(array), mean: getSum(array) / array.length,
         median: getMedian(array), min: Math.min(...array),
          max: Math.max(...array), variance: variance(array,getSum(array) / array.length ),
           standard_deviation = Math.sqrt(variance(array,getSum(array) / array.length ))}; */
    /* statistics.length = array.length;
    statistics.sum = getSum(array);
    statistics.mean = getSum(array) / array.length;
    statistics.median = getMedian(array);
    statistics.min = Math.min(...array);
    statistics.max = Math.max(...array);
    statistics.variance = variance(array, statistics.mean);
    statistics.standard_deviation = Math.sqrt(statistics.variance); */
    var statistics = {};
    statistics.sum = array.length;
    statistics.mean = getSum(array) / array.length;
    statistics.median = getMedian(array);
    statistics.min = Math.min(...array);
    statistics.max = Math.max(...array);
    statistics.variance = variance(array, statistics.mean);
    statistics.standard_deviation = Math.sqrt(statistics.variance);
    return statistics;

}

