function validateLogin (email, password){
    if (!email || !email.includes('@')){
        return { success: false, message: 'Invalid email'}
    };
    if (!password || password.length < 6){
        return { success: false, message: 'Invalid password'}
    };
    return { success: true, message: 'Success login'}
}

module.exports = { validateLogin };