const { infoLogger, warnLogger, errorLogger} = require('../logger/index')

const infoLog = async (req, res, next) => {
  // console.log(req.url)
  // infoLogger.info('',{metodo: req.method, ruta: req.route.path})
  infoLogger.log('info','',{metodo: req.method, ruta: req.url})
  next()
}
const warnLog = async (req, res, next) => {
  // warnLogger.warn('',{metodo: req.method, ruta: req.baseUrl})
  warnLogger.log('warn','',{metodo: req.method, ruta: req.baseUrl})
  next()
}
const errorLog = async (err) => {
  // errorLogger.error()
  errorLogger.log('error', err)
}

module.exports = {
  infoLog,
  warnLog,
  errorLog,
}