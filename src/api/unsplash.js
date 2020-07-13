import axios from 'axios'; //package of code to use API requests

//Lec 94

//create method will create instance of axios client with some default properties
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID eb771617a6fe836ba694bd1fb1567979a74f032ef021683f09502312079e69c4'
    }

});