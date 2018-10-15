import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination"; // <-- import the module

import { AppComponent } from "./app.component";
import { GameControllerComponent } from "./game-controller/game-controller.component";
import { OddComponent } from "./odd/odd.component";
import { EvenComponent } from "./even/even.component";
import { UploadListComponent } from "./uploads/upload-list/upload-list.component";
import { UploadFormComponent } from "./uploads/upload-form/upload-form.component";
import { TablesComponent } from "./tables/tables.component";
import { DataTableModule } from "angular-6-datatable";
import { NgxPaginationComponent } from "./ngx-pagination/ngx-pagination.component";

const appRoutes: Routes = [
  { path: "controller", component: GameControllerComponent },
  { path: "tables", component: TablesComponent },
  { path: "ngx-pagination", component: NgxPaginationComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    GameControllerComponent,
    OddComponent,
    EvenComponent,
    UploadListComponent,
    UploadFormComponent,
    TablesComponent,
    NgxPaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    NgxPaginationModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
