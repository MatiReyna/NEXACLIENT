<script setup>  // Haciendo esto lo estoy exportando al componente.

</script>

//* Esto es equivlente al return y lo que va abajo.
<template>
    <footer class='footerContainer'>
        <div class='footerWrapper'>
            <div class='footerSection'>
                <div class='footerSubscribe'>
                    <h2>
                        Subscribe to the Nexa Contructora® newslatter to say
                        up-to-date with the latest releases.
                    </h2>
                    <div class='box'>
                        <!-- <label for="email">Email Address</label> -->
                        <input type='email' placeholder='Email Address' />
                        <button>Suscribite</button>
                    </div>
                </div>
            </div>
            <nav class='footerNav'>
                <div>
                    <h3>Company</h3>
                    <ul>
                        <li><a>About</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Connect</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </nav>
            <div class='footerCopyright '>
                <p>© 2024 Nexa Constructora. Todos los derechos reservados.</p>
                <p>Privacy Policy.</p>
                <p>Terms of Use.</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
.footerContainer {
    width: 100%;
    background-color: #7364d2;
    padding: 3.5rem;
    min-height: 20rem;
    font-family: 'DM Sans', sans-serif;
    color: #242422;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-radius: 10px;
}

.footerWrapper {
    max-width: 90rem;
    margin: 0 auto;
    margin-bottom: 3rem;
}

.footerSection {
    display: flex;
    align-items: flex-start;
    /* justify-content: space-between; */
    /* flex-wrap: wrap; */
    gap: 3rem;
}

.footerSubscribe {
  max-width: clamp(20rem, 33vw, 33rem);
}

.footerSubscribe > h2 {
  font-size: clamp(1.5rem, 2.3vw, 2.25rem);
}

.box {
  display: flex;
  max-width: 100%;
  padding-block: 1rem;
  margin-top: 3rem;
}

.box > input {
  flex-grow: 1;
  background-color: #7364d2;
}

.footerNav {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(3rem, 4vw, 7rem);
}

.footerNav > div > h3 {
  font-size: 1rem;
}

.footerNav > div > ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;
  cursor: pointer;
}

.footerNav > div li {
  font-size: 1.125rem;
  font-weight: 700;
  transition: opacity 200ms ease;
}

.footerNav > div li:hover {
  opacity: 0.5;
}

.footerCopyright {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.875rem;
  margin-top: 5rem;
}
</style>