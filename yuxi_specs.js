describe("This should send an email", function () {

    it("This open the google browser", function () {
        browser.get("https://www.google.com/");
    });

    it("This search for gmail", function () {

        var campoBuscar = element(by.name("q"));
        campoBuscar.sendKeys("gmail");

        campoBuscar.sendKeys(protractor.Key.ENTER);

    });

    it("Should enter to gmail link", function () {

        var gmailink = element(by.css('[href="https://www.google.com/gmail/"]'));
        gmailink.click();

        var loginlink = element(by.xpath('/html/body/div[2]/div[1]/div[5]/ul[1]/li[2]/a'));
        loginlink.click();

        browser.pause("4000");

    });

    describe("This can send an email", function () {

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

            var mail = element.all(by.name('identifier')).first();
            mail.sendKeys(user.email);

            mail.sendKeys(protractor.Key.ENTER);

            //var botonNext = element(by.id("identifierNext"));
            //botonNext.click();

        });

        it("This set the key", function () {

            var clave = element.all(by.name("password")).first();
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

            var sentMail = element.all(by.className("b8 UC")).first();
            sentMail.click();

        });
    });

});