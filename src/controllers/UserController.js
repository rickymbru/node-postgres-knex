const knex = require ('../database');

module.exports = {
    async index (req, res) {
        const results = await knex('users');

        return res.json(results);
    },

    async create (req, res, next) {
        const { username } = req.body;
        try{
            const user = await knex('users').insert({
                username
            });

            return res.status(201).send();
        } catch(error){
            next (error)
        }        
    },

    async update (req, res, next) {
        try {
            const {id} = req.params
            const { username } = req.body;

            await knex('users')
            .update({ username })
            .where({ id })

            return res.send();
        }catch (error){
            next (error)
        }
    }, 
    async delete (req, res, next) {
        try {
            const {id} = req.params

            await knex('users')
            .delete()
            .where({ id })

            return res.send();
        }catch (error){
            next (error)
        }
    },     
}