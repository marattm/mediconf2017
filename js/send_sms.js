// Twilio Credentials
const accountSid = 'AC2f877c67f02edcbe8479a8fa21b89253';
const authToken = '115e66de11ace97dfa3d083ff4980d34';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

//phone numbers

client.messages
  .create({
    to: ['+13126102079'],
    from: '+13142079612',
    body: 'https://5c0d7cfa.ngrok.io/hackathon/mediconf2017/',
  })
  .then((message) => console.log(message.sid));


          /*
        function sendSMS(){
          console.log("Hey mannnnnnnnnnn");
          $.ajax({
            console.log("hello")
            type: 'GET',
            url: "/dashboard/sendSMS",
            success:function(data){
              console.log('Succesfuly sent');
            }
          });
        }*/

        // function sendSMS(){
        //   var xhr = new XMLHttpRequest(); //This is all you would need for IE7+
        //   var xhr_results = '';
        //   if (xhr != null) {
        //       console.log("hello1")
        //       xhr.open("GET", "/dashboard/sendSMS", true);
        //       xhr.onreadystatechange = function(){
        //           if (xhr.readyState === 4) {
        //             console.log("hello2")
        //             xhr_results = xhr.responseText;
        //           }
        //       };
        //       xhr.send();
        //   }
        // }