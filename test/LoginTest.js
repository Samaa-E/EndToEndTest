import { ClientFunction } from "testcafe";
import homepage from "../pages/Home";
import registerpage from "../pages/Register";
import loginpage from "../pages/Login";
import accounpage from "../pages/Account";

const URL = "https://evernote.com/";

const getURL = ClientFunction(() => window.location.href);

fixture("Login Fixture")
    .page(URL);

test("Assert Home Page Test", async t => {
    await t
        .setTestSpeed(1)
        .expect(getURL()).eql(URL)
        .takeScreenshot()
        .expect(homepage.subtitle.exists).ok();
});

//write test.skip or test.only to test each testcase
test("User Login Page test 1", async t => {
    await t
        .setTestSpeed(1)
        .click(homepage.SigninLink)
        .typeText(loginpage.Email, "abc23@gmail.com")
        .click(loginpage.Continue)
        .typeText(loginpage.Password, "abc1234!")
        .click(loginpage.LoginButton)
        .takeScreenshot()
        .wait(200);
});

test("User Login Page test 2", async t => {
    await t
        .setTestSpeed(1)
        .click(homepage.SigninLink)
        .click(loginpage.Continue)
        .takeScreenshot()
        //.typeText(loginpage.Password, "Samasimo*m77")
        //.click(loginpage.LoginButton)
        .wait(200);

});
