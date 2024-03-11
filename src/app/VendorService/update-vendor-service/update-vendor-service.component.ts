import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { VendorService } from 'src/app/Class';
import { Router } from '@angular/router';
import { Service } from 'src/app/Service';


@Component({
  selector: 'app-update-vendor-service',
  templateUrl: './update-vendor-service.component.html',
  styleUrls: ['./update-vendor-service.component.scss']
})
export class UpdateVendorServiceComponent implements OnInit{

  vendorService:VendorService;
  // aboutlist  : any[];
  VendorServiceId: any;
  // uploadResult: any;
  // filesToUpload: Array<File>;
  // selectedFileNames: string[] = [];
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: Service) {
      this.vendorService = new VendorService();
      // this.aboutlist = [];
  
      this.route.params.subscribe((params) => {
        this.VendorServiceId = params['VendorServiceId'];
  
        this.service.GetVendorServiceById(this.VendorServiceId).subscribe((result) => {
       
          this.vendorService = result;
          console.log(this.vendorService);
  
        });
      });
     }

     OnSubmit(){
      debugger;
            console.log(this.vendorService);
            this.service.UpdateVendorService(this.vendorService).subscribe((result) => {
              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } 
            else {
            //     const formData = new FormData();
            //     // this.alert.Photo = this.filesToUpload[0].name;
            //     // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
            //     // this.service.SaveBlogImage(formData,result).subscribe(data => 
            //       {
                 
                   alert('Saved Successfully.');
            
                  }
            //     // );         
            //  }
           
              
            });
          }
          ngOnInit(): void {
          }

}




