console.log('auth.controller.spec.js file has been executed');

let assert = require('assert');
let authController = require('../../controllers/auth.controller');

console.log(authController);

describe('AuthController', ()=>{
    context('isAuthorized', ()=>{
        it('should return false if not authorized', ()=> {
            assert.equal(false, authController.isAuthorized(['user'], 'admin'));
        });

        it('should return true if authorized', ()=> {
            assert.equal(true, authController.isAuthorized(['user', 'admin'], 'admin'));
        });
    });
});
