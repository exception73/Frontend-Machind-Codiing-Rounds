const handlePassGenerate = (passSettings, passlen, setPass) => {

    let password = 'abcdefghijklmnopqrst';

    passSettings.forEach((val) => {
      switch(val.title) {
        case 'number' : {
          if(val.state) password+='1234567890';
          break;
        }
        case 'upperCase' :{
         if(val.state) password+='ABCDEFGHOKWREWEVAM';
         break;
        }
        case 'SpecialChar':{
          if(val.state) password +="!@#$%^&*()_+";
          break;
        }
      }


      let newpass = "";
      for(let i = 0; i <passlen; i++){
        newpass+=password[Math.floor(Math.random() * password.length)];
      }

      setPass(newpass)

    })

    console.log(password);
    
    
  }


  export default handlePassGenerate;