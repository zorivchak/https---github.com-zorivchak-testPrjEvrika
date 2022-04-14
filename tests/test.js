const {By,Key,Builder} = require("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");
require("chromedriver");
const UserData = require('./testData/data.js');
const pageReg = require('./pageObject/pageRegistration.js');
const pageOrd = require('./pageObject/pageOrder.js');


//Розкоментувати для запуску тест 1
/*

// ТЕСТ 1
// Реестрація користувача

//базовий тест кейс який приймає обєкт. Обєкт має містити значення з даними для заповнення 
//сторінки реестрації
async function test_registration(object){
    //запуск браузера
    let driver = await new Builder().forBrowser("chrome").build();
    
    await driver.get("https://evrika.wezom.agency/");
    await driver.sleep(3000);

    let page = new pageReg();
    
    //мав би цей код працювати але поки не розібрався чому не працює. За браком часу
    //page.click_btnAgreeCookie();
    //page.click_btnReg();
    //page.click_btnRegStart();
    //page.set_name();
    //page.set_lastName();
    //page.set_phone();
    //page.set_email();
    //page.set_pass1();
    //page.set_pass2();
    //page.click_cbxAgree();
    //page.click_btnRegFinish();
    
    
    await driver.findElement(By.xpath(page.btnAgreeCookie)).click();
    await driver.sleep(500);

    await driver.findElement(By.xpath(page.btnReg)).click();
    await driver.sleep(500);

    await driver.findElement(By.xpath(page.btnRegStart)).click();
    await driver.sleep(500);

    await driver.findElement(By.xpath(page.formName)).sendKeys(object.name);
    let screenName = driver.takeScreenshot(); //для експорту в Allure

    await driver.findElement(By.xpath(page.formLastName)).sendKeys(object.lastName);
    let screenLastName = driver.takeScreenshot(); //для експорту в Allure

    await driver.findElement(By.xpath(page.formPhone)).sendKeys(object.phone);
    await driver.sleep(500);
    let screenPhone = driver.takeScreenshot(); //для експорту в Allure

    await driver.findElement(By.xpath(page.formEmail)).sendKeys(object.email);
    await driver.sleep(500);
    let screenEmail = driver.takeScreenshot(); //для експорту в Allure

    await driver.findElement(By.xpath(page.formPass1)).sendKeys(object.pass1);
    await driver.sleep(500);
    let screenPass1 = driver.takeScreenshot(); //для експорту в Allure

    await driver.findElement(By.xpath(page.formPass2)).sendKeys(object.pass2);
    await driver.sleep(500);
    let screenPass2 = driver.takeScreenshot(); //для експорту в Allure

    await driver.findElement(By.xpath(page.cbxAgree)).click();
    await driver.sleep(500);
    await driver.findElement(By.xpath(page.btnRegFinish)).click();
     
    let screen = driver.takeScreenshot();
    await driver.quit();
}

async function test_registration1(){
    //можна так створювати обєкт або так як в функції нижче
    let person = new UserData();
    test_registration(person);
}


function test_registration2(){
    //або так 
    let person = new UserData("petro", "Koval", 1234567891, "kovaloleg@gmail.com", "Qwerty123&", "Qwerty123&");
    test_registration(person);
}


test_registration1();
//поки закоментовано бо поки не запускаю функції послідновно. А всі працюють асинхронно
//test_registration2();

///////////////////////////////////////////////////////////
//кінець ТЕСТ 1
//Розкоментувати для запуску тест 1
*/




















async function test_buyItem(user, typePay){
    //запуск браузера
    let driver = await new Builder().forBrowser("chrome").build();
    
    await driver.get("https://evrika.wezom.agency/");
    await driver.sleep(3000);

    let page = new pageOrd();

    ///////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////
    //мав би цей код працювати але поки не розібрався чому не працює. За браком часу
    //page.click_btnAgreeCookie();
    //page.set_fieldSearch(user.strSearch);
    //click_btnSearch();
    //page.click_itemForBuy();
    //page.click_btnBuy();
    //page.click_increaeCountItem(3);
    //page.click_btnDoOrder();
    //page.set_oFieldName(user.name);
    //page.set_oFieldLastName(user.lastName);
    //page.set_oFieldFatherName(user.fatherName);
    //page.set_oFieldPhone(user.phone);
    //page.set_oFieldEmail(user.email);
    //page.set_btnDeliverySelf();
    //page.set_cbxAdress();
    //page.set_itemAdress();

    //вибір
    //switch(typePay){
    //    case "cash": page.set_btnPayCash(); break;
    //    case "online": page.set_btnPayOnline(); break;
        //можуть бути інші ще типи
        //..
        ///////
    //    default: console.log("Щось не так: " + typePay);
    //}
    //page.set_btnConfimOrder();
    //await driver.quit();
    ///////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////



    
    //поки цей код працює
    await driver.findElement(By.xpath(page.btnAgreeCookie)).click();
    await driver.sleep(500);

    
    await driver.findElement(By.xpath(page.fieldSearch)).click();
    await driver.sleep(500);
    await driver.findElement(By.xpath(page.inputSearch)).sendKeys(user.strSearch, Key.ENTER);
    await driver.sleep(3000);

    await driver.findElement(By.xpath(page.itemForBuy)).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath(page.btnBuy)).click();
    await driver.sleep(1000);

    for(let i = 1; i <= 4; i++){
        await driver.findElement(By.xpath(page.increaeCountItem)).click();
        await driver.sleep(2000);
    }
    //оформити замовлення
    await driver.findElement(By.xpath(page.btnDoOrder)).click();
    await driver.sleep(3000);

    ////////////////////////////////////////////////////

    
    await driver.findElement(By.xpath(page.oFieldName)).click();
    await driver.findElement(By.xpath(page.oFieldName)).sendKeys(user.name);
    await driver.sleep(500);

    await driver.findElement(By.xpath(page.oFieldLastName)).click();
    await driver.findElement(By.xpath(page.oFieldLastName)).sendKeys(user.lastName);
    await driver.sleep(500);

    await driver.findElement(By.xpath(page.oFieldFatherName)).click();
    await driver.findElement(By.xpath(page.oFieldFatherName)).sendKeys(user.fatherName);
    await driver.sleep(500);

    await driver.findElement(By.xpath(page.oFieldPhone)).click();
    await driver.findElement(By.xpath(page.oFieldPhone)).sendKeys(user.phone);
    await driver.sleep(500);

    await driver.findElement(By.xpath(page.oFieldEmail)).click();
    await driver.findElement(By.xpath(page.oFieldEmail)).sendKeys(user.email);
    await driver.sleep(500);
    

    //самовивіз з магазину
    await driver.findElement(By.xpath(page.btnDeliverySelf)).click();
    await driver.sleep(500);

    //комбобокс
    await driver.findElement(By.xpath(page.cbxAdress)).click();
    await driver.sleep(500);

    //клік на першу адресу
    await driver.findElement(By.xpath(page.itemAdress)).click();
    await driver.sleep(500);
    
    

    //вибір
    switch(typePay){
        case "cash": await driver.findElement(By.xpath(page.btnPayCash)).click(); break;
        case "online": await driver.findElement(By.xpath(page.btnPayOnline)).click(); break;
        //можуть бути інші ще типи
        //..
        ///////
        default: console.log("Щось не так: " + typePay);
    }
    await driver.sleep(500);

    await driver.findElement(By.xpath(page.btnConfimOrder)).click();
    
    await driver.quit();

}




async function test_buyItem_byOnline()
{
    let person = new UserData();
    //передаємо обєкт клієнта і тип оплати
    test_buyItem(person, "online");
}
/*
async function test_buyItem_byCash()
{
    let person = new UserData();
    //передаємо обєкт клієнта і тип оплати
    test_buyItem(person, "cash");
}
*/
test_buyItem_byOnline();
//test_buyItem_byCash();

