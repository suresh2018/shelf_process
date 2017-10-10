import { UploadService } from './shared/uploadService';
import { Component, ViewContainerRef } from '@angular/core';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';
import { RequestOptions } from "@angular/http/http";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private uploadService: UploadService, private toastr: ToastsManager,
    private _vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  mastersrc: any;
  shelfiesrc: any;
  shelfGuid = 'C236C888-C28E-4CCB-8D8C-6C0BEED20F5D';
  token = 'iXdW7kHJO2rkIBT2EbfTM4j1zStbI3ckG79Pd2KqyPe-QekmcBdbuUNcRI5xgOC4csBWWloanyequmAZk_gmh1BfOclspqIenPi2IUcRGzNOLAxLqS9t5KxscP6xVjnZvkvgXyvrISSdBK-vvKzP1fHQjIvzHjpNEQ7E_Zgq_yrvaHysJBREh2bN8W2VR3fh2iMucxLwFRrLXaLzcLagPFqgtS22OWSpJvWjf9RuHNuIBildae2jMzWnBwM0KbrNWeUGKvrFRmnyGMdrKGJKXAzOMGdafZTM6AvTmYrIuN6qyHIYOm-lCwPWNPozA3dPAi3A2RYexqq194KTnXbI_S4AKl07Ssdb-ahSGKWfbqL_zBH48a6CQkCJ4bKP9EyEfDzEV9BL_4ujLOEpDYWvCrFW1DcSndYhzajH6DVcrnAv6BvBEoogJVYiHsd0smwJkyCKm7rYLsOFOei-pTKsx3y5wubIOcT0dtKu-mLIBZ9O-GOAQmdhHEnFZ1WJgWH-XVBovDCDerMQJ8XbAj9lZaJABxvlVgkPI_BKadc7L60';  // resizeOptions: ResizeOptions = {
  //token = 'IXVtsE-PEwvdBo15fKau16OzOKkyLajl7-LiAm3fOvO5TeK89mmKdf4E7sNgq6ufD9O7C3YfIkP_0396A1KeICrJWTtqshlEjfWa7Z98QgE9c6GyohJXTl8oyRWYUicb3D0IjUnY18X0NBAUbBjtxTzR85Fi3McX_9Z2lwdaedNj8kUol8BBq-fBE_KmjbIcJ0gZXB2ibxKMcQ857b50QPENjvSIXCdyGx2EUH4GIqf3CNAqoHVCLDf111z5RtCbM6CDylzPdqxxC59z7bvIhMPEPcY9sTwRaWSYIpSz8jqQEu6f09ebbD7fxXcbYw1Ged-1VFAoZumHpebJWdxue-feCl4izRhRV6gInHUyzQJoTCgbFEkBF3AZkYI3qQ_gb761FVAhHrwSqKtNnQ9aL57f3iXFIGnCpA4DHg8OftaiIzw9oMMf-RHqU3ll5-5hVOYw7C4L94b87xiUI26Mz291V4YZeZ6rupNNUaohazqTyY-a_8F5jjbp_352jSkq7Qr_wUDeZRmJGveloaDeiS6BhG3svGY47iocEwOgU-U';
  //   resizeMaxHeight: 308,
  //   resizeMaxWidth: 300
  // };
  selectedMaster(imageResult: ImageResult) {
    debugger
    // this.mastersrc = imageResult.resized
    //   && imageResult.resized.dataURL
    //   || imageResult.dataURL;
    this.mastersrc = imageResult.file;
  }
  selectedShelf(imageResult: ImageResult) {
    debugger
    this.shelfiesrc = imageResult.file;
  }
  masterSubmit() {
    var data = {
      "token": this.token,
      "masterImage": this.mastersrc,
      "shelfguid": this.shelfGuid
    }
    this.uploadService.uploadMasterImage(data)
      .finally(() => {
      })
      .subscribe(
      data => {
        this.toastr.success(data.Result);
      },
      error => {
        //this.shlefImageDetails = [];
        this.toastr.error('Master image upload failed');
      });
  }
  shelfSubmit() {
    var data = {
      "token": this.token,
      "shelfimage": this.shelfiesrc,
      "shelfguid": this.shelfGuid
    }
    // let token = this.token;
    this.uploadService.uploadShelfImage(data)
      .finally(() => {
      })
      .subscribe(
      data => {
        this.toastr.success(data.Result);
      },
      error => {
        //this.shlefImageDetails = [];
        this.toastr.error('Shelf image upload failed');
        //console.log(error);;
      });
  }

  // headers() {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('authentication', ``);
  //   let options = new RequestOptions({ headers: headers });
  // }





}
