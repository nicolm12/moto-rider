import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouteModel } from '../../models/route.model';
import { RouteService } from '../../services/route.services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
declare var bootstrap: any;
@Component({
  selector: 'app-routes',
  templateUrl: './routes.html',
  styleUrls: ['./routes.css'],
  standalone: true,
  imports: [CommonModule, FormsModule ]
})
export class RoutesComponent {

  rutas = [
    {
      nombre: "Ruta Sierra Nevada",
      descripcion: "Un recorrido que combina el rugir del motor con la majestuosidad de montañas, ríos cristalinos y paisajes que quitan el aliento.",
      imagen: "assets/Rectangle 10.png",
      puntuacion:"4.5"
    },
    {
      nombre: "Santa Fe de Antioquía",
      descripcion: "Un trayecto corto pero lleno de curvas,Perfecta para una rodada de medio día.",
       puntuacion:"4.3"
    },
    {
      nombre: "Villa de Leyva",
      descripcion: "Una ruta llena de paisaje montañoso, aire fresco y carretera ideal para disfrutar en moto.",
       puntuacion:"4.8"
    },
    {
      nombre: "Cali-Popayan-Pasto",
      descripcion: "Una travesía larga y desafiante a través del suroccidente colombiano. Esta ruta destaca por sus extensas montañas, cambios de clima y carreteras icónicas de la región.",
       puntuacion:"4.0"
    }
  ];

  formData = {
    nombre: "",
    telefono: "",
    correo: ""
  };

  abrirModal() {
    const modal = new bootstrap.Modal(document.getElementById("modalUnirse"));
    modal.show();
  }

  enviar() {
    const toastEl = document.getElementById("toastExito");
    const toast = new bootstrap.Toast(toastEl);
    toast.show();

    this.formData = { nombre: "", telefono: "", correo: "" };
    document.querySelector(".modal.show")?.classList.remove("show");
  }
}
