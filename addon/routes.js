import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('index', { path: '/' });
  this.route('buttons');
  this.route('rv-show', {path: "/rv-rental/show/:rental_id"});
});
