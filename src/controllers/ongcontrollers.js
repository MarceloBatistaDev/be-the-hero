const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response)  {
        const fiquefit = await connection('fiquefit').select('*');

        return response.json(fiquefit);
    },
    async create(request, response){
        const { name, email, whatssap, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await Connection('fiquefit').insert({
            id,
            name,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
        }
    };