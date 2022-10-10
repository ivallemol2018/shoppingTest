const app = require('./app')

const PORT = process.env.PORT || 8081

if(process.env.NODE_ENV === 'production'){
  //Express will serve up production assets
  //like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  //Express will serve up the index.html file
  //if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });    
}

const server = app.listen(PORT,()=>{
  console.log(`Server http on ${PORT}...`)
})

server.on('error',error=> console.log('Error on server',error))