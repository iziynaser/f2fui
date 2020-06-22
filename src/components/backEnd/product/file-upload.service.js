import * as axios from 'axios';

const BASE_URL = 'http://localhost:8080/f2f/storage/upload-multiple-files';
//const BASE_URL = 'http://localhost:8080/f2f/storage/upload-file?access_token=';



// function upload(formData) {
    
//     console.log('upload is called......')
//     const access_token = localStorage.getItem('access_token');
//     const token = `Bearer ${access_token}`;
//     console.log(token);

//     const url = `${BASE_URL}/`;
//     return axios.post(url, formData)
//         // get data
//         .then(x => x.data)
//         // add url field
//         .then(x => x.map(img => Object.assign({},
//             img, { url: `${BASE_URL}/images/${img.id}` })));
// }

function upload(formData) {
    
    console.log('upload is called......')
    //const access_token = localStorage.getItem('access_token');
    //const token = `Bearer ${access_token}`;
    //console.log(token);

    const headers = new Headers();
    //headers.append('Authorization','Bearer '+ access_token);
    headers.append('Accept','application/json');

    //const url = `${BASE_URL}${access_token}`;
    const url = `${BASE_URL}`;
    return axios.post(url, formData,{headers:headers})
        // get data
        .then(x => x.data)
        // add url field
        .then(x => x.map(img => Object.assign({},
            img, { url: `${BASE_URL}/images/${img.id}` })));
}

export { upload }