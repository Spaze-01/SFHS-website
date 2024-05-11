function closeAndRedirect() {
  const delay = 5000;

  // Redirect the user to the home page after the delay
  setTimeout(function() {
    window.location.href = "/index.html";
  }, delay);
}

closeAndRedirect();