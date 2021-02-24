const express = require('express');
const app = express();


// * App settings
app.set('port',process.env.PORT || 3000);

// * Middlewares
app.use(express.json());

// * Routes
app.use(require('./routes/movement'));

// * Setting  the server
app.listen(3000, () => {
    console.log('Server on port ', app.get('port'));
})
