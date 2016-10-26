// this file takes care of all the routing in app //

angular.module('roomerApp', ['ui.router']);

angular.module('roomerApp').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider.state('intro', {
            url: '/',
            templateUrl: 'views/intro.html'

        })
    .state('main', {
            url: '/dashboard',
            templateUrl: 'views/main.html',
            controller: mainCtrl,
            controllerAs: 'ctrl'
        })
        .state('room', {
/* I have used name of room as id. This is an incorrect way to approch things for a big app.
   I thought of going with 6 digit alphanumeric hashes as ids. But because of some other 
   reasons I chose this to work in our case. */
            url: '/room/:roomid',  
            templateUrl: 'views/room.html',
            controller: roomCtrl,
            controllerAs: 'ctrl'
        })
});

