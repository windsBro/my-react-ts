import Sworker from 'simple-web-worker'
import axios from 'axios'

Sworker.run((axios) => {
  console.info(axios, '-----------------')
})
