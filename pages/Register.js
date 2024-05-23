import { Selector, t } from "testcafe";

class Register {
    constructor() {
        this.Email = Selector("#email");
        this.Password = Selector("#passwordInput");
        this.RegisterButton = Selector("#register");
        this.SuccessfullMessage = Selector("div.result").withText("Welcome to Evernote!");
    }
}

export default new Register();