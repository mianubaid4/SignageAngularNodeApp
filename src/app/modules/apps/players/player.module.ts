import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerRoutingModule } from './player-routing.module';
import { TemplateDesignComponent } from './template-design/template-design.component';

import {AccordionModule} from 'primeng/accordion';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MenuModule} from 'primeng/menu';
import {SidebarModule} from 'primeng/sidebar';
import {DragDropModule} from 'primeng/dragdrop';
import { FormsModule } from '@angular/forms';
import {EditorModule} from 'primeng/editor';
import {DropdownModule} from 'primeng/dropdown';
// import {DragDropModule} from '@angular/cdk/drag-drop';
import {ColorPickerModule} from 'primeng/colorpicker';
import { AngularDraggableModule } from 'angular2-draggable';
import {InputTextModule} from 'primeng/inputtext';
import {MatGridListModule} from '@angular/material/grid-list';
import {DialogModule} from 'primeng/dialog';
// import { ResizableModule } from 'angular-resizable-element';
import { NoSanitizePipe } from '../custom-pipes/nosanitizerpipe';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';
import { PlayerComponent } from './player.component';



@NgModule({
  declarations: [
    TemplateDesignComponent,
    NoSanitizePipe,
    PlayerComponent 
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    AccordionModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    MenuModule,
    SidebarModule,
    DragDropModule,
    FormsModule,
    EditorModule,
    DropdownModule,
    ColorPickerModule,
    AngularDraggableModule,
    InputTextModule,
    MatGridListModule,
    DialogModule,
  InlineSVGModule,
 
    

  ],
})
export class PlayerModule {}
