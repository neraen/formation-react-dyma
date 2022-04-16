import * as axios from 'axios';

const apiFirebase = axios.create({
    baseURL: 'https://react-dyma-default-rtdb.europe-west1.firebasedatabase.app/'
})

export default apiFirebase;