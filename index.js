const token = ''
const api = 'https://api.github.com/'
const fork = `${name}/javascript-fetch-lab`


// fetch('https://api.github.com/user/repos', {
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(res => res.json()).then(json => console.log(json));




function getIssues() {
}

function showIssues(json) {
  return `<p><strong>${json.title}</strong> - ${json.body}</p>`
}

function createIssue() {
}

function showResults(json) {
  result = `<a href="${json.html_url}">${json.name}</a>`
  $('#results').html(result
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
 method: 'post',
 headers: {
   Authorization: `token ${getToken()}`
 }
}).then(res => res.json())
 .then(json => showResults(json));
}


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
