import React from 'react'

function SortingNumString() {
    const student=[
        {name:"Abel kebede   ",cgpa:3.79,age:23},
        {name:"Makbel kebede ",cgpa:3.89,age:24},
        {name:"Samuel Abera  ",cgpa:3.76,age:22},
         {name:"Manaye Tamiru",cgpa:3.56,age:25},
        {name:"Rediet Abera  ",cgpa:3.98,age:19}]
    // student.sort((a,b)=>a.age-b.age); 
    student.sort((a,b)=>b.cgpa-a.cgpa)  ; 
   const studData=  student.map((stud=><li>{stud.name} &nbsp;{stud.cgpa} &nbsp;{stud.age}</li>))   
  return (
   
    <ul>
        <li className='bg-blue-400'>Student Name &nbsp; GPA &nbsp; Age </li>
         {studData}
    </ul>
 
  )
}

export default SortingNumString