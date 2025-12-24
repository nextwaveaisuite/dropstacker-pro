// DropStacker Pro – Local Auth + Payment Engine

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

// 🔥 PAYPAL FLOW (NO BACKEND)
function upgradeToPro() {
  window.location.href = "https://www.paypal.com/paypalme/YOURPAYPAL/29";
}

// ✅ CALLED AFTER PAYMENT
function activatePro() {
  localStorage.setItem("dropstacker_plan", "pro");
  localStorage.setItem("dropstacker_access", "true");
}
