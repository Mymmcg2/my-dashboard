import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { DashboardSaleComponent } from "./dashboard-sale/dashboard-sale.component";
import { TableComponent } from "./table/table.component";

const appRoutes: Routes = [
    {path:'' , redirectTo:'/dashboard', pathMatch: 'full'},
    {path:'dashboard' , component: DashboardSaleComponent},
    {path:'table' , component: TableComponent},

]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}