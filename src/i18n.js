import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        aboutMe: "Hello, my name is Helton, I'm a software developer :)",
        myWork: "Get to know me",
        myFunction: "About me",
        aboutMeExt:
          "My name is Helton, I have experience in software development, mainly front-end. I also have knowledge in back-end and embedded systems. I am passionate about technology and computers. I'm always looking for personal and technical improvement, taking courses and trying to contribute to open-source projects.",
        recentWorksTitle: "Recent works",
        workOngName: "NGO Amaar",
        workOng:
          "Volunteer work carried out for the NGO Amaar. Technologies used: Vue.js, Vuetify, Vue Router and CSS",
        goTo: "Go to",
        workViso:
          "E-commerce developed on the Magento platform, using PHP, HTML, CSS, SAAS, Jquery and Javascript",
        workMentor: "Test project carried out with Vue.js 3 and Vuex 4",
        letsWork: "Let's work together?",
        contact: "Get in touch",
        developedBy: "Developed by",
        linkHome: "Home",
        linkAbout: "About me",
        linkWork: "Work",
        linkBlog: "Blog",
        companiesWorked: "Companies I created projects for",
      },
    },
    pt: {
      translation: {
        aboutMe: "Olá, meu nome é Helton, sou desenvolvedor de sistemas :)",
        myWork: "Conheça meu trabalho",
        myFunction: "Sobre mim",
        aboutMeExt:
          "Meu nome é Helton, tenho experiencia em desenvolvimento de software, principalmente front-end. Também tenho conhecimento em back-end e sistemas embarcados. Sou apaixonado por tecnologia e informáticaEstou sempre buscando meu aperfeiçoamento pessoal e técnico, fazendocursos e tentando contribuir com projetos open-source.",
        recentWorksTitle: "Trabalhos recentes",
        workOngName: "ONG Amaar",
        workOng:
          "Trabalho voluntário realizado para a ONG Amaar. Tecnologias utilizadas: Vue.js, Vuetify, Vue Router e CSS",
        goTo: "Ir para",
        workViso:
          "Loja virtual desenvolvida na plataforma Magento, utilizando PHP, HTML, CSS, SAAS, Jquery e Javascript",
        workMentor: "Projeto teste realizado com Vue.js 3 e Vuex 4",
        letsWork: "E aí, vamos trabalhar juntos?",
        contact: "Entre em contato",
        developedBy: "Desenvolvido por",
        linkHome: "Início",
        linkAbout: "Sobre mim",
        linkWork: "Trabalhos",
        linkBlog: "Blog",
        companiesWorked: "Empresas para quem já prestei serviços",
      },
    },
  },
  lng: "pt",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
