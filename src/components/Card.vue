<template>
  <div class="card" @click="goToDetail">
    <img :src="imageUrl" alt="Card Image" class="card-image">
    <div class="card-info">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <p class="card-price">{{ price }}</p>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'Card',
  props: {
    imageUrl: String,
    title: String,
    description: String,
    price: String, // Nueva prop para el precio
    id: Number // Asegúrate de pasar un ID o algún identificador único
  },
  setup(props) {
    const router = useRouter();

    function goToDetail() {
      router.push({ name: 'CardDetail', params: { id: props.id } });
    }

    return { goToDetail };
  }
};
</script>

<style scoped>
.card {
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer; /* Añadido para que parezca clicable */
}

.card-image {
  width: 100%;
  height: auto;
  display: block;
}

.card-info {
  padding: 16px;
}

.card-info h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: bold;
}

.card-info p {
  margin: 8px 0 0;
  font-size: 1rem;
  color: #666666;
}

.card-price {
  margin-top: 8px;
  font-size: 1.25rem;
  font-weight: bold;
  color: #333333;
}
</style>