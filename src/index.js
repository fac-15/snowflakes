const app = require('./app.js');

app.listen(app.get('port'), () =>{
    console.log('Snowflakes are pouring on port', app.get('port'))
});
