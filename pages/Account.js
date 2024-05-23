import { Selector, t } from "testcafe";

class User {
    constructor() {
        this.AccountHeader = Selector("#qa-HOME_TITLE").withText("Good evening!");
        this.Home = Selector("#qa-HOME_CUSTOMIZE_BTN");
    }

    get noteSearch() {
        return Selector("input[id ='qa-SEARCH_INPUT_DROPDOWN']");
    }

    async search(note) {
        await t
            .typeText(this.noteSearch, note)
            .wait(3000)
            .pressKey("enter");
    }

}

export default new User();