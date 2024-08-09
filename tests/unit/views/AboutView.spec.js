import { mount } from "@vue/test-utils";
import AboutView from "@/views/AboutView.vue";

describe("Tests de vista About", () => {
    it("Test1 - El snapshot de la vista About crea Correctamente", () => {
      const wrapper = mount(AboutView);  // Seleccionar el componente que será puesto a prueba //
      expect(wrapper.html()).toMatchSnapshot(); // Realiza una afirmación sobre la prueba si  hay Match pasa la prueba //
    });
  
  });
  