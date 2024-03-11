import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { VendorService} from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-vendor-service',
  templateUrl: './add-vendor-service.component.html',
  styleUrls: ['./add-vendor-service.component.scss']
})
export class AddVendorServiceComponent implements OnInit{
  vendorservice:VendorService;
  VendorServicelist:any[];
  AddVendorService: any;


constructor(
  private router:Router,
  private http:HttpClient,
  private service: Service){
    this.vendorservice = new VendorService();
  // this.student=new Student();
  this.VendorServicelist=[];

  
}



OnSubmit() {
  console.log("prop",this.vendorservice);
 this.service.AddVendorService(this.vendorservice).subscribe((result) => {
   if (result > 0) {
   
      
       alert('Saved Successfully.');
        
   }
   else {
     alert("Something went wrong! Please try again.")
   }
 });

}
  

  ngOnInit(): void {
    
  }

}


