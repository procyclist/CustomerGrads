describe("testing home controller", function(){
    beforeEach(module('grads'));
    var $controller;
    var scope;
    var customerService;

    beforeEach(inject(function(_$controller_, _$rootScope_, _$location_, _$injector_, _customerService_){
        $controller = _$controller_;
        scope = _$rootScope_;
        customerService = _customerService_;
        location = _$location_;
        httpBackend = _$injector_.get('$httpBackend');


        httpBackend
            .whenGET(/index\/.*\//)
            .respond(200, {});

    }));

    describe("check controller is initialized", function(){

        it("checks variables to be defined",  function(){
            var homeController = $controller('HomeController',{$scope: scope});
            expect(scope.name).toBeDefined();
            expect(scope.hideAddCustomer).toBeDefined();
            expect(scope.showAddCustomer).toBeDefined();
            expect(scope.save).toBeDefined();
            expect(scope.submit).toBeDefined();
        });

        it("show customer form",  function(){
            var homeController = $controller('HomeController',{$scope: scope});
            scope.showAddCustomer();
            expect(scope.showAddCustomerForm).toBe(true);
        });

        it("hide customer form",  function(){
            var homeController = $controller('HomeController',{$scope: scope});
            scope.hideAddCustomer();
            expect(scope.showAddCustomerForm).toBe(false);
        });

        it("checks name to have value",  function(){
            var homeController = $controller('HomeController',{$scope: scope});
            expect(scope.name).toEqual("Eu");
        });

        //testing service
        it("should retunr customers", function(done){
            var responseData = [{"name": "Ion","company": "Endava", "customRefference": "angajat", "email": "ion@endava.com"}];
            httpBackend.expectGET("components/home/customers.json");
            httpBackend.when('GET', /\.html$/).respond(200, '');
           httpBackend.whenGET("components/home/customers.json")
               .respond(200, responseData);

            customerService.getAllCustomers().then(function(data){
                expect(data.length).toEqual(responseData.length);
                done();
            });

            httpBackend.flush();

        })
    });

    describe('state go payouts', function() {
        beforeEach(inject(function($state) {
            spyOn($state, 'go');
            // or
        }));


        it('should go to payouts', inject(function($state){
            var homeController = $controller('HomeController',{$scope: scope});
            scope.goToPayouts();
            // Call something that eventually hits $state.go
            expect($state.go).toHaveBeenCalled();
            expect($state.go).toHaveBeenCalledWith('payouts');
            // ...
        }));
    })
})