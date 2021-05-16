const express = require('express');
const expHbs = require('express-handlebars');
const app = express();
const path = require('path');
const controller = require ('./controllers/covidController');



const hbsconfig = expHbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/mainLayout'),
    partialsDir: path.join(__dirname, 'views/partialsPage'),
    extname: 'hbs',
        
    helpers: {
        list: function (value, options) {
                let out = "<ul>";
                for (let i =0; i <value.length; i++) {
                
                    out = out + "<li>"+ options.fn(value[i]) + "</li>";
                }
            return out +"</url>";
        }
    }

});


//Config
app.use(express.static('public'));
app.engine('hbs', hbsconfig.engine);
app.set('view engine', 'hbs');

// routing
app.get('/', controller.index);
app.get('/countries', controller.countries);
app.get('/vaccines', controller.list);


app.listen(3000, () => {
    console.log("server is running");
});