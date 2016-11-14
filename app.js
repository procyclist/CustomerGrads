/**
 * Created by bcojocariu on 11/3/2016.
 */
(function(){
    'use strict';

    angular.module('grads',['ui.router'])
        .config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider, $stateProvider){
            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home',{
                    url: '/home',
                    //template: '<h1>HomePage</h1>',
                    templateUrl: 'app/components/home/home.html',
                    controller: 'HomeController'
                })

                .state('plans',{
                    url: '/plans',
                    template: '<h2>Planurile</h2>'
                })

                .state('payments',{
                    url: '/payments',
                    template: '<h2>Payments</h2>'
                })

                .state('payouts',{
                    url: '/payouts',
                    template: '<h2>Payouts</h2>'
                })

        }])

})();