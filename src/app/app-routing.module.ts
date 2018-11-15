import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LayoutComponent } from './HomeUI/layout/layout.component';
import { HearderComponent } from './HomeUI/hearder/hearder.component';
import { FooterComponent } from './HomeUI/footer/footer.component';
import { LoginComponent } from './HomeUI/login/login.component';
import { OemPartenersComponent } from './HomeUI/oem-parteners/oem-parteners.component';

const routes: Routes = [
    { path: "", redirectTo: "/layout", pathMatch: "full" },
    { path: "layout", component: LayoutComponent },
    { path: "login", component: LoginComponent},
    { path: "layout/oemParteners", component: OemPartenersComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponent = [
    LayoutComponent,
    HearderComponent,
    FooterComponent,
    LoginComponent,
    OemPartenersComponent
];