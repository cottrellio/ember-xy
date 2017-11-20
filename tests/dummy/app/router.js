import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('comps', { path: 'components'}, function() {
    this.route('xy-icon');
    this.route('xy-section');
    this.route('xy-part');
  });
});

export default Router;
