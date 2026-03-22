import { Routes } from '@angular/router';

export const routes: Routes = [
     {
    path: "",
    loadComponent: () => import("./pages/home-page/home-page").then((x) => x.HomePage),
  },
   {
    path: "climate-change",
    loadComponent: () => import("./pages/climate-change/climate-change").then((x) => x.ClimateChange),
  },
  {
    path: "ozone",
    loadComponent: () => import("./pages/ozone-shield/ozone-shield").then((x) => x.OzoneShield),
  },
   {
    path: "global-warming",
    loadComponent: () => import("./pages/global-warming/global-warming").then((x) => x.GlobalWarming),
  },
    
];
