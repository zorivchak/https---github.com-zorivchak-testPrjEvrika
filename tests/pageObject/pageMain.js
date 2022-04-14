const {By,Key,Builder} = require("selenium-webdriver");
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome');


class pageMain{
    constructor(){
        //кнопка підтвердити кукі
        this.btnAgreeCookie = "//button[@class='cookie__button']";
        //кнопка реестрація на головній сторінці
        this.btnReg = "//div[@x-show=\"name!=='user'\"]";
        //пошук товарів
        this.fieldSearch = "//div[@class='m-header__search-input']";
        this.inputSearch = "(//input[@class='search-form__input'])[1]";


        
    }
    

    //метод клікає на кнопку підтвердити кукі
    async click_btnAgreeCookie(){
        await driver.findElement(By.xpath(this.btnAgreeCookie)).click();
      }

    //клік на кнопку реестрація на головній сторінці сайту
    async click_btnReg(){
        await driver.findElement(By.xpath(this.btnReg)).click();
      }
    
    //ввести товар
    async set_fieldSearch(value){
      await driver.findElement(By.xpath(this.fieldSearch)).click();
      await driver.findElement(By.xpath(this.fieldSearch)).sendKeys(value);
    }

}

module.exports = pageMain;