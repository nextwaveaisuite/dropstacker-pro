<script>
  // Grant access
  function grantAccess() {
    localStorage.setItem("dropstacker_access", "true");
    window.location.href = "/dashboard.html";
  }

  // Protect pages
  function requireAccess() {
    const access = localStorage.getItem("dropstacker_access");
    if (!access) {
      window.location.href = "/";
    }
  }

  // Logout
  function logout() {
    localStorage.removeItem("dropstacker_access");
    window.location.href = "/";
  }
</script>
