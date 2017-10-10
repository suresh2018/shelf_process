import { ImageUploadModule } from 'ng2-imageupload';
import { UploadService } from './shared/uploadService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ImageUploadModule,
    FormsModule,
    ToastModule.forRoot()
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
