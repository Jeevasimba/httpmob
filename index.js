/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

var http = require('http');

http.get({ path : '/beep' }, function (res) {
    var div = document.getElementById('result');
    div.innerHTML += 'GET /beep<br>';
    
    res.on('data', function (buf) {
        div.innerHTML += buf;
    });
    
    res.on('end', function () {
        div.innerHTML += '<br>__END__';
    });
});


AppRegistry.registerComponent(appName, () => App);
