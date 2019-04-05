import cluster from 'cluster'
import http from 'http'
import { cpus } from 'os'

import { generateArray, bubbleSort } from './array'

const nCpus = cpus().length

if (cluster.isMaster) {
  for (let i = 0; i < nCpus; i++)
    cluster.fork()
} else {
  http.createServer((req, res) => {
    const start = new Date()
    bubbleSort(generateArray(30000))
      .then(() => {
        const msg = `Worker ${cluster.worker.id} - ${((new Date()).getTime() - start.getTime()) / 1000} segundos`
        res.writeHead(200).end(msg)
      }).catch(() => {
        res.writeHead(200).end(`Erro na ordenação.`)
      })
  }).listen(8081, () => console.log('Listening in port 8081'))
}




// const start = new Date()
// const length = 20000

// console.log('Starting...')

// bubbleSort(generateArray(length)).then(result => {
//   console.log(`1 - ${((new Date()).getTime() - start.getTime()) / 1000} segundos`)
// })

// bubbleSort(generateArray(length)).then(result => {
//   console.log(`2 - ${((new Date()).getTime() - start.getTime()) / 1000} segundos`)
// })

// bubbleSort(generateArray(length)).then(result => {
//   console.log(`3 - ${((new Date()).getTime() - start.getTime()) / 1000} segundos`)
// })

// bubbleSort(generateArray(length)).then(result => {
//   console.log(`4 - ${((new Date()).getTime() - start.getTime()) / 1000} segundos`)
// })

// console.log('End script!')