const username = '<%= Request.ServerVariables["LOGON_USER"] %>';
const email = '<%= Request.ServerVariables["AUTH_USER_EMAIL"] %>';
document.getElementById('username').textContent = username;
document.getElementById('email').textContent = email;
console.log('Username', username);
console.log('Email', email);