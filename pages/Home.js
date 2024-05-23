import { Selector, t } from "testcafe";

class Home {
    constructor() {

        this.subtitle = Selector("div").withText("Tame your work, organize your life");
        this.SigninLink = Selector("a").withText("Already have an account? Log in");
    }
}

export default new Home();