let lst = [ { id: 1, name: "John" }, { id: 2, name: "Jane" }, { id: 3, name: "Paul" } ]

// 요소 추가
// let newLst = []
// for(const item of lst){
//     newLst.push(item)
// }
// console.log({id:4, name: "Ken"})
// console.log(lst)
// console.log(newLst)
// console.log(lst === newLst)

// 요소 변경
let updatedId = 2
let updatedName = "Smith"
// let updatedLst = lst.map(item => {
//     if(item.id === updatedId) {
//         item = { ...item, name: updatedName }
//     }
//     return item
// })

// 요소 삭제
let removedId = 1
let removedLst = lst.filter(item => {
    return item.id !== removedId
})
