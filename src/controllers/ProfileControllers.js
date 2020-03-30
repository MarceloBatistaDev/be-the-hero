const connection = require('../database/connection');


module.exports = {
    async index(request, response) {
        const fiquefit_id = request.headers.authorization;
    
        const incidents = await connection('incidents')
          .where('fiquefit_id', fiquefit_id)
          .select('*');

        return response.json(incidents);  
    }
}