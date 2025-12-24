<script>
  function grantAccess() {
    localStorage.setItem("dropstacker_access", "true");
    window.location.href = "/dashboard.html";
  }

  function requireAccess() {
    const access = localStorage.getItem("dropstacker_access");
    if (!access) {
      window.location.href = "/";
    }
  }

  function logout() {
    localStorage.removeItem("dropstacker_access");
    window.location.href = "/";
  }
</script>
