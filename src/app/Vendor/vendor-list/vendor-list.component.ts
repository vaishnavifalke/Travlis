import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariable } from 'src/app/Global';
import { Service } from 'src/app/Service';
@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {
  VendorList:any[];
  imgPath: string = GlobalVariable.BASE_API_URL;
  constructor(private router: Router,  private http: HttpClient, private service: Service) {
    this.VendorList=[]
   }

   Delete(VendorId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteVendor(VendorId).subscribe(result => {
      if (result == "Success") {
      this.VendorList = this.VendorList.filter(
        (item) => item.Id != VendorId);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
  Edit(VendorId): void{
    try {
      this.router.navigateByUrl("/updatevendor/" + VendorId);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  View(VendorId): void{
    try {
      this.router.navigateByUrl("/Viewvendor/" + VendorId,{skipLocationChange:true});
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  ngOnInit(): void {
    this.service.GetAllVendor().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.VendorList.push(data);   
      }     
           //console.log(this.VendorList);
    });
  }

}
