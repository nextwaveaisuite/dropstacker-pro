// DropStacker Pro – Local Auth Engine

function isLoggedIn() {
  return localStorage.getItem("dropstacker_access") === "true";
}

function isPro() {
  return localStorage.getItem("dropstacker_plan") === "pro";
}

function requireLogin() {
  if (!isLoggedIn()) {
    window.location.href = "/index.html";
  }
}

function loginUser() {
  localStorage.setItem("dropstacker_access", "true");
  localStorage.setItem("dropstacker_plan", "free");
  window.location.href = "/dashboard.html";
}

function logoutUser() {
  localStorage.removeItem("dropstacker_access");
  localStorage.removeItem("dropstacker_plan");
  window.location.href = "/index.html";
}

function upgradeToPro() {
  localStorage.setItem("dropstacker_plan", "pro");
  alert("✅ Pro features unlocked");
  window.location.href = "/dashboard.html";
}
