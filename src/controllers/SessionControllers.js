    const connection = require('../database/connection')

    module.exports = {
        async create(request, response) {
        const { id } = request.body;

        const fiquefit = await connection('fiquefit')
            .where('id', id)
            .select('name')
            .first();

        if (!fiquefit) {
            return response .status(400).json({ error: 'No ONG found with this ID '});
            }
        return response.json(fiquefit);
        }
    }