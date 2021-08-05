import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BUTTON_ROUTES } from "./button.routes";
import { ButtonComponent } from "./button/button.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(BUTTON_ROUTES)
    ],
    declarations: [
        ButtonComponent
    ]

})
export class ButtonModule {}