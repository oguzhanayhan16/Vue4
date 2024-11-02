<template>
    <section>
      <h1>{{ experience.name }}</h1>
      <img :src="`/images/${experience.image}`" :alt="experience.name" />
      <p>{{ experience.description }}</p>
    </section>
  </template>
  
  <script>
  import sourceData from '@/data.json';
  
  export default {
    props: {
      id: { type: Number, required: true },
      experienceSlug: { type: String, required: true }
    },
    computed: {
      destination() {
        return sourceData.destinations.find(destination => destination.id === this.id);
      },
      experience() {
        // experience metodunu computed olarak değiştiriyoruz
        return this.destination ? this.destination.experiences.find(experience => experience.slug === this.experienceSlug) : null;
      }
    }
  }
  </script>
  