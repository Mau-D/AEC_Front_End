//Foo.spec.js
import { shallowMount } from "@vue/test-utils";
import Foo from "../../src/components/Foo";

describe("Foo", () => {
  it("restitue un message et répond correctement à la saisie de l'utilisateur", async () => {
    const wrapper = shallowMount(Foo, {
      data() {
        return {
          message: "Hello World",
          username: "",
        };
      },
    });

    // vérifie que `message` est restitué
    expect(wrapper.find(".message").text()).toEqual("Hello World");

    // vérifie que `error` est restituée
    expect(wrapper.find(".error").exists()).toBeTruthy();

    // met à jour `username` et vérifie que `error` n'est plus restituée
    await wrapper.setData({ username: "Chosebinouche" });
    expect(wrapper.find(".error").exists()).toBeFalsy();
  });
});
