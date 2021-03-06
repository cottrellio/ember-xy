import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('comps', { path: 'components' }, function() {
    this.route('xy-icon');
    this.route('xy-section');
    this.route('xy-part');
    this.route('xy-drawer');
    this.route('xy-layout');
    this.route('xy-grid');
    this.route('xy-grid-item');
    this.route('xy-collapsible-nav');
    this.route('xy-menu-icon');
  });
  this.route('application/index', { path: '/' }, function() {});
});

export default Router;
