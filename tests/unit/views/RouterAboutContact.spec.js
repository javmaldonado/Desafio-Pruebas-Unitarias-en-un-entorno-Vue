import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
// No olivdar importar los views necesarios //
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";

// Test para corroborar la existencia de la ruta de la vista About //
describe("Tests de vista About", () => {
  it("Test1 - Probar la existencia del componente About en la ruta", async () => {
    const routes = [
      // Definir las rutas que se utilizaran en el test //
      {
        path: "/about",
        name: "about",
        component: AboutView,
      },
    ];
    const router = createRouter({
      history: createWebHistory(),
      routes,
    });

    router.push("/about"); // Push para navegar hacia la ruta deseada //

    await router.isReady(); // Espera que la ruta este lista //

    const wrapper = mount(AboutView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.exists()).toBe(true); // Verifica que el componente montado existe //
  });
});

// Test para corroborar la existencia de la ruta de la vista Contact //
describe("Tests de vista Contact", () => {
  it("Test2 - Probar la existencia del componente en la ruta", async () => {
    const routes = [
      {
        path: "/contact",
        name: "contact",
        component: ContactView,
      },
    ];

    const router = createRouter({
      history: createWebHistory(),
      routes,
    });

    router.push("/contact");

    await router.isReady();

    const wrapper = mount(ContactView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.exists()).toBe(true);
  });
});
