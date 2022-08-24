    function SanPhamService(){
        this.getProductList = function () {

            var Promise = axios({
                method: 'get',
                url: 'https://62e774d193938a545bd1f624.mockapi.io/baitap',
                responseType: 'stream'
            })
            return Promise
    
        }
        this.addProduct = function (sp) {
            console.log("add service", sp);
            
            return axios({
                method: 'post',
                url: 'https://62e774d193938a545bd1f624.mockapi.io/baitap',
                data: sp 
            });
        }
    
        this.deleteProduct = function (id) {
            console.log("ID XOÁ", id)
           
            return axios({
                method: 'DELETE',
                url: `https://62e774d193938a545bd1f624.mockapi.io/baitap/${id}`,
    
            })
    
        }
    
    
    
    
        this.getProductDele = function(id){
            return axios({
                method: 'GET',
                url: `https://62e774d193938a545bd1f624.mockapi.io/baitap/${id}`,
            });
        
        }
    
        this.updateProduct = function (id, sp) {
            return axios({
                method: 'put',
                url: `https://62e774d193938a545bd1f624.mockapi.io/baitap/${id}`,
                data: sp
            });
        }
    }