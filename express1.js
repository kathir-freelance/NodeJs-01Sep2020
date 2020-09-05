const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/url1', (req, res) => {
  res.send('url1!')
})

app.post('/save', (req, res) => {
	console.log('post');
  res.send('<h1> post request</h1>')
})

app.get('/get/:id',(req,res)=>
{
	res.send(`<h1>${req.params.id}</h1>`);
});


app.get('*',(req,res)=>
{
	res.send(`pls enter correct url - 404`);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})