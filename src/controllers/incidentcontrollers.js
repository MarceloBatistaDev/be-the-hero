    const connection = require('../database/connection');
    
    module.exports = {
      async index(request,response) {
      const { page = 1 } = request.query;

      const [count] = await connection('incidents').count();

      

        const incidents = await connection('incidents')
        .join('fiquefit', 'fiquefit_id','=', 'incidents.fiquefit_id')
        .limit(5)
        .offset((page -1)* 5)
        .select([
          'incidents.*',
          'fiquefit.name',
          'fiquefit.email',
          'fiquefit.whatsapp',
          'fiquefit.city',
          'fiquefit.uf'
        ]);

      response.header('x-Total-Count', count['count(*)']);  


        return response.json(incidents);

      },

      

      async create(request, response){
          const { title, description, value } = request.body;
          const fiquefit_id = request.headers.authorization;

          const [id] = await connection('incidents').insert({
              title,
              description,
              value,
              fiquefit_id,
          });

          return response.json({ id });
      },

      async delete(request, response) {
        const { id } = request.params;
        const fiquefit_id = request.headers.authorization;
        
        const incident = await connection('incidents')
          .where('id', id)
          .select('fiquefit_id')
          .first();

          if (incident.fiquefit_id !== fiquefit_id) {
            return response.status(401).json({ error: '0peration not permitted.' })
          }

          await connection('incidents').where('id', id).delete();

          return response.status(204).send();
      }

    };