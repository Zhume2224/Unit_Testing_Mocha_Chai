const { validateLogin } = require('./login');

const { expect, assert } = require('chai');

describe('check login is valid', ()=>{
    xit('it should throw an error when the email field is empty', ()=>{
    const result = validateLogin('','asdf45');
    expect (result.success).to.be.false;
    expect (result.message).to.equal('Invalid email')

    });

   xit('throw am error if the email does not contain "@"', ()=>{
        const result = validateLogin('whdif.com','asdfgh');
        expect (result.success).to.be.false;
        assert.equal(result.message, 'Invalid email')
    })

})
