# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

React Oppgave 1: Restaurantmenyen

Opprett en menyvisning med kort (cards)
Oppgaveinstruksjoner
Opprett prosjektet:
Start et nytt React-prosjekt ved hjelp av Vite

Opprett data:
Bruk dette arrayet med matretter som data i applikasjonen. Dataene representerer menyen for en restaurant og inneholder informasjon om rettens tittel, pris, ingredienser, kategori og en unik ID.

```
const meny = [
  {
    id: 1,
    tittel: "Spaghetti Bolognese",
    pris: "159 kr",
    ingredienser: "Spaghetti, kjøttsaus, parmesan",
    kategori: "Hovedrett",
  },
  {
    id: 2,
    tittel: "Kremet Kyllingsuppe",
    pris: "129 kr",
    ingredienser: "Kylling, fløte, gulrøtter, selleri",
    kategori: "Forrett",
  },
  {
    id: 3,
    tittel: "Margarita Pizza",
    pris: "169 kr",
    ingredienser: "Tomatsaus, mozzarella, basilikum",
    kategori: "Hovedrett",
  },
  {
    id: 4,
    tittel: "Sushi Mix",
    pris: "229 kr",
    ingredienser: "Laks, tunfisk, reker, ris",
    kategori: "Hovedrett",
  },
  {
    id: 5,
    tittel: "Cæsarsalat",
    pris: "139 kr",
    ingredienser: "Romanosalat, kylling, parmesan, dressing",
    kategori: "Forrett",
  },
  {
    id: 6,
    tittel: "Brownie med Is",
    pris: "89 kr",
    ingredienser: "Brownie, vaniljeis, sjokoladesaus",
    kategori: "Dessert",
  },
  {
    id: 7,
    tittel: "Taco Tallerken",
    pris: "199 kr",
    ingredienser: "Kjøttdeig, mais, ost, guacamole",
    kategori: "Hovedrett",
  },
  {
    id: 8,
    tittel: "Pannekaker med Syltetøy",
    pris: "99 kr",
    ingredienser: "Pannekaker, jordbærsyltetøy, sukker",
    kategori: "Dessert",
  },
  {
    id: 9,
    tittel: "Reker med Sitron",
    pris: "149 kr",
    ingredienser: "Reker, sitron, dill, brød",
    kategori: "Forrett",
  },
  {
    id: 10,
    tittel: "Entrecôte med Grønnsaker",
    pris: "289 kr",
    ingredienser: "Entrecôte, asparges, poteter, peppersaus",
    kategori: "Hovedrett",
  },
];
```

Bygg komponentene:

Hovedkomponenten (App): Denne komponenten importerer menydata og sender dem videre som props til en underkomponent.
Listekomponent (Menu): Denne komponenten mottar matrettene som props og viser dem i en liste.
Kortkomponent (Dish): Denne komponenten mottar data for én matrett som props og viser dem i et kortformat. Bruk feltene for tittel, pris, ingredienser og kategori i visningen.
Legg til styling:

Bruk CSS Modules for å style applikasjonen.
Lag et grid-layout for menyen slik at matrettene vises i et oversiktlig format.
Hvert kort skal ha tydelig avgrensing, med rammer, skygger og en lett tilgjengelig fontstil.
Sørg for at tittel, pris og ingredienser er tydelig adskilt og visuelt tiltalende.
Lever inn link til GitHub Repo + link til GitHub pages

---

File structure:

```
restaurantmenu/
├── dist
├── node_modules
├── public/
│   └── assets/
│       ├── 1.webp
│       ├── 2.webp
│       ├── 3.webp
│       ├── 4.webp
│       ├── 5.webp
│       ├── 6.webp
│       ├── 7.webp
│       ├── 8.webp
│       ├── 9.webp
│       ├── 10.webp
│       └── favicon.png
├── src/
│   ├── data/
│   │   └── menuData.js
│   ├── components/
│   │   ├── Menu/
│   │   │   ├── Menu.jsx
│   │   │   └── Menu.css
│   │   └── Dish/
│   │       ├── Dish.jsx
│   │       └── Dish.css
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```
