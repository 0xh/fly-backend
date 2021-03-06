// Initializes the `plan` service on path `/plan`
const createService = require('feathers-sequelize');
const createModel = require('../../models/plan.model');
const hooks = require('./plan.hooks');
const filters = require('./plan.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'plan',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/plan', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('plan');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
