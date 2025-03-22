import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Vehicle, VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{

private vehicleService = inject(VehicleService);
vehicles = this.vehicleService.vehicles;


  ngOnInit(): void {


}


// Signals to support the template
isLoading = this.vehicleService.isLoading;
errorMessage = this.vehicleService.errorMessage;
vehicleModels = this.vehicleService.vehicleModels
selectedModel = this.vehicleService.selectedModel;
}
