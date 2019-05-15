describe("This Open the mail box", function () {
    var user = {
        email: 'ecarram1989@gmail.com',
        pass: 'ElMundial123',
        yuxiMail: "cramirez514@gmail.com",
        mailSubject: "test",
        mailBody: "This is a test",

    }

    it("This open the google browser", function () {
        browser.get("https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin");
    });

    it("This set the user", function () {

        var mail = element(by.name('identifier'))
        mail.sendKeys(user.email);

        mail.sendKeys(protractor.Key.ENTER);

        //var botonNext = element(by.id("identifierNext"));
        //botonNext.click();

    });

    it("This set the key", function () {

        var clave = element(by.name("password"));
        clave.sendKeys(user.pass);

        clave.sendKeys(protractor.Key.ENTER);

        //var botonAceptar = element(by.id("passwordNext"));
        //botonAceptar.click();

    });

    it("This click on new mail", function () {

        var newMail = element.all(by.className("T-I J-J5-Ji T-I-KE L3")).first();
        newMail.click();

    });

    it("This will send the mail", function () {

        var toMail = element.all(by.className("vO")).first();
        toMail.sendKeys(user.yuxiMail);

        var subject = element.all(by.className("aoT")).first();
        subject.sendKeys(user.mailSubject);

        var textbox = element.all(by.className("Am Al editable LW-avf")).first();
        textbox.sendKeys(user.mailBody);

        var sendButton = element.all(by.className("T-I J-J5-Ji aoO v7 T-I-atl L3")).first();
        sendButton.click();

        browser.sleep('8000');

    });


    it("This will see the sent email", function () {

        var sentMail = element.all(by.className("ag a8k")).first();
        sentMail.click();

    });
});