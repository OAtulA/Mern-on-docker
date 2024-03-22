
let map_socket_user =new Map();

map_socket_user.set('ola', '112r')
map_socket_user.set("huma", "nis1")
map_socket_user.set("jack", "nis2")

map_socket_user.forEach((value, key) => {
    console.log(key,":", value)
})

let arr =[131,423,5453,45345]

console.log()
console.log('Now for the array')
arr.forEach((value,index)=>{
    console.log(index,value)
})