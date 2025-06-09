// function User(name,score){
//   this.name=name
//   this.score=score
// }
// User.prototype.increment=function(){
// // console.log(`score is ${this.score}`)
// this.score++
//   console.log(this.score)
// }
// const user1=new User("afroj",0)

// user1.increment()
// console.log(User.prototype)
// const hero=["python","java"]
// const heroPower={
//   thor:"hammer",
//   spider:"sling",
//   getSP:function(){
//     console.log(`spidy power is ${this.spider}`)
//   }
// }
// Object.prototype.afroj=function(type){
//   console.log(`afroj is prasent in ${type}`)
// }
// heroPower.afroj("object")
// hero.afroj("array")
// heroPower.getSP()
//inheritence
const teacher={
  makeVideo:true
}
const techingSupport={
  isAva:false
}
const TASupport={
  make:"js assignmemt",
  fullTime:true,
 // __proto__:teacher
  
}
//techingSupport.__proto__=teacher
//console.log(TASupport["makeVideo"])
// modern
Object.setPrototypeOf(teacher,techingSupport)

console.log(teacher)

let name="coderafroj   "
String.prototype.trueLength=function(){
  console.log(this)
  console.log(`true length is ${this.trim().length}`)
}
name.trueLength()
"chaiorcode ".trueLength()