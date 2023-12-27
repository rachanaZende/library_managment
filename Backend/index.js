const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

const pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database:"library"
})
app.get('/bookList',(req,res)=>{
    pool.getConnection((error,connection)=>{
        if(error){
            console.log(error)
        }else{
            var sql ="select * from book"
            connection.query(sql,(error,data)=>{
                if(error){
                    console.log(error)
                   return res.status(500).send(error)
                }else{
                    console.log("data get ..")
                   return res.json(data)
                }
            })
        }
    })
})
app.post('/bookList',(req,res)=>{


pool.getConnection((error,connection)=>{
    if(error){
        console.log(error)
    }else{
        console.log("data base connection is successfull")
        console.log(connection)
        //var sql = "create database library"
        //var sql = "create table book(id INT AUTO_INCREMENT PRIMARY KEY,booktitle varchar(255),bookauther varchar(255),bookpublication varchar(255),bookprice varchar(255))"
        var sql = "insert into book(btitle,bauther,bpublication,bprice) values (?,?,?,?)"
        const values = [
            req.body.btitle,
            req.body.bauther,
            req.body.bpublication,
            req.body.bprice
        ]
        connection.query(sql, values,(error,data)=>{
            if(error){
                console.log(error)
              return  res.status(500).send(error)
            }else{
                //console.log("database is created..!!!")
                //console.log("table created..!!")
                console.log("data inserted..!!")
                return res.json(data)
            }
        })
    }
})
})

app.get('/booklist/get/:id',(req,res)=>{
    const bookId = req.params.id
    pool.getConnection((error,connection)=>{
        if(error){
            console.log(error)
            return res.status(500).send(error)
        }else{
            var sql = "select * from book where id = ?"
            connection.query(sql,[bookId],(error,result)=>{
                   if (error){
                    console.log(error)
                    return res.status(500).send(error)
                   }else{
                    if(result.length > 0){
                        console.log(`data retrived successfully for id ${bookId}`)
                        res.status(200).json(result[0])
                    }else{
                        console.log("no data found for id")
                        res.status(404).send("No data found for inserted id"+bookId)

                    }
                   }
            })
        }
    })
})

app.put('/bookList/update/:id',(req,res)=>{
    const bookId = req.params.id
    pool.getConnection((error,connection)=>{
        if(error){
            console.log(error)
            return res.status(500).send(error)
        }else{
            var sql = "UPDATE book SET btitle = ?,bauther = ?,bpublication = ?,bprice = ? WHERE id =?"

            const values = [
                req.body.btitle,
                req.body.bauther,
                req.body.bpublication,
                req.body.bprice,
                bookId 
            ]
            connection.query(sql,values,(error,data)=>{
                if(error){
                    console.log(error)
                    return res.status(500).send(error)
                }else{
                    res.json(data)
                }
            })
        }
    })
})

app.delete('/bookList/delete/:id',(req,res)=>{
    const bookId = req.params.id
    pool.getConnection((error,connection)=>{
        if(error){
            console.log(error)
            return res.status(500).send(error)
        }else{
            var sql = "Delete from book where id = ?"
            connection.query(sql,[bookId],(error,data)=>{
                if(error){
                    console.log(error)
                    return res.status(500).send(error)
                }else{
                    console.log("data deleted..."+ bookId)
                   return res.json(data)
                }
            })
        }
    })
})
app.listen(7001 ,()=>{
    console.log("7001 port is running...")
})