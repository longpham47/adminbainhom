// function SanPhamService(){
//     this.getProductList = function () {

//         var Promise = axios({
//             method: 'get',
//             url: 'https://62ee1290a785760e67737090.mockapi.io/products',
//             responseType: 'stream'
//         })
//         return Promise

//     }
//     this.addProduct = function (sp) {
//         console.log("add service", sp);

//         return axios({
//             method: 'post',
//             url: 'https://62ee1290a785760e67737090.mockapi.io/products',
//             data: sp 
//         });
//     }

//     this.deleteProduct = function (id) {
//         console.log("ID XOÁ", id)

//         return axios({
//             method: 'DELETE',
//             url: `https://62ee1290a785760e67737090.mockapi.io/products/${id}`,

//         })

//     }




//     this.getProductDele = function(id){
//         return axios({
//             method: 'GET',
//             url: `https://62ee1290a785760e67737090.mockapi.io/products/${id}`,
//         });

//     }

//     this.updateProduct = function (id, sp) {
//         return axios({
//             method: 'put',
//             url: `https://62ee1290a785760e67737090.mockapi.io/products/${id}`,
//             data: sp
//         });
//     }
// }


export default class PhoneService {
    getFhoneList = () => {
        return axios({
            method: 'get',
            url: 'https://62e774d193938a545bd1f624.mockapi.io/BaiTap',
            
        })
    }   
}