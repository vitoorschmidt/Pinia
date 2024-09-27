<script setup>
import { useProductStore } from '@/stores/product';
const productStore = useProductStore();
</script>

<template>
<h1>Listagem de Produtos</h1>
<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Nome</th>
      <th>Preço</th>
      <th>Ações</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in productStore.products" :key="product.id">
    <td>{{ product.id }}</td>
    <td>{{ product.name }}</td>
    <td>{{ product.price }}</td>
    <td>Em breve...</td>
    </tr>

  </tbody>
</table>

</template>
