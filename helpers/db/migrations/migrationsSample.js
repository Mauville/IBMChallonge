/*
Quick installation guide:
1. Npm install kinex
2. Prove installation by using    kinex --version
3. If not working, try      npx install kinex
4. Make a migration with    npx knex migrate:make [NameOfTheMigration]
5. Copy this in the generated file
*/


exports.up = function(knex, Promise){
    return knex.schema.createTable('users', function(table){
        table.increments();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.timestamp('created_at').defaultTo(knx.fn.now());
        table.timestamp('updated_at').defaultTo(knx.fn.now());
    })
    .createTable('[TABLE NAME]', function(table){
        table.increments();
        table.timestamp('created_at').defaultTo(knx.fn.now());
        table.timestamp('updated_at').defaultTo(knx.fn.now());
        table.string('title').notNullable();
        table.boolean('completed').notNullable().defaultTo(false);
        table.integer('user_id').referebces('id').inTable('users');
    }); 
};

exports.down= function(knex, Promise){
    return knex.schema.dropTable('[TABLE NAME]').dropTable('[USERS TABLE]')
};