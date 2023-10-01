import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxAutocompleteModule, IgxAvatarModule, IgxButtonModule, IgxCardModule, IgxCheckboxModule, 
         IgxChipsModule, IgxComboModule, IgxDateTimeEditorModule, IgxDialogModule, IgxDividerModule, 
         IgxDropDownModule, IgxExpansionPanelModule, IgxGridModule, IgxIconModule, IgxInputGroupModule, 
         IgxListModule, IgxMaskModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxProgressBarModule, 
         IgxRippleModule, IgxSelectModule, IgxSliderModule, IgxStepperModule, IgxSwitchModule, IgxTabsModule, 
         IgxToggleModule, IgxTreeModule 
       } 
from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    IgxCardModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxDateTimeEditorModule,
    
    IgxListModule,
    IgxNavbarModule,
    IgxToggleModule,
    IgxNavigationDrawerModule,
    IgxMaskModule,
    IgxExpansionPanelModule,
    IgxTreeModule,
    IgxSwitchModule,
    IgxSliderModule,
    IgxDividerModule,
    IgxChipsModule,
    IgxSelectModule,
    IgxComboModule,
    IgxStepperModule,
    IgxCheckboxModule,
    IgxAutocompleteModule,
    IgxDropDownModule,
    IgxProgressBarModule,
    IgxGridModule,
    IgxAvatarModule,
    IgxTabsModule,
    IgxDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
