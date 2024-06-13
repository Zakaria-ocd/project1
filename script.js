
let prods=[]
let prodName
let products=[]
let prodsAdded=document.querySelectorAll(".addProd")

document.addEventListener("DOMContentLoaded",()=>{
    let request=new XMLHttpRequest()
    request.open("get","prods.json",true)
    console.log("kjk")
    request.onload=function(){
        if(this.status==200){
            prods=JSON.parse(this.responseText).prods
            console.log(prods)
        }
    }
    request.send()
})

for(let i=0;i<prodsAdded.length;i++){
    console.log("lk")
    prodsAdded[i].addEventListener("click",()=>{
        prodName=prodsAdded[i].id
        console.log(prodName)
        console.log("lk")
        searchProd()
        console.log("lk")
    })
}
function searchProd(){
    let product={}
    prods.forEach((item)=>{
        if(prodName==item.nom){
            product=item
        }
    })
    console.log(localStorage.products)
    if(localStorage.products==undefined){
    products.push(product)
    console.log(products)
    console.log(JSON.stringify(product))
    console.log(localStorage)
    localStorage.products=JSON.stringify(product)
    console.log(localStorage.products)
    }
    else{
        localStorage.products+=","
        localStorage.products+=JSON.stringify(product)
        console.log(localStorage.products)
    }
} 
console.log("kjkjsdkf")
// localStorage.clear()

