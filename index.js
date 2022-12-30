// reduce and map
let arr1=[2,4,6,8,1,3,5,7,9]
let arr2=arr1.map((e)=>{
    return e+2
})
console.log(arr1)
console.log(arr2)
// reduce
let multi=arr1.reduce((acc,cur)=>{
    return acc*cur
},1)
console.log(multi)
// *********************
// reduce in string
let fruits=["apple","gouva","orange","orange","mango","apple"]

let samefruits=fruits.reduce((a,b)=>{
    if(a[b]){
        a[b]+=1
    }else{
        a[b]=1
    }
    return a;
     
},{})
console.log(samefruits)

// *************

// async function abc(){
//     await towait();
//     let promises= new Promise((res,rej)=>{

//     })
// }

let a=10
let b=12
let c=a
let d=b
let i=1
while(i<10){
    if(i===9){
        console.log(a,"inside ",b)
    }else{
        
        a++;
        b++;
    }
    i++;

}

console.log(c,"outside",d)
// map filter forEach
const students=[
    {name:"absar",grade:96,couple:"A"},
    {name:"anam",grade:84,couple:"A"},
    {name:"shakif",grade:98,couple:"B"},
    {name:"saba",grade:86,couple:"B"},
    {name:"ronny",grade:94,couple:"I"},
    {name:"rashmika",grade:88,couple:"I"},
    {name:"abhishek",grade:96,couple:"E"},
    {name:"simriti",grade:82,couple:"E"}
]
//map
let upperNames=students.map((e)=>{
   return e.name.toUpperCase()
})
console.log(upperNames)
// forEach
students.forEach((e)=>{
    console.log(e.name.toUpperCase() +" in love.")
})
// filter
let highGrade=students.filter((e)=>{
    return e.grade>=90;
})
console.log(highGrade)

let s=36,f=98,year=0;
while(s<=100){
    if(f==s*2){
        console.log(year)
        break;
    }else{
        s++;f++;year++
    }
}