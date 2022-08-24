import Phone from "../models/SanPham.js";
import PhoneService from "../services/SanPhamService.js";
 const phoneSer  = new PhoneService();


let ShowPhoen = (phoneArray)=> {
    let content ="";
    phoneArray.map((phone) => {
        let {name, price, screen, backCamera, frontCamera, img, desc, type} = phone;
        content += 
        `
        
        <div class='card'> 
        <div class='top-bar'>      
            <i class='fab fa-apple'></i>   
            <em class="type">${type}</em>
        </div>
        <div class='img-container'>
            <img class='product-img' src='${img}' alt='' />  
  
        </div>
       
        <div class='details'>  
            <div class='name-fav'>    
                <strong class='product-name'>${name}</strong>   
                <button class='heart'><i class='fas fa-heart'></i></button> 
            </div>   
            <div class='Parameter'>      
                     
                <p>${desc}</p>  
                <p>${screen}</p>
                <p>${backCamera}</p>
                <p>${frontCamera}</p>
            </div>  
           
            <div class='purchase'>  
                <p class='product-price'>$ ${price}</p>  
                <button onclick="" class="btn btn-info">Add</button>
                
              
            
            </div> 
           
            
        </div>
            
        
     </div>


        `
    })
    document.querySelector("#IDshow").innerHTML= content;

}



let getList = () =>{
    phoneSer.getFhoneList()
    .then((result) => {
            console.log(result.data)
            ShowPhoen(result.data)
     })
    .catch((error) => {
        console.log(error)

    })
}
getList();