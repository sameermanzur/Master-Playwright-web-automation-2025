import{test, expect } from '@playwright/test';
import { request } from 'http';

test.only ('Get User Details Using GET API',  async ({request})=>{
    const response = await request.get('https://reqres.in/api/users?page=2'); 
    const responseJson = await response.json(); 
    console.log(responseJson); 
    expect(response.status()).toBe(200); 
    expect(responseJson.data[3].email).toBe('byron.fields@reqres.in'); 
}); 


// test ('Create User Details Using POST API', async ({request})=>{
//     var requestBody = 
//         {
//     "name": "morpheus",
//     "job": "leader"
// }
//     const response =  await request.post('https://reqres.in/api/users'),
//     {
//         data: requestBody,
//         headers: {"ACCEPT": "application/json",
//             "content-Type": "application/json"
//         }
     
//     }
//     const responeJson = await response.json(); 
//     expect(response.status()).toBe(201);
//     expect(responeJson.support.url).toBe() 


// }); 