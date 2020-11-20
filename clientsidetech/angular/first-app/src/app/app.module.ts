import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { StyleDemoComponent } from './style-demo/style-demo.component';
import { CommonModule } from '@angular/common';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { StringLengthPipe } from './pipes/stringtlengthpipe';
import { SmallestPipe } from './pipes/smallestpipe';
import { SubstringPipe } from './pipe-demo/substring';
import { FormTemplatedrivenComponent } from './form-templatedriven/form-templatedriven.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindComponent,
    PropertyBindingComponent,
    TwoWayComponent,
    StyleDemoComponent,
    PipeDemoComponent,
    StringLengthPipe,
    SmallestPipe,
    SubstringPipe,
    FormTemplatedrivenComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
