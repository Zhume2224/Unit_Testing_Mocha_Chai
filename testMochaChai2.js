//this version just uses mocha
const assert = require('assert');

function validateLogin (email, password){
    if (!email || !email.includes('@')){
        return { success: false, message: 'Invalid email'}
    };
    if (!password || password.length < 6){
        return { success: false, message: 'Invalid password'}
    };
    return { success: true, message: 'Success login'}
}
    
describe('check login is valid', ()=>{
  
    it('it should throw an error when the email field is empty', ()=>{
    const result = validateLogin('','asdf45');
    assert.strictEqual(result.success, false);
    assert.strictEqual(result.message, 'Invalid email')
    });

   it('throw am error if the email does not contain "@"', ()=>{
        const result = validateLogin('whdif.com','asdfgh');
        assert.strictEqual(result.success, false);
        assert.strictEqual(result.message, 'Invalid email')
    })

})
