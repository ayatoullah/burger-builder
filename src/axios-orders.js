import axios from 'axios';
    const instance= axios.create({
        baseURL: "https://burger-test-d887c.firebaseio.com/"
});
export default instance;