let prods="["+localStorage.products+"]"
prods=JSON.parse(prods)
let prodSupprimé=""
let minus=document.querySelectorAll(".minusQuantity")
let plus=document.querySelectorAll(".plusQuantity")
let inputsQuantity=document.querySelectorAll(".inputQuantity")
let totalPrice=document.querySelectorAll(".totalPrice")
function afficher(){
    let trs=""
    for(let i=0;i<prods.length;i++){
        trs+=`<tr>
        <td><img src="${prods[i].image}" alt=""></td>
        <td>${prods[i].nom}</td>
        <td>$${prods[i].price}.00</td>
        <td class="quantity"><button class="minusQuantity"><i class="fa-solid fa-minus"></i></button>
        <input class="inputQuantity" type="text" value="1" min="1">
        <button class="plusQuantity"><i class="fa-solid fa-plus"></i></button></div>
        </td>
        <td class="totalPrice">49.00</td>
        <td><button class="bgRemove" onclick=supprimer(event) id=${i}><i class="fa-solid fa-xmark"></i></button></td>
        </tr>`
    }
    document.querySelector('tbody').innerHTML=trs
    document.querySelector(".continueShopping").addEventListener("click",()=>{
        localStorage.clear()
        location.reload()
    })
    for(let i=0;i<minus.length;i++){
        minus[i].addEventListener("click",()=>{
            if(Number(inputsQuantity[i].value)>1){
                inputsQuantity[i].value=Number(inputsQuantity[i].value)-1
                totalPrice[i].textContent=Number(totalPrice[i].textContent)/2
            }
        })
    }   
    for(let i=0;i<plus.length;i++){
        plus[i].addEventListener("click",()=>{
                inputsQuantity[i].value=Number(inputsQuantity[i].value)+1
                totalPrice[i].textContent=Number(totalPrice[i].textContent)*2
        })
    }

}
afficher()
function supprimer(event){
    let prodSupprimé=prods[event.currentTarget.id].nom
    prods=prods.filter((item)=>{
        return item.nom!=prodSupprimé
    })
    console.log(prods)
    localStorage.products=""
    prods.forEach((item,index)=>{   
        localStorage.products+=JSON.stringify(item)
        if(index!=prods.length-1){
            localStorage.products+=","
        }
    })
    console.log(prods)
    console.log(localStorage.products)
    afficher()
    
}
console.log("kjkjsdkf")
