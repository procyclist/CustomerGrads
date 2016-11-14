/**
 * Created by bcojocariu on 11/3/2016.
 */
(function(){
    'use strict';

    angular.module('grads')
        .service('customerService',customerService);

    customerService.$inject = ['$http'];
    function customerService($http){
        var service = this;

        service.getAllCustomers = function(){
            var customers = [];
            return $http({
               method: 'GET',
               url: 'components/home/customers.json'
           })
                .then(function(response){
                    return response.data;
                });
        };

        service.saveCustomer = function(customer){
            $http({
                method: 'POST',
                url: 'components/home/customers.json',
                data:{customer: JSON.stringify(customer)}
            })
                .then(function(response){
                    console.log('succes');
                })
        }

    }
})();