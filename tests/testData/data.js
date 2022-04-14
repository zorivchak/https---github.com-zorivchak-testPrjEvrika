
class UserData{
    constructor(name, lastName, phone, email, pass1, pass2)
    {
        //масив імен
        this.arrName = new Array("Oleh", "Stepan", "Taras");
        //або те шо передали констурктору або одне з масиву вище
        this.name = name ?? this.arrName[Math.floor(Math.random() * this.arrName.length)];
        //масив прізвищ    
        this.arrLastName = new Array("Bodnar", "Savka", "Haydar");
        //lastname
        this.lastName = lastName ?? this.arrLastName[Math.floor(Math.random() * this.arrLastName.length)];;
        //
        this.fatherName = this.name + "ovych";
        //phone
        this.phone = phone ?? "1234567891";
        //e-mail
        this.email = email ?? this.name + this.lastName + "@gmail.com";
        //pass1
        this.pass1 = pass1 ?? this.createGuid12();
        //pass2
        this.pass2 = this.pass1 ?? pass2;
        //варіанти пошуку
        this.array = new Array("Телевизор", "Принтер", "Утюг");
        //шо шукаємо
        this.strSearch = this.array[Math.floor(Math.random() * this.array.length)];

        
    }

    //генеримо пароль
    createGuid12(){
        return 'xxyxyxxxyxxy'.replace(/[xy]/g, function(c) {
            let r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
      }

}

module.exports = UserData;

