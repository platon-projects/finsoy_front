<template>
  <header class="header">
    <div class="logo">MiniApp</div>
    <nav class="nav">
      <a href="#" class="nav-link">Home</a>
      <a href="#" class="nav-link">About</a>
      <a href="#" class="nav-link">Contact</a>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f3ba2f; /* Binance yellow */
  color: #fff;
  font-family: Arial, sans-serif;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav {
  display: flex;
  gap: 15px;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>