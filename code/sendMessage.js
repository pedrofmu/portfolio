document.getElementById("formulario").addEventListener("submit", function (event) {
   window.alert("message sent");
   event.preventDefault();

   var name = document.getElementById("Name").value;
   var email = document.getElementById("Email").value;
   var message = document.getElementById("Message").value;

   Email.send({
      Host : "smtp.elasticemail.com",
      //2525   
      Username : "paquitosalasregeton39@gmail.com",
      //    megustaelregeton39
      Password : "4459A4AFE87374E394BCE7C0E93ACAFF71F5",
      To : 'contacto@pedrofm.dev',
      From : 'paquitosalasregeton39@gmail.com',
      Subject : name + " quiere contactar contigo",
      Body : email + ': \n' + message
  }).then(
    message => alert(message)
  );
});
