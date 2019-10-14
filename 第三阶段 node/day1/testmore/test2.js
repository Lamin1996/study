const fs = require('fs')

// fs.readFile('./test1.js',function(err,data){
//     if (err) {
//         console.log('读取错误')
//     }
//     console.log(data.toString())
// })

// const data = fs.readFileSync('./test1.js')
// console.log('读取结果',data.toString());
// console.log('aaa')


// fs.writeFile('./test1.TXT','测试内容',function(err){
//     if(err){
//         throw err;
//     }
//     console.log('写入文件成功!')
// })

// fs.readFile('./test1.TXT',function(err,data){
//     if (err) throw err;
//     var readRst = data;
//     fs.writeFile('./test1.TXT','再次写入内容',function(err){
//         if(err)throw err;
//         console.log('写入成功!')
//     })
// })

// fs.unlink('./test3.js',function(err){
//     if (err) throw err;
//     console.log('删除成功')
// })


// fs.readdir('./',function(err,files){
//     if (err) throw err;
//     console.log(files);
// })

// fs.mkdir('../测试1',function(err){
//     if (err) throw err;
//     console.log('创建成功')
// })

fs.rmdir('../测试1',function(err){
    if (err) throw err;
    else console.log('删除成功')
})