module.exports.handler = (event, context, callback) => {
  console.log(event)

  callback(null, 'test')
}
