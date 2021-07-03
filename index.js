


require('events').EventEmitter.defaultMaxListeners = 15;
require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
var request = require("request")
const botconfig = require("./botconfig.json");


var url =  "http://51.79.229.54:30120/players.json";








client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
   /* const channel = client.channels.cache.get("817070135881236520");
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
      // Yay, it worked!
      console.log("Successfully connected.");
    }).catch(e => {
      // Oh no, it errored! Let's log it to console :)
      console.error(e);
    });*/

});

client.on('ready', () => {
   
setInterval(() =>{
  request({
    url: url,
    json: true
}, function (error, response, body) {
    var string ='';
    var sstring = '';
    if (!error && response.statusCode === 200) {
        let entry = body    
        console.log(entry.length) // Print the json response
        var sl = 0; var sll = 0;var slca = 0; var slmed = 0;var slch = 0; var slqy = 0;
        for (let i=1; i<entry.length; i++) {
          var a = entry[i]["name"]; 
           if(a.substring(0,4) == 'GĐCA' || a.substring(0,2) == 'CA' || a.substring(0,5) == 'PGĐCA' || a.substring(0,5) == 'PGDCA' || a.substring(0,4) == 'QLCA' || a.substring(0,4) == 'SWAT' || a.substring(0,4) == 'QLCĐ'){
            slca = slca + 1;
           }
           if(a.substring(0,4) == 'GĐBS' || a.substring(0,2) == 'BS' || a.substring(0,3) == 'MED' || a.substring(0,4) == 'GĐBS' || a.substring(0,5) == 'PGĐBS' || a.substring(0,4) == 'QLBS' || a.substring(0,4) == 'GDBS'){
            slmed = slmed + 1;
           }
           if(a.substring(0,2) == 'CH' || a.substring(0,4) == 'GĐCH' || a.substring(0,5) == 'PGĐCH' || a.substring(0,4) == 'QLCH' || a.substring(0,5) == 'PQLCH'){
            slch = slch + 1;
           }
           if(a.substring(0,6) == 'QUÂN Y' || a.substring(0,6) == 'Quân y' || a.substring(0,2) == 'QY' || a.substring(0,6) == 'Quân Y' ||  a.substring(0,4) == 'GĐQY' || a.substring(0,4) == 'QLQY'){
            slqy = slqy + 1;
          }
         var slmed = slmed + slqy;

          var d = new Date();
             client.user.setActivity('Slot: '+entry.length+'/400, Uptime: '+d.toLocaleTimeString()+' , Công Việc: 👮🏻:'+slca+' 👨‍⚕️:'+slmed+'🔧:'+slch+' ' , { type: 'PLAYING' })
        }      
    }
})
},100000);
});

// Tim ID ================================= Rieng =========================================
client.on('message', msg => {
  if (msg.content === '.online') {
    if(msg.member.roles.cache.some(r => r.name === 'Người Cầm Quyền')|| msg.member.roles.cache.some(r => r.name === 'Control Bot') || msg.member.roles.cache.some(r => r.name === 'Của Bụt' ) || msg.member.roles.cache.some(r => r.name === 'Jun' )){
            request({
          url: url,
          json: true
      }, function (error, response, body) {
          var string ='';
          var sstring = '';
          if (!error && response.statusCode === 200) {
              let entry = body    
              console.log(entry.length) // Print the json response
              var sl = 0; var sll = 0;var slca = 0; var slmed = 0;var slch = 0; var slqy = 0;
              for (let i=1; i<entry.length; i++) {
                var a = entry[i]["name"]; 
                 if(a.substring(0,7) == 'Passion' || a.substring(0,7) == 'PASSION'  ){
                  sl = sl + 1;
                 }
                 if(a.substring(0,4) == 'GĐCA' || a.substring(0,2) == 'CA' || a.substring(0,5) == 'PGĐCA' || a.substring(0,5) == 'PGDCA' || a.substring(0,4) == 'QLCA' || a.substring(0,4) == 'SWAT' || a.substring(0,4) == 'QLCĐ'){
                  slca = slca + 1;
                 }
                 if(a.substring(0,3) == 'MED' || a.substring(0,2) == 'BS' || a.substring(0,4) == 'GĐBS' || a.substring(0,5) == 'PGĐBS' || a.substring(0,5) == 'PGDBS' || a.substring(0,5) == 'QLMED' || a.substring(0,5) == 'GDBS'){
                  slmed = slmed + 1;
                 }
                 if(a.substring(0,2) == 'CH' || a.substring(0,4) == 'GĐCH' || a.substring(0,5) == 'PGĐCH' || a.substring(0,4) == 'QLCH' || a.substring(0,5) == 'PQLCH'){
                  slch = slch + 1;
                 }
                 if(a.substring(0,6) == 'QUÂN Y' || a.substring(0,6) == 'Quân y' || a.substring(0,2) == 'QY' | a.substring(0,6) == 'Quân Y' ||  a.substring(0,4) == 'GĐQY' ||  a.substring(0,4) == 'GDBSwQY' || a.substring(0,4) == 'QLQY'){
                  slqy = slqy + 1;
                }
              }
              var ca = slca + slqy;
              string = string + '```+ Số người đang online King Viet Roleplay : '+ entry.length +'( CA: '+slca+' | QY: '+slqy+' | MED: '+slmed+' | CH: '+slch+') \n';
              string = string + '+ Danh sách thành viên Passion đang online: (SL: '+ sl +') \n';
              var o = 1;
              var oo = 1;
              sstring = sstring + '```+ Không Nametag Passion đang online: '+'\n';
               for(let i=0; i<entry.length; i++) {
                   var a = entry[i]["name"];
                   var b = entry[i]["id"];
                   var c = h2d(entry[i]["identifiers"][0].substr(6,15));

                   if(a.substring(0,7) == 'Passion' || a.substring(0,7) == 'PASSION' ){
                   string = string +"  "+ o +". " + a + " (Id: "+ b +")"+'\n';
                   o = o + 1;
                   }

          
               }
               string = string + "```";
               sstring = sstring + "```";
               if(oo==1){
                 sstring ='';
               }
               //============================ CODE =====================

               
               let destination = client.channels.cache.get('860844963151085579');
                if(destination){
                  destination.send(string);
                  if(sstring!=''){
                    destination.send(sstring);
                  }
                  if(msg.channel.id == '860844963151085579'){

                  }else{
                    msg.reply('Tin nhắn đã được gởi đến <#860844963151085579> click vào đó để xem!');
                    setTimeout(function() {
                        msg.delete();
                    }, 3000);
                  }
                  
                }
               //msg.reply(sstring);
          }
      })
    } else{
     msg.reply('Chỉ có thành viên trong Gang mới được sử dụng lệnh này!');}         

  }
});



client.on('message', msg => {
 if (msg.content === '.slgang') {
            request({
          url: url,
          json: true
      }, function (error, response, body) {
          if (!error && response.statusCode === 200) {
              var string = '';
              string = string + 'Số lượng thành viên các Gang đang Online: \n'
              let entry = body
              var sl = 0;
              for (let i=1; i<entry.length; i++) {
                var a = entry[i]["name"];

                 if(a.substring(0,7) == 'Passion' || a.substring(0,7) == 'PASSION' ){


                  sl = sl + 1;
                 }
              }
            string = string + '```==== GANG CHÍNH THỨC ==== ' + '\n';

             string = string + '+ Gang Passion: ' + sl  + '\n';

           
             var sl = 0;
              for (let i=1; i<entry.length; i++) {
                var a = entry[i]["name"];

                 if(a.substring(0,6) == 'Yakuza'|| a.substring(0,6) == 'YAKUZA'){

                  sl = sl + 1;
                 }
              }
              string = string + '+ Gang Yakuza : ' + sl  + '\n';

              var sl = 0;
              for (let i=1; i<entry.length; i++) {
                var a = entry[i]["name"];

                 if(a.substring(0,5) == 'Joker' || a.substring(0,5) == 'JOKER'){
                  sl = sl + 1;
                 }
              }
             string = string + '+ Gang Joker  : ' + sl  + '\n';
              
              var sl = 0;
              for (let i=1; i<entry.length; i++) {
                var a = entry[i]["name"];
                 if(a.substring(0,4) == 'SCVG' || a.substring(0,4) == 'scvg'){
                  sl = sl + 1;
                 }
              }
             string = string + '+ Gang SCVG: ' + sl  + '\n';

            


            string = string + '========================================'+ '\n```';

             
          }
           let destination = client.channels.cache.get('860844963151085579');
            if(destination){
              destination.send(string);



              

              if(msg.channel.id == '860844963151085579'){

              }else{
                
                setTimeout(function() {
                    msg.delete();
                }, 3000);
                msg.reply('Tin nhắn đã được gởi đến <#860844963151085579> click vào đó để xem!');
              }
              
            }
      })
  }
});


client.on('message', msg => {
  if (msg.content === '.scvg' || msg.content === '.sg') {
        request({
          url: url,
          json: true
        }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) // Print the json response

              var sl = 0;
              for (let i=1; i<entry.length; i++) {
                var a = entry[i]["name"];
                 if(a.substring(0,4) == 'SCVG'  || a.substring(0,4) == 'scvg'  ){
                  sl = sl + 1;
                 }
              }


         
              string = string + '```+ Số lượng thành viên SCVG đang online: '+ sl +' \n';
              string = string + '+ Danh sách thành viên SCVG đang online: \n';
              var o = 1;
               for (let i=1; i<entry.length; i++) {

                   var a = entry[i]["name"];
                   var b = entry[i]["id"];
                   var c = entry[i]["identifiers"][0].substr(6,15);
                   if(a.substring(0,4) == 'SCVG'  || a.substring(0,4) == 'scvg' ){
                   string = string +"  "+ o +". " + a + " (Id: "+ b +")"+'\n';
                   //string = string + 'https://steamcommunity.com/profiles/' + h2d(c) +'\n';
                   o = o + 1;
                   }
               }
               string = string + "```";
               /*let destination = client.channels.cache.get('810046607457648710');
                if(destination){
                  destination.send(string);
                  if(msg.channel.id == '810046607457648710'){

                  }else{
                    msg.reply('Tin nhắn đã được gởi đến <#810046607457648710> click vào đó để xem!');
                    setTimeout(function() {
                        msg.delete();
                    }, 3000);
                  }
                  
                }*/
               msg.reply(string);
          }
      })
  }
});




client.on('message', msg => {
  if (msg.content === '.ps' || msg.content === '.passion') {
        request({
          url: url,
          json: true
        }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) // Print the json response

              var sl = 0;
              for (let i=1; i<entry.length; i++) {
                var a = entry[i]["name"];
                 if(a.substring(0,7) == 'PASSION'  || a.substring(0,7) == 'Passion'  ){
                  sl = sl + 1;
                 }
              }


         
              string = string + '```+ Số lượng thành viên Passion đang online: '+ sl +' \n';
              string = string + '+ Danh sách thành viên Passion đang online: \n';
              var o = 1;
               for (let i=1; i<entry.length; i++) {

                   var a = entry[i]["name"];
                   var b = entry[i]["id"];
                   var c = entry[i]["identifiers"][0].substr(6,15);
                   if(a.substring(0,7) == 'PASSION'  || a.substring(0,7) == 'Passion' ){
                   string = string +"  "+ o +". " + a + " (Id: "+ b +")"+'\n';
                   //string = string + 'https://steamcommunity.com/profiles/' + h2d(c) +'\n';
                   o = o + 1;
                   }
               }
               string = string + "```";
               /*let destination = client.channels.cache.get('810046607457648710');
                if(destination){
                  destination.send(string);
                  if(msg.channel.id == '810046607457648710'){

                  }else{
                    msg.reply('Tin nhắn đã được gởi đến <#810046607457648710> click vào đó để xem!');
                    setTimeout(function() {
                        msg.delete();
                    }, 3000);
                  }
                  
                }*/
               msg.reply(string);
          }
      })
  }
});



client.on('message', msg => {
  if (msg.content === '.joker' || msg.content === '.jk') {
        request({
          url: url,
          json: true
        }, 
        function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) // Print the json response

              var sl = 0;
              for (let i=1; i<entry.length; i++) {
                var a = entry[i]["name"];
                 if(a.substring(0,5) == 'JOKER'  || a.substring(0,5) == 'Joker'  ){
                  sl = sl + 1;
                 }
              }


         
              string = string + '```+ Số lượng thành viên JOKER đang online: '+ sl +' \n';
              string = string + '+ Danh sách thành viên JOKER đang online: \n';
              var o = 1;
               for (let i=1; i<entry.length; i++) {

                   var a = entry[i]["name"];
                   var b = entry[i]["id"];
                   var c = entry[i]["identifiers"][0].substr(6,15);
                   if(a.substring(0,5) == 'Joker'  || a.substring(0,5) == 'JOKER' ){
                   string = string +"  "+ o +". " + a + " (Id: "+ b +")"+'\n';
                   //string = string + 'https://steamcommunity.com/profiles/' + h2d(c) +'\n';
                   o = o + 1;
                   }
               }
               string = string + "```";
               /*let destination = client.channels.cache.get('810046607457648710');
                if(destination){
                  destination.send(string);
                  if(msg.channel.id == '810046607457648710'){

                  }else{
                    msg.reply('Tin nhắn đã được gởi đến <#810046607457648710> click vào đó để xem!');
                    setTimeout(function() {
                        msg.delete();
                    }, 3000);
                  }
                  
                }*/
               msg.reply(string);
          }
      })
  }
});


//========Info Cong An==============
client.on('message', msg => {
  if (msg.content === '.ca') {
            request({
          url: url,
          json: true
      }, function (error, response, body) {
          var string ='';
          if (!error && response.statusCode === 200) {
              let entry = body
              console.log(entry.length) // Print the json response

              var slca = 0;var slqy = 0;
              for (let i=1; i<entry.length; i++) {
                var a = entry[i]["name"];
                if(a.substring(0,2) == 'CA' || a.substring(0,4) == 'GĐCA' || a.substring(0,5) == 'PGĐCA' || a.substring(0,4) == 'QLCA' || a.substring(0,4) == 'SWAT' || a.substring(0,4) == 'QLCĐ'){
                  slca = slca + 1;
                 }
                if(a.substring(0,6) == 'QUÂN Y' || a.substring(0,6) == 'Quân y' || a.substring(0,2) == 'QY' || a.substring(0,6) == 'Quân Y' ||  a.substring(0,4) == 'GĐQY' || a.substring(0,4) == 'QLQY'){
                  slqy = slqy + 1;
                }
                var ca = slca + slqy;
              }

         
              string = string + '```+ Số lượng Cớm đang online: '+ ca +' (Công An:'+slca+' | Quân Y:'+slqy+') \n';
              string = string + '+ Danh sách Cớm đang online: \n';
              var o = 1;
               for (let i=1; i<entry.length; i++) {
                   var a = entry[i]["name"];
                   var b = entry[i]["id"];
                   var c = entry[i]["identifiers"][0].substr(6,15);
                   if(a.substring(0,2) == 'CA' || a.substring(0,4) == 'GĐCA' || a.substring(0,5) == 'PGĐCA' || a.substring(0,4) == 'QLCA' || a.substring(0,4) == 'SWAT' || a.substring(0,4) == 'QLCĐ'){
                   string = string +"  "+ o +". " + a + " (Id: "+ b +")"+'\n';
                   //string = string + '(https://steamcommunity.com/profiles/' + c +')\n';
                   o = o + 1;
                   }               }
               for (let i=1; i<entry.length; i++) {
                   var a = entry[i]["name"];
                   var b = entry[i]["id"];
                   var c = entry[i]["identifiers"][0].substr(6,15);
                   if(a.substring(0,6) == 'QUÂN Y' || a.substring(0,6) == 'Quân y' || a.substring(0,6) == 'Quân Y' || a.substring(0,2) == 'QY' ||  a.substring(0,4) == 'GĐQY' || a.substring(0,4) == 'QLQY'){
                   string = string +"  "+ o +". " + a + " (Id: "+ b +")"+'\n';
                   //string = string + '(https://steamcommunity.com/profiles/' + c +')\n';
                   o = o + 1;
                   } 
               }
               string = string + "```";

                let destination = client.channels.cache.get('860844963151085579');
                if(destination){
                  destination.send(string);
                  if(msg.channel.id == '860844963151085579'){

                  }else{
                    msg.reply('Tin nhắn đã được gởi đến <#860844963151085579> click vào đó để xem!');
                    setTimeout(function() {
                        msg.delete();
                    }, 3000);
                  }
                  
                }
               //msg.reply(string);
          }
      })
  }
});

// Tim ID 
client.on("message",(message)=>{
const prefix = ".";
if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();
if (command == 'id') {
   if(message.member.roles.cache.some(r => r.name === 'Control Bot')){
        if (!args.length) {
          return message.channel.send(`Chưa nhập ID sao tìm má, ${message.author}!`);
        }
      request({
                url: url,
                json: true
            }, function (error, response, body) {
                var string ='';
                if (!error && response.statusCode === 200) {
                    let entry = body
                    console.log(entry.length) // Print the json response
                    var o = 1;
                     for (let i=1; i<entry.length; i++) {
                          var b = entry[i]["id"];
                          var c = entry[i]["identifiers"][0].substr(6,15);
                          var d = entry[i]["identifiers"][2];
                        if(entry[i]["identifiers"][2]){  
                            if(d.substr(0,7)=='discord'){
                              d = '<@'+entry[i]["identifiers"][2].substr(8,18)+'>';
                            }else{
                              d='Người chơi này không mở Discord hoặc đã xài Trick ẩn danh chi thuật :))';
                            }
                        }else{
                           d='Người chơi này không mở Discord hoặc đã xài Trick ẩn danh chi thuật :))';
                        }

                        if(b == `${args}`){
                          const exampleEmbed = new Discord.MessageEmbed()
                          .setColor('#0099ff')
                          .setTitle('Ingame: ' + entry[i]["name"])
                          .setURL('https://steamcommunity.com/profiles/' + h2d(c))
                          .setAuthor('Thông tin người chơi', 'https://cdn.discordapp.com/attachments/825220471313137707/857596253180788776/kkk.gif') // cho link hinh
                          .setDescription('ID: '+entry[i]["id"])
                          .setThumbnail('https://cdn.discordapp.com/attachments/825220471313137707/857596253180788776/kkk.gif') // cho link hinh
                          .addFields(
                          { name: 'Link Steam:', value: 'https://steamcommunity.com/profiles/' + h2d(c) },
                           { name: 'Discord:', value: d  },
                        )

                           let destination = client.channels.cache.get('860844963151085579');
                            if(destination){
                              destination.send(exampleEmbed);
                              if(message.channel.id == '860844963151085579'){

                              }else{
                                message.reply('Tin nhắn đã được gởi đến <#860844963151085579> click vào đó để xem!');
                                setTimeout(function() {
                                    message.delete();
                                }, 3000);
                              }
                              

                            }

                          
                          return;
                        }
                     }
                     message.channel.send(`Xin lỗi ${message.author} tui không tìm thấy thông tin người này hoặc người này đã offine!`);
                }
            })
       } else{
     message.reply('Bạn không không có quyền sử dụng lệnh này! Vui lòng liên hệ <@669763324635774988> để biết thêm chi tiết!.');}
}
});


function h2d(s) {

    function add(x, y) {
        var c = 0, r = [];
        var x = x.split('').map(Number);
        var y = y.split('').map(Number);
        while(x.length || y.length) {
            var s = (x.pop() || 0) + (y.pop() || 0) + c;
            r.unshift(s < 10 ? s : s - 10); 
            c = s < 10 ? 0 : 1;
        }
        if(c) r.unshift(c);
        return r.join('');
    }

    var dec = '0';
    s.split('').forEach(function(chr) {
        var n = parseInt(chr, 16);
        for(var c = 8; c; c >>= 1) {
            dec = add(dec, dec);
            if(n & c) dec = add(dec, '1');
        }
    });
    return dec;
}


client.login(botconfig.token);