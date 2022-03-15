const routes = [
  {
    path: "/",
    component: () => import("layouts/principal.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "registrarse", component: () => import("pages/Registrarse.vue") },
      { path: "comovotar", component: () => import("pages/ComoVotar.vue") },
      { path: "contacto", component: () => import("pages/Contacto.vue") },
      { path: "acerca", component: () => import("pages/Acerca.vue") },
      { path: "resultado", component: () => import("pages/Resultado.vue") },
      { path: "votar", component: () => import("pages/Votar.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
