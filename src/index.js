import './module';
import './scss/index.scss'

console.log('Working')

async function start() {
  return await Promise.resolve('asyn working try')
}

start().then(console.log)
