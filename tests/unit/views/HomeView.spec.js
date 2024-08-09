import { mount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";


describe("Tests de vista Contact", () => {
    it("Test1 - Snapshot de la vista Contact  se crea correctamente", () => {
    
      const wrapper = mount(HomeView);  // Seleccionar el componente que será puesto a prueba //
      expect(wrapper.html()).toMatchSnapshot();  // Realiza una afirmación sobre la prueba si  hay Match pasa la prueba //
    });
  
  });
  