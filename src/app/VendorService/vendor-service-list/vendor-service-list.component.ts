import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/Service';
import { GlobalVariable } from 'src/app/Global';

@Component({
  selector: 'app-vendor-service-list',
  templateUrl: './vendor-service-list.component.html',
  styleUrls: ['./vendor-service-list.component.scss']
})
export class VendorServiceListComponent implements OnInit{
  
  
  VendorServiceList: any[];
  // imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(private router: Router,  private http: HttpClient, private service: Service) {
    this.VendorServiceList=[];
   }

   Delete(VendorServiceId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteVendorService(VendorServiceId).subscribe(result => {
      if (result == "Success") {
      this.VendorServiceList = this.VendorServiceList.filter(
        (item) => item.Id != VendorServiceId);
      alert("Deleted Successfully");
    } else {
      alert("Something went wrong! please try again.");
    }
  });
  }
  Edit(VendorServiceId): void{
    try {
      this.router.navigateByUrl("/UpdateVendorService/" + VendorServiceId,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  View(VendorServiceId): void{
    try {
      this.router.navigateByUrl("/Viewtrip/" + VendorServiceId,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  ngOnInit(): void {
    this.service.GetAllVendorService().subscribe((result) => {
      console.log(result);
      for(let data of result)
      {
          this.VendorServiceList.push(data);   
      }     
           console.log(this.VendorServiceList);
    });
  }
  
  
  
  
  
  
  
  
  
  

}



