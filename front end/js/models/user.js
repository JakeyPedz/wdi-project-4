angular
  .module('Qrowded')
  .factory('User', User);

User.$inject = ['$resource', 'API'];
function User($resource, API) {

  return $resource(
    API+'/users/:id',
    {id: '@id'},
    { 'get':       { method: 'GET' },
      'save':      { method: 'POST' },
      'query':     { method: 'GET', isArray: true},
      'remove':    { method: 'DELETE' },
      'delete':    { method: 'DELETE' },
      'login': {
        url: API + '/login',
        method: "POST"
      },
      'register': {
        url: API + '/register',
        method: "POST"
      }
    }
  );
}