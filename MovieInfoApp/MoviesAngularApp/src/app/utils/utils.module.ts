import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from './default-image.pipe';
import { SplitStringPipe } from './split-string.pipe';
import { EllipsifyPipe } from './ellipsify.pipe';



@NgModule({
  declarations: [
    DefaultImagePipe,
    SplitStringPipe,
    EllipsifyPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [DefaultImagePipe, EllipsifyPipe, SplitStringPipe]
})
export class UtilsModule { }
