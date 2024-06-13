a=[1,4,5,17]
b=JSON.stringify(a)
console.log(b)
window.localStorage.id=b
console.log(window.localStorage)
// window.localStorage.removeItem("id")
console.log(JSON.parse(window.localStorage.id))
localStorage.clear()
console.log(window.localStorage.id)
console.log(localStorage)
let s=[{nom:"sd",pe:"lk",n:14},
{nom:"ml",pe:"lsdsk",n:12},
{nom:"^po",pe:"q,s",n:19}]
s=[...s]
console.log(s)
