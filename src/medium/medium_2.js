import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {
    avgMpg: function(arr) {
        const cityMpg = [];
        const hwyMpg = [];
        for (let i=0; i<arr.length; i++) {
            cityMpg.push(arr[i].city_mpg);
        }
        for (let i=0; i<arr.length; i++) {
            hwyMpg.push(arr[i].highway_mpg);
        }
        var hwyMpgAverage = getStatistics(hwyMpg).mean;
        var cityMpgAverage = getStatistics(cityMpg).mean;
        const ret = {city: cityMpgAverage, highway:hwyMpgAverage};
        return ret;

    },
    allYearStats: function(arr) {
        const years = [];
        for (let i=0; i<arr.length; i++) {
            years.push(arr[i].year);
        }
        const yearStats = getStatistics(years);
        return yearStats;
    },
    ratioHybrids: function(arr) {
        const hyb = [];
        for (let i=0; i<arr.length; i++) {
            hyb.push(arr[i].hybrid);
        }
        let y = 0;
        
        for (let i=0; i<hyb.length; i++) {
            if (hyb[i] == true) {
                y++;
            }
            
        }
        let ret = y / hyb.length;
        return ret;
    },
    
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    makerHybrids: undefined,
    avgMpgByYearAndHybrid: undefined
};
