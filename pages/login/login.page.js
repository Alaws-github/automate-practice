/*
 * Page object for support page
 */

const { assert } = require("chai")

class loginPage {

    UserNameField(){
        return $('#edit-name');
    }

    PasswordField() {
        return $('#edit-pass');
    }

    LoginBtn() {
        return $('#edit-submit');
    }

}

module.exports = new loginPage();