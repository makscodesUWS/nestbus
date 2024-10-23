
const contactForm = document.querySelector('#contact-form form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page reload

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  fetch('/send-message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
  })
  .then(response => {
    if (response.ok) {

      alert('Message sent successfully!');
      contactForm.reset(); // Clear the form
    } else {
      alert('Error sending message. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error sending message. Please try again.');
  });
});
A
const riderForm = document.getElementById('rider-form');
const homeRiderList = document.getElementById('home-rider-list');

riderForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const childName = document.getElementById('child-name').value;
  const childStop = document.getElementById('child-stop').value;
  let riders = JSON.parse(localStorage.getItem('riders')) || [];
  riders.push({ name: childName, stop: childStop });
  localStorage.setItem('riders', JSON.stringify(riders));

  updateRiderList(riders);

  alert('Rider added successfully!');
  riderForm.reset(); 
});

function updateRiderList(riders) {
  homeRiderList.innerHTML = ''; 
  riders.forEach(rider => {
    const listItem = document.createElement('li');
    listItem.textContent = `${rider.name} - ${rider.stop}`;
    homeRiderList.appendChild(listItem);
  });
}
window.addEventListener('load', () => {
  let riders = JSON.parse(localStorage.getItem('riders')) || [];
  updateRiderList(riders);
});


const paymentForm = document.getElementById('payment-form');

paymentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const cardNumber = document.getElementById('card-number').value;
  const expiryDate = document.getElementById('expiry-date').value;
  const cvv = document.getElementById('cvv').value;


  alert(`Payment information submitted: Card Number: ${cardNumber}, Expiry Date: ${expiryDate}, CVV: ${cvv}`);
  paymentForm.reset();
});


function updateRiderList(riders) {
  homeRiderList.innerHTML = ''; 
  riders.forEach(rider => {
    const listItem = document.createElement('li');
    listItem.textContent = `${rider.name} - ${rider.stop}`;
    homeRiderList.appendChild(listItem);
  });
}


function loadRiders() {
  let riders = JSON.parse(localStorage.getItem('riders')) || [];
  updateRiderList(riders);
}

window.addEventListener('load', loadRiders);
const paymentForm = document.getElementById('payment-form');

paymentForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get payment information
  const cardNumber = document.getElementById('card-number').value;
  const expiryDate = document.getElementById('expiry-date').value;
  const cvv = document.getElementById('cvv').value;


  alert(`Payment information submitted: Card Number: ${cardNumber}, Expiry Date: ${expiryDate}, CVV: ${cvv}`);
  paymentForm.reset(); 
});
const users = {}; /
const parents = {}; 

function registerUser(email, password) {
  if (users[email]) {
    return false;
  }
  users[email] = { email, password };
  return true;
}

// User Login (Simplified)
function loginUser(email, password) {
  if (!users[email] || users[email].password !== password) {
    return false;
  }

  return true;
}

// Parent Account Creation (Simplified)
function createParentAccount(email, password) {
  if (parents[email]) {
    return false; 
  }
  parents[email] = { email, password };
  return true;
}

// Link Child to Parent Account (Simplified)
function linkChild(parentEmail, childName) {
  if (!parents[parentEmail]) {
    return false; 
  }
  parents[parentEmail].children = parents[parentEmail].children || [];
  parents[parentEmail].children.push(childName);
  return true;
}

registerUser('john.doe@example.com', 'password123');
loginUser('john.doe@example.com', 'password123');
createParentAccount('jane.doe@example.com', 'mypassword');
linkChild('jane.doe@example.com', 'Emily');

const riderForm = document.getElementById('rider-form');
const homeRiderList = document.getElementById('home-rider-list');

riderForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const childName = document.getElementById('child-name').value;
  const childStop = document.getElementById('child-stop').value;
  const parentCode = document.getElementById('parent-code').value;

  // Add rider to local storage
  let riders = JSON.parse(localStorage.getItem('riders')) || [];
  riders.push({ name: childName, stop: childStop, parentCode: parentCode });
  localStorage.setItem('riders', JSON.stringify(riders));

  // Update rider list on home page
  updateRiderList(riders);

  alert('Rider added successfully!');
  riderForm.reset(); 
});

// Update rider list function
function updateRiderList(riders) {
  homeRiderList.innerHTML = ''; // Clear existing list
  riders.forEach(rider => {
    const listItem = document.createElement('li');
    listItem.textContent = `${rider.name} - ${rider.stop}`;
    homeRiderList.appendChild(listItem);
  });
}

// Load riders on page load
window.addEventListener('load', () => {
  let riders = JSON.parse(localStorage.getItem('riders')) || [];
  updateRiderList(riders);
});

// Payment Form Handling (no actual payment processing)
const paymentForm = document.getElementById('payment-form');

paymentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get payment information
  const cardNumber = document.getElementById('card-number').value;
  const expiryDate = document.getElementById('expiry-date').value;
  const cvv = document.getElementById('cvv').value;

  // Simulate payment processing (replace with actual gateway logic)
  alert(`Payment information submitted: Card Number: ${cardNumber}, Expiry Date: ${expiryDate}, CVV: ${cvv}`);
  paymentForm.reset();
});

// Function to update the rider list on the home page
function updateRiderList(riders) {
  homeRiderList.innerHTML = ''; // Clear existing list
  riders.forEach(rider => {
    const listItem = document.createElement('li');
    listItem.textContent = `${rider.name} - ${rider.stop}`;
    homeRiderList.appendChild(listItem);
  });
}

// Function to load riders when the home page loads
function loadRiders() {
  let riders = JSON.parse(localStorage.getItem('riders')) || [];
  updateRiderList(riders);
}

// Call the loadRiders function when the home page loads
window.addEventListener('load', loadRiders);