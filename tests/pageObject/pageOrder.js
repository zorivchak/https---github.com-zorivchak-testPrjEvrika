const pageMain = require('./pageMain.js');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome');

class pageOrd extends pageMain{
    constructor(){
        super();
        this.btnSearch = "(//button[@class='search-form__button'])[1]";
        //юудемо купувати будь який з трьох перших найдених елементів
        this.item = this.getRandomInt(1, 3);
        this.itemForBuy = "((//div[@class='search-goods'])[" + this.item + "]//a)[1]";


        //кількість товарів які будемо купувати
        this.countItem = this.getRandomInt(1, 5);
        //кнопка купити    
        this.btnBuy = "//button[@class='button button_three button_fs_xl button_icon button_full button_size_sm']";
        //кнопка збільшення кількості позицій
        this.increaeCountItem = "(//button[@class='c-quantity__button'])[2]";

        //оформити замовлення
        this.btnDoOrder = "//div[@class='cart-resume__button-order']";

        //імя на сторінці оформлення
        //погані xpath
        this.oFieldName = "//*[@id=\"checkout-form\"]/div[2]/div/div[1]/div[2]/div[1]/div[1]/div/input";

        this.oFieldLastName = "//*[@id=\"checkout-form\"]/div[2]/div/div/div[2]/div[1]/div[2]/div/input";

        this.oFieldFatherName = "//*[@id=\"checkout-form\"]/div[2]/div/div/div[2]/div[1]/div[3]/div/input";

        this.oFieldPhone = "//*[@id=\"checkout-form\"]/div[2]/div/div[1]/div[2]/div[1]/div[4]/div/input";

        this.oFieldEmail = "//*[@id=\"checkout-form\"]/div[2]/div/div[1]/div[2]/div[1]/div[5]/div/input";

        //////////////////////////
        //cамовивіз
        this.btnDeliverySelf = "(//span[@class='pay-method__name'])[1]";
        //комбобокс шоб відкрити адресу
        this.cbxAdress = "//div[@class='pickup__selected']";
        //вибір елемента адреси. Нехай буде 1
        this.itemAdress = "(//span[@class='pickup__option-inner'])[1]";
        ////////////////////////
        //спосіб оплати
        //готівка
        this.btnPayCash = "//img[@alt='Наличными']";
        this.btnPayOnline = "//span[text()='Картой онлайн']";
        


        //підтвердити замовлення
        this.btnConfimOrder = "(//button[@class='button button_one button_full'])[2]";
        
    }


    getRandomInt(min, max){
        return parseInt(Math.random() * (max - min) + min);
    }


    //метод клікає на кнопку пошуку
    async click_btnSearch(){
        await driver.findElement(By.xpath(this.btnSearch)).click();
        await driver.sleep(3000);
      }

    //клік на кнопку елемент який купуємо  
    async click_itemForBuy(){
        await driver.findElement(By.xpath(this.itemForBuy)).click();
        await driver.sleep(500);
      }

    //клік кнопка купити
    async click_btnBuy(){
        await driver.findElement(By.xpath(this.btnBuy)).click();
        await driver.sleep(500);
      }

    //клік на кнопку +1 елемнт купити. Приймає кількість кліків
    async click_increaeCountItem(count){
        for(let i = 0; i <= count; i++){
            await driver.findElement(By.xpath(this.increaeCountItem)).click();
            await driver.sleep(2000);
        }
      }

    //оформлення замовлення  
    async click_btnDoOrder(){
        await driver.findElement(By.xpath(this.btnDoOrder)).click();
        await driver.sleep(500);
      }

    //ввід імені при офорлменні замовлення
    async set_oFieldName(value){
        await driver.findElement(By.xpath(this.oFieldName)).click();
        await driver.findElement(By.xpath(this.oFieldName)).sendKeys(value);
        await driver.sleep(500);
      }

    //ввід прізвища при офорлменні замовлення
    async set_oFieldLastName(value){
        await driver.findElement(By.xpath(this.oFieldLastName)).click();
        await driver.findElement(By.xpath(this.oFieldLastName)).sendKeys(value);
        await driver.sleep(500);
      }

    //ввід по батькові при офорлменні замовлення
    async set_oFieldFatherName(value){
        await driver.findElement(By.xpath(this.oFieldFatherName)).click();
        await driver.findElement(By.xpath(this.oFieldFatherName)).sendKeys(value);
        await driver.sleep(500);
      }

    //ввід телефону при офорлменні замовлення
    async set_oFieldPhone(value){
        await driver.findElement(By.xpath(this.oFieldPhone)).click();
        await driver.findElement(By.xpath(this.oFieldPhone)).sendKeys(value);
        await driver.sleep(500);
      }

    //ввід емейл при офорлменні замовлення
    async set_oFieldEmail(value){
        await driver.findElement(By.xpath(this.oFieldEmail)).click();
        await driver.findElement(By.xpath(this.oFieldEmail)).sendKeys(value);
        await driver.sleep(500);
      }


    //самовивіз
    async set_btnDeliverySelf(){
        await driver.findElement(By.xpath(this.btnDeliverySelf)).click();
        await driver.sleep(500);
      }


    //комбобокс адрес
    async set_cbxAdress(){
        await driver.findElement(By.xpath(this.cbxAdress)).click();
        await driver.sleep(500);
      }


    //вибір адреси
    async set_itemAdress(){
        await driver.findElement(By.xpath(this.itemAdress)).click();
        await driver.sleep(500);
      }

    //вибір оплати готівка
    async set_btnPayCash(){
        await driver.findElement(By.xpath(this.btnPayCash)).click();
        await driver.sleep(500);
      }
      
    //вибір оплати онлайн
    async set_btnPayOnline(){
        await driver.findElement(By.xpath(this.btnPayOnline)).click();
        await driver.sleep(500);
      }

    //оформлення замовлення
    async set_btnConfimOrder(){
        await driver.findElement(By.xpath(this.btnConfimOrder)).click();
        await driver.sleep(500);
      }

}

module.exports = pageOrd;