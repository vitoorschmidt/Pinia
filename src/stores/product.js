import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    { id: 1, name: 'Salgado Frito', price: 4.5, qty: 100 },
    { id: 2, name: 'Pão Francês', price: 5.5, qty: 50 },
    { id: 3, name: 'Pão de Queijo', price: 2, qty: 70 },
    { id: 4, name: 'Suco de Laranja', price: 7, qty: 100 },
    { id: 5, name: 'Trento', price: 3, qty: 80 }
  ])

function getProductById(id){
  for (let product of products.value){
    if (product.id == id){
      return product
    }
  }
  return {}
}
  return { products, getProductById }
})
