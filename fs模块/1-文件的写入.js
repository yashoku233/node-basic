// 导入fs模块
const fs = require('fs');
console.log(fs);

// fs.writeFile('./new.text',`三人行，必有我师焉`, err=>{
//     if(err){
//         console.log('写入失败')
//         return
//     }
//     console.log('写入成功')
// })

const list = [
    'txt1',
    'txt2',
]
list.forEach((i) => {
  fs.writeFileSync(`./${i}.txt`,'test');  
})