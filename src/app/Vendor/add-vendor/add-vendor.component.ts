import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class VendorComponent implements OnInit {
  vendor:Vendor;
  vendorlist  : any[];
  
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  constructor(private router: Router,
    private http: HttpClient,
    private service: Service) {
      this.vendor = new Vendor();
      this.vendorlist = [];
     }

     OnSubmit() {
      console.log("prop",this.vendor);
      console.log("prop",this.vendor.Photo);
     this.service.AddVendor(this.vendor).subscribe((result) => {
       if (result > 0) {
         const formData = new FormData();
         this.vendor.Photo = this.filesToUpload[0].name;
         formData.append('uploadedImage',this.filesToUpload[0],this.vendor.Photo);
         this.service.SaveVendorImage(formData,result).subscribe(data => {
          
           alert('Saved Successfully.');
         });       
       }
       else {
         alert("Something went wrong! Please try again.")
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
        console.log("prop",this.vendor.Photo);
    } 
    }

  ngOnInit(): void {
  }

}