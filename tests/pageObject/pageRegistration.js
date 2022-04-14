const pageMain = require('./pageMain.js');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome');

class pageReg extends pageMain{
    constructor(){
        super();
        //кнопка реестрації безпосередньо для відкриття форми реестрації
        this.btnRegStart = "//button[@class='button button_three button_fs_xl button_full']";
        //поле імя
        this.formName = "//div[@class='form-control']//input[@name='name']";
        //поле прізвище
        this.formLastName = "//div[@class='form-control']//input[@name='surname']";
        //поле телефон
        this.formPhone = "//div[@class = 'popup__view']//div[@class = 'form-control']//input[@name='phone']";
        //поле Поштова скринька
        this.formEmail = "//div[@class='form-control']//input[@name='email']";
        //поле пароль
        this.formPass1 = "(//div[@class='form-control']//input[@type='password'])[1]";
        //поле підтвердження пароля
        this.formPass2 = "(//div[@class='form-control']//input[@type='password'])[2]";
        //приймаю політику конф. // поки не працює
        this.cbxAgree = "//label[@class='input-choice']//input[@type='checkbox']";
        //основна і остання кнопка реестрація
        this.btnRegFinish = "//button[@class='button button_full button_one']";
    }

    //метод клікає на кнопку почати реестрацію
    async click_btnRegStart(){
        await driver.findElement(By.xpath(this.btnRegStart)).click();
        await driver.sleep(500);
    }

    //ввести імя
    async set_name(value){
        await driver.findElement(By.xpath(this.formName)).sendKeys(value);
        await driver.sleep(500);
    }

    //ввести прізвище
    async set_lastName(value){
        await driver.findElement(By.xpath(this.formLastName)).sendKeys(value);
        await driver.sleep(500);
    }

    //ввести номер
    async set_phone(value){
        //клік для активації
        await driver.findElement(By.xpath(this.formPhone)).click();
        await driver.findElement(By.xpath(this.formPhone)).sendKeys(value);
        await driver.sleep(500);
    }

    //ввести поштову скриньку
    async set_email(value){
        await driver.findElement(By.xpath(this.formEmail)).sendKeys(value);
        await driver.sleep(500);
    }

    //ввести пароль
    async set_pass1(value){
        await driver.findElement(By.xpath(this.formPass1)).sendKeys(value);
        await driver.sleep(500);
    }

    //ввести підтвердження пароля
    async set_pass2(value){
        await driver.findElement(By.xpath(this.formPass2)).sendKeys(value);
        await driver.sleep(500);
    }

    //метод клікає на галочку - приймаю умови
    async click_cbxAgree(){
        await driver.findElement(By.xpath(this.cbxAgree)).click();
        await driver.sleep(500);
    }

    //метод клікає на кнопку закінчити реестрацію
    async click_btnRegFinish(){
        await driver.findElement(By.xpath(this.btnRegFinish)).click();
        await driver.sleep(500);
    }
}
/*
function fgf(){
    let a = new pageReg();
    a.click_btnAgreeCookie();

}
*/


module.exports = pageReg;