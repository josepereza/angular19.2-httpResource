import { Component, inject } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pageTitle = "StarWars Vehicles";
  router=inject(Router)
  // Injected services
  private vehicleService = inject(VehicleService);

  // Signals to support the template
  vehicles = this.vehicleService.vehicles;
  isLoading = this.vehicleService.isLoading;
  errorMessage = this.vehicleService.errorMessage;
  vehicleModels = this.vehicleService.vehicleModels
  selectedModel = this.vehicleService.selectedModel;
  details(name:string){
    this.vehicleService.selectedModel.set(name)
    this.router.navigate(['details',name])
  }
}
