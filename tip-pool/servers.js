let serverNameInput = document.getElementById('serverName');
let serverForm = document.getElementById('serverForm');

let serverTbody = document.querySelector('#serverTable tbody');

let allServers = {};
let serverId = 0;

serverForm.addEventListener('submit', submitServerInfo);

// create server object and add to allServers, update html and reset input
function submitServerInfo(evt) {
  if (evt) evt.preventDefault(); // when running tests there is no event

  let serverName = serverNameInput.value;

  if (serverName !== '') {
    serverId++;
    allServers['server' + serverId] = { serverName };

    updateServerTable();

    serverNameInput.value = '';
  }
}

// Create table row element and pass to appendTd function with input value
function updateServerTable() {
  serverTbody.innerHTML = '';

  for (let key in allServers) {
    let curServer = allServers[key];

    let newTr = document.createElement('tr');
    newTr.setAttribute('id', key);

    let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length;

    appendTd(newTr, curServer.serverName);
    appendTd(newTr, '$' + tipAverage.toFixed(2));

    appendDeleteBtn(newTr);

    serverTbody.append(newTr);
  }
}

function appendDeleteBtn(tr) {
  let deleteTd = document.createElement('td');
  deleteTd.innerText = 'X';

  // Optional: Add an event listener to remove the row when clicked
  deleteTd.addEventListener('click', function () {
    tr.remove();
    delete allServers[tr.id];  // Clean up the associated data
    updateServerTable();       // Update the table display
  });

  tr.appendChild(deleteTd);  // Add the 'X' button to the row
}
