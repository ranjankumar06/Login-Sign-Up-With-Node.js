const knex=require('knex')({ 
    client:"mysql",
    connection:{
        host:'localhost',
        user:'root', 
        password:'Kumar@123',
        database:'login'
    }
})

knex.schema.createTable('user',(Table)=>{
    Table.increments('id').primary()
    Table.string('name')
    Table.string('email')
    Table.string('password')
}).then((data)=>{
    console.log("User table created successfully...");
}).catch((err)=>{
    console.log("already exiest...");
})

module.exports =knex;