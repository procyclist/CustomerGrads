/**
 * Created by bcojocariu on 11/3/2016.
 */
(function(){
    'use strict';

    angular.module('grads')
        .controller('HomeController',HomeController);

    HomeController.$inject=['$scope','customerService', '$state','$rootScope', '$stateParams'];

    function HomeController($scope,customerService, $state, $rootScope, $stateParams){

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
            $scope.name = "Eu";
          //  $scope.customers = null;
            customerService.getAllCustomers().then(function(data){
                $scope.customers = data;
                console.log("din functie:", $scope.customers)
            });

        $scope.showAddCustomer = function(){
            $scope.showAddCustomerForm = true;
        };

        $scope.hideAddCustomer = function(){
            $scope.showAddCustomerForm = false;
        };

        $scope.goToPayouts = function(){
            $state.go('payouts');
        };


        $scope.save = function(customer){
            console.log(customer);
            var cust= [];
            angular.copy(customer, cust);
            $scope.customers.push(cust);
        };

        $scope.submit = function(customer){
            console.log(customer.name);
           // customerService.saveCustomer(customer);
        }
    }

})();