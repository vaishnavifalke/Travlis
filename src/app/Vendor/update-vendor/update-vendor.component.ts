import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-update-vendor',
  templateUrl: './update-vendor.component.html',
  styleUrls: ['./update-vendor.component.scss']
})
export class UpdatevendorComponent implements OnInit {
  Vendor:Vendor;
  aboutlist  : any[];
  Id: any;
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  vendor: Vendor;
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: Service) { 
      this.vendor = new Vendor();

      this.route.params.subscribe((params) => {
        this.Id = params['VendorId'];
  
        this.service.GetVendorById(this.Id).subscribe((result) => {
       
          this.vendor = result;
          console.log(this.vendor);
  
        });
      });
    }


    OnSubmit(){
      debugger;
            console.log(this.vendor);
            this.service.UpdateVendor(this.vendor).subscribe((result) => {
              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } else {
                const formData = new FormData();
                this.vendor.Photo = this.filesToUpload[0].name;
                formData.append('uploadedImage',this.filesToUpload[0],this.vendor.Photo);
                this.service.SaveVendorImage(formData,result).subscribe(data => {
                 
                  alert('Saved Successfully.');
                });         
             }            
            });
          }
        
          fileChangeEvent(fileInput: any){
          this.filesToUpload = <Array<File>>fileInput.target.files;
          this.selectedFileNames = [];
          for (let i = 0; i < this.filesToUpload.length; i++)
          {
              this.selectedFileNames.push(this.filesToUpload[i].name);
              this.vendor.Photo = this.filesToUpload[i].name;
          } 
          }

  ngOnInit(): void {
  }

}
