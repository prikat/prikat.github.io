function generate( lenght = 12){
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

    var all = upperCase + lowercase + numbers + symbols;

    var password = '';

    for (var i = 0; i < lenght; i++){
        password = password + all.charAt(Math.floor(Math.random() * Math.floor(all.length +1)));

    }

    document.getElementById("display").value = password; 
   
}

generate();
