//Archivo servidor

const express = require('express');
const cors = require('cors')

//Crear servidor
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hola Mundo')
})

app.listen(4000, () => {
	console.log('El servidor esta corriendo perfectamente')
})

//Codigo para documentacion Swagger
var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//app.use('/api/v1', router);

