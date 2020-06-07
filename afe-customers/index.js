const server = require('./src/server')

const port = process.env.PORT || 4002

server.listen(port).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})