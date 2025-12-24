function isLoggedIn() {
  return localStorage.getItem("dropstacker_access") === "true";
}

function requireAccess() {
  if (!isLoggedIn()) {
    window.location.href = "/index.html";
  }
}

function logout() {
  localStorage.removeItem("dropstacker_access");
  localStorage.removeItem("dropstacker_plan");
  window.location.href = "/index.html";
}

// 🔐 PLAN LOGIC
function getPlan() {
  return localStorage.getItem("dropstacker_plan") || "free";
}

function isPro() {
  return getPlan() === "pro";
}
