// const length = require('os').cpus().length

import { generateArray, bubbleSortArray } from './array'
const start = new Date()
const arr = generateArray(50000)
bubbleSortArray(arr)
console.log(`${((new Date()).getTime() - start.getTime()) / 1000} segundos`)