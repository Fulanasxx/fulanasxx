<template>
    <div id="card-detail">
        <header class="header">
            <img @click="goHome" src="@/assets/header-image.png" alt="Header Image" class="header-image">
        </header>

        <main class="main-content">
            <section class="gallery">
                <button @click="prevImage" class="nav-button left">&lt;</button>
                <img :src="currentImage" alt="Gallery Image" class="gallery-image">
                <button @click="nextImage" class="nav-button right">&gt;</button>
            </section>
            <section class="text-section">
                <p><b>Pack de 10 Fulanasxx - Rojo</b><br><br>
                    ¡Transforma tus zuecos con estilo y personalidad! Nuestro pack de 10 pines, con diseño de uña larga
                    en vibrante color rojo, es el accesorio perfecto para darle un toque único a tus zuecos. Cada pin se
                    adapta fácilmente a cualquier <i>zueco con agujeros ;)</i> permitiéndote personalizarlas a tu
                    gusto.<br><br><b><span style="font-size: 24px;">12,95€</span></b><br><br><br><br>
                    <span style="color: #666666;">Sabemos que no puedes esperar a tener las tuyas ;) por eso si quieres
                        algun pack es tan fácil cómo
                        enviarnos un DM a nuestro Instagram @fulanasxx<br>
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
    </div>
</template>

<script>
import image1 from '@/assets/3.png';
import image2 from '@/assets/1.jpg';
import image3 from '@/assets/2.jpg';
import image4 from '@/assets/final2.png';
import image5 from '@/assets/final3.png';

export default {
    name: 'CardDetail',
    data() {
        return {
            images: [image1, image2, image3, image4, image5],
            currentIndex: 0
        };
    },
    computed: {
        currentImage() {
            return this.images[this.currentIndex];
        }
    },
    methods: {
        goHome() {
            this.$router.push('/');
        },
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        prevImage() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        }
    }
};
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

.gallery {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
}

.gallery-image {
    max-width: 100%;
    max-height: 400px;
}

.nav-button {
    position: absolute;
    color: black;
    border: none;
    padding: 10px;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
}

.nav-button.left {
    left: 10px;
}

.nav-button.right {
    right: 10px;
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