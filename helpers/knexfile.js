module.exports={
    development: {
        client: 'pg',
        connection: 'postgress://localhost/8000',
        migrations:{
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds',
        },
    },
    production: {
        client: 'pg',
        //connection: proccess.env.DATABASE_URL,
        connection: 'postgress://localhost/8000', //Delete this line, I just used it to create the migrations and seeds
        migrations:{
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds/production',
        },
    },
};