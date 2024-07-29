<template>
    <header class="header">
        <img @click="goHome" src="@/assets/header-image.png" alt="Header Image" class="header-image">
    </header>
    <main class="main-content">
        <section class="text-section">
            <p><b>Cómo hacer mi pedido?</b><br><br>
                Hacer tu pedido es muy fácil, solo tienes que 
                    enviarnos un DM a nuestro Instagram @fulanasxx y hablar con nosotros personalmente ;)<br><br><br><br>
                <span style="color: #666666;">
                    Además si nos quieres mandar una foto del outfit para que la compartamos sería genial :) BSOS</span>
            </p>
        </section>
        <section class="footer">
                <div class="footer-column">
                    <img src="@/assets/header-image.png" alt="Footer Image" class="footer-image">
                </div>
                <div class="footer-column">
                    <router-link to="/como" class="footer-link">Cómo hacer mi pedido?</router-link>
                </div>
                <div class="footer-column">
                    <router-link to="/colocar" class="footer-link">Cómo colocar Fulanasxx?</router-link>
                </div>
                <div class="footer-column">
                    <a href="https://www.instagram.com/fulanasxx" target="_blank" class="footer-contact">
                        <img src="@/assets/instagram.svg" alt="Instagram Icon" class="footer-icon">
                        <span>@fulanasxx</span>
                    </a>
                    <a href="mailto:fulanasxx@gmail.com" class="footer-contact">
                        <img src="@/assets/envelope.svg" alt="Email Icon" class="footer-icon">
                        <span>fulanasxx@gmail.com</span>
                    </a>
                </div>
            </section>

    </main>
</template>

<script>
export default {
    name: 'Como',
    methods: {
        goHome() {
            this.$router.push('/');
        },
    }
}
</script>

<style scoped>
.header {
    padding: 20px 0;
    text-align: center;
}

.header-image {
    max-width: 80%;
    height: auto;
    cursor: pointer;
}


.main-content {
    flex: 1;
    padding: 20px;
}

.text-section {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 100px;
    width: 100%;
}

.text-section p {
    max-width: 80%;
    margin: 0 auto;
}


.footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 100px 0 20px 0;
}

.footer-column {
    flex: 1;
    text-align: center;
}

.footer-image {
    max-width: 50%;
    height: auto;
}

.footer-como {
    font-size: 14px;
    color: #333;
}
.footer-colocar {
    font-size: 14px;
    color: #333;
}

.footer-link {
    font-size: 14px;
    color: #333;
    text-decoration: none;
}
.footer-contact {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    color: #333;
    text-decoration: none;
}

.footer-icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
}

@media (max-width: 768px) {
    .footer {
        flex-direction: column;
    }

    .footer-column {
        margin-bottom: 20px;
    }
}
</style>