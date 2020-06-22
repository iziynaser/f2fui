import products from './products'

export default{
    getProducts:()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{                
                resolve(products);
            },5000);
        });
    },
    products:(action,productId)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(productId);
            },1000);
        });
    }

}