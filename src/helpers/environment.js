let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3050';
        break;
    
    case 'ab-game-wish-list-client.herokuapp.com':
        APIURL = 'https://ab-game-wish-list-client.herokuapp.com'
}

export default APIURL