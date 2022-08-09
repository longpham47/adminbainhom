    function SanPhamService(){
        this.getProductList = function () {

            var Promise = axios({
                method: 'get',
                url: 'https://62ee1290a785760e67737090.mockapi.io/Products',
                responseType: 'stream'
            })
            return Promise
    
        }
        this.addProduct = function (sp) {
            console.log("add service", sp);
            
            return axios({
                method: 'post',
                url: 'https://62ee1290a785760e67737090.mockapi.io/Products',
                data: sp 
            });
        }
    
        this.deleteProduct = function (id) {
            console.log("ID XOÁ", id)
           
            return axios({
                method: 'DELETE',
                url: `https://62ee1290a785760e67737090.mockapi.io/Products/${id}`,
    
            })
    
        }
    
    
    
    
        this.getProductDele = function(id){
            return axios({
                method: 'GET',
                url: `https://62ee1290a785760e67737090.mockapi.io/Products/${id}`,
            });
        
        }
    
        this.updateProduct = function (id, sp) {
            return axios({
                method: 'put',
                url: `https://62ee1290a785760e67737090.mockapi.io/Products/${id}`,
                data: sp
            });
        }
    }