<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-btn color="primary" label="Votacion" href="#" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

  <div
    :class="`q-mt-md ${$q.screen.xl ? 'hidden' : ''}`"
    style="top: 0; right: 8px; transform: translateY(-50%)"
  >
    <div class="q-mt-md">
      <q-btn href="#">
        <q-fab v-model="fab1" label="Inicio" color="blue" icon="home"> </q-fab>
      </q-btn>
    </div>

    <div class="q-mt-md">
      <q-btn href="#/votar">
        <q-fab v-model="fab1" label="Votar" color="blue" icon="assignment">
        </q-fab
      ></q-btn>
    </div>

    <div class="q-mt-md">
      <q-btn href="#/resultado">
        <q-fab v-model="fab1" label="Resultado" color="blue" icon="timeline">
        </q-fab
      ></q-btn>
    </div>
  </div>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Registrarse",

    icon: "school",
    link: "#/registrarse"
  },
  {
    title: "Acerca de",

    icon: "code",
    link: "#/acerca"
  },
  {
    title: "Como votar?",

    icon: "chat",
    link: "#/comovotar"
  },
  {
    title: "Contacto",

    icon: "record_voice_over",
    link: "#/contacto"
  }
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
    };
  }
});
</script>
