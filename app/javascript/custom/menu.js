// Menu manipulation
// Add toggle listeners to listen for clicks.
document.addEventListener("turbo:load", function () {
  // Hamburger menu toggle - Works with Bootstrap's collapse
  let hamburger = document.querySelector("#hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", function (event) {
      event.preventDefault();
      let menu = document.querySelector("#navbar-menu");
      if (menu) {
        // Toggle Bootstrap's 'in' class for proper collapse behavior
        menu.classList.toggle("in");
        // Also toggle the button's collapsed state
        hamburger.classList.toggle("collapsed");
      }
    });
  }

  // Account dropdown toggle (only if user is logged in)
  let account = document.querySelector("#account");
  if (account) {
    account.addEventListener("click", function (event) {
      event.preventDefault();
      let menu = document.querySelector("#dropdown-menu");
      if (menu) {
        // Close any other open dropdowns first
        document.querySelectorAll(".dropdown-menu.open").forEach(function(openMenu) {
          if (openMenu !== menu) {
            openMenu.classList.remove("open");
          }
        });
        // Toggle current dropdown
        menu.classList.toggle("open");
      }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener("click", function(event) {
      let dropdown = document.querySelector("#dropdown-menu");
      if (dropdown && !account.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove("open");
      }
    });
  }
});
