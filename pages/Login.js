import { Selector, t } from "testcafe";

class Login {
    constructor() {
        this.Email = Selector("#username");
        this.Continue = Selector("#loginButton")
        this.Password = Selector("#password");
        this.LoginButton = Selector("#loginButton");
    }
}

export default new Login();