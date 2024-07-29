<template>
    <div id="home">
        <header class="header">
        <img @click="goHome" src="@/assets/header-image.png" alt="Header Image" class="header-image">
    </header>

        <main class="main-content">
            <section class="model-section">
                <ThreeDModel ref="model" />
            </section>

            <section class="text-section">
                <p>Descubre <b>Fulanasxx</b> - <i>Nail-art</i> para tus <i>Crocs</i><br><br>
                    ¡Dale un toque único a tus <i>Crocs</i> con nuestro exclusivo diseño! Estos pines son el accesorio
                    perfecto para cualquiera que quiera
                    destacar. Ya sea que estés caminando por la Gran Vía o relajándote en casa, Fulanaxx añade
                    un toque <b>salvaje y divertido</b> a tus zuecos favoritos.
                    No es solo un pin, es una <b>declaración de intenciones.</b> Con su diseño <b>fácil de colocar</b>
                    en cualquier
                    agujero de tus <i>Crocs (o chanclas con agujeritos),</i> Fulanasxx se convierte en el complemento
                    indispensable para los que buscan
                    algo más que comodidad: buscan originalidad y estilo. Esta marca abraza
                    la estética del <i>feísmo</i> y lo <i>histriónico</i> para llamar la atención <b>marcando tu
                        propio estilo</b> acorde a la tendencia.
                    ¡Atrévete a ser diferente!</p>
            </section>

            <section class="card-section">
                <div class="card-group">
                    <div class="card-item" v-for="card in cards" :key="card.id">
                        <Card :imageUrl="card.imageUrl" :title="card.title" :description="card.description"
                            :price="card.price" :id="card.id" />
                    </div>
                </div>
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
import ThreeDModel from '../components/ThreeDModel.vue';
import Card from '@/components/Card.vue';

// Importar imágenes
import image1 from '@/assets/3.png';
import image2 from '@/assets/3.png';
import image3 from '@/assets/3.png';

export default {
    name: 'Home',
    components: {
        ThreeDModel,
        Card
    },
    data() {
        return {
            cards: [
                {
                    id: 1,
                    imageUrl: image1,
                    title: 'Fulanasxx rojo',
                    description: 'Pack de 10',
                    price: '12.95€'
                }
            ]
        };
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

.model-section {
    height: 500px;
    position: relative;
    overflow: hidden;
    background-color: #f0f0f0;
    margin-bottom: 20px;
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

.card-group {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.card-item {
    flex: 0 0 calc(33.33% - 20px);
    max-width: calc(33.33% - 20px);
    margin-bottom: 20px;
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

@media (max-width: 768px) {
    .card-item {
        flex: 0 0 calc(50% - 20px);
        max-width: calc(50% - 20px);
    }
}

@media (max-width: 480px) {
    .card-item {
        flex: 0 0 100%;
        max-width: 100%;
    }
}
</style>