  // Show and Hide Menu Functions
  function showMenu() {
    document.getElementById('slidingPanel').style.left = '0';
}

function hideMenu() {
    document.getElementById('slidingPanel').style.left = '-100%';
}

// Event Listeners
document.getElementById('menubar').addEventListener('click', showMenu);
document.getElementById('closePanel').addEventListener('click', hideMenu);