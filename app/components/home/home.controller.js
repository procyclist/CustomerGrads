/**
 * Created by bcojocariu on 11/3/2016.
 */
(function(){
    'use strict';

    angular.module('grads')
        .controller('HomeController',HomeController);

    HomeController.$inject=['$scope','customerService'];

    function HomeController($scope,customerService){
            $scope.name = "Eu";
          //  $scope.customers = null;
            customerService.getAllCustomers().then(function(response){
                console.log(response.data);
                $scope.customers = response.data;
                console.log("din functie:", $scope.customers)
            });

        $scope.showAddCustomer = function(){
            $scope.showAddCustomerForm = true;
        };

        $scope.hideAddCustomer = function(){
            $scope.showAddCustomerForm = false;
        };


         $scope.save = function(addedCustomer){
            console.log(addedCustomer);
            var custom = [];
            angular.copy(addedCustomer, custom);
            $scope.customers.push(custom);
            console.log($scope.customers);
         };

        // $scope.submit = function(customer){
        //     console.log(customer);
        //     $scope.customers.push(customer);
        //     console.log($scope.customers);
        //    // customerService.saveCustomer(customer);
      //  }
    }

})();
