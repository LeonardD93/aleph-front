<template>
  <Header />
  <HeroSection />
  <ServicesSection />
  <ConsultSection />
  <BackgroundForm />
  <Footer />

</template>

<script>
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import Footer from './components/Footer.vue';
import ConsultSection from './components/ConsultSection.vue';
import BackgroundForm from './components/BackgroundForm.vue';


export default {
  components: {
    Header,
    HeroSection,
    ServicesSection,
    ConsultSection,
    BackgroundForm,
    Footer,
  },
};
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
}
</style>
