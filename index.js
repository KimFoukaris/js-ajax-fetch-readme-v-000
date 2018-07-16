const app = "I don't do much.";
const token = '981b96f7ad9153d169fbf35f7581aa9cca646607'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
