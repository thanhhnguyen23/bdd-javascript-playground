console.log('auth.controller.spec.js file has been executed');

let assert = require('assert');
let authController = require('../../controllers/auth.controller');

console.log(authController);

describe('AuthController', function(){
    context('isAuthorized', function(){
        it('should return false if not authorized', function(){
            authController.setRoles(['user']);
            assert.equal(false, authController.isAuthorized('admin'));
        });

        it('should return true if authorized', function() {
            authController.setRoles(['user', 'admin']);
            assert.equal(true, authController.isAuthorized('admin'));
        });
    });

    context('isAuthorizedAsync', function() {
        it('should return false if not authorized', function(done) {
            authController.setRoles(['user', 'admin']);
            authController.isAuthorizedAsync(['user', 'admin']
                                             , function(isAuth) {
                                                 assert.equal(false, isAuth);
                                                 done();
                                             });
        });
    });
});
