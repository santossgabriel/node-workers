// const length = require('os').cpus().length

import { generateArray, bubbleSort } from './array'
const start = new Date()
const length = 20000

console.log('Starting...')

bubbleSort(generateArray(length)).then(result => {
  console.log(`1 - ${((new Date()).getTime() - start.getTime()) / 1000} segundos`)
})

bubbleSort(generateArray(length)).then(result => {
  console.log(`2 - ${((new Date()).getTime() - start.getTime()) / 1000} segundos`)
})

bubbleSort(generateArray(length)).then(result => {
  console.log(`3 - ${((new Date()).getTime() - start.getTime()) / 1000} segundos`)
})

bubbleSort(generateArray(length)).then(result => {
  console.log(`4 - ${((new Date()).getTime() - start.getTime()) / 1000} segundos`)
})

console.log('End script!')