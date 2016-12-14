angular.module('Instagram', ['ui.router', 'ngMessages', 'satellizer'])
  .config(function($stateProvider, $urlRouterProvider, $authProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .state('photoShow', {
        url: '/photo/:id',
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })

    $authProvider.loginUrl = 'http://localhost:3000/auth/login';
    $authProvider.signupUrl = 'http://localhost:3000/auth/signup';
    $authProvider.oauth2({
      name: 'instagram',
      url: 'http://localhost:3000/auth/instagram',
      redirectUri: 'http://localhost:8000/',
      clientId: '16535d4b34a34117834b8a19704e0ad7',
      requiredUrlParams: ['scope'],
      scope: ['likes'],
      scopeDelimiter: '+',
      authorizatioinEndpoint: 'https://api.instagram.com/oauth/authorize'
    });
  });
