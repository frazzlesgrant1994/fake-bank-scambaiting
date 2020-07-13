https.createServer({
	key: fs.readFileSync('server.key'),
	cert: fs.readFileSync('server.cert')
}, app).listen(port, () => {
	console.log(`Https server is listening! Port: ${port}`)
})

