import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportService } from '../../services/report';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reportes.page.html',
  styleUrl: './reportes.page.css'
})
export class ReportesPage implements OnInit {

  kpis: any = {
    totalEventos: 0,
    creados: 0,
    aceptados: 0,
    enBodega: 0,
    enRuta: 0,
    entregados: 0,
    cancelados: 0
  };

  topServices: any = {
    servicios: {}
  };

  errorMessage = '';

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.cargarReportes();
  }

  cargarReportes(): void {

    this.errorMessage = '';

    this.reportService.getKpis().subscribe({
      next: (data) => {
        console.log('KPIs recibidos:', data);
        this.kpis = data;
      },
      error: (error) => {
        console.error('Error obteniendo KPIs:', error);
        this.errorMessage = 'No se pudieron cargar los KPIs.';
      }
    });

    this.reportService.getTopServices().subscribe({
      next: (data) => {
        console.log('Top servicios recibidos:', data);
        this.topServices = data;
      },
      error: (error) => {
        console.error('Error obteniendo top servicios:', error);
        this.errorMessage = 'No se pudieron cargar los servicios.';
      }
    });
  }

  get serviciosArray(): { nombre: string; cantidad: number }[] {

    if (!this.topServices?.servicios) {
      return [];
    }

    return Object.entries(this.topServices.servicios).map(
      ([nombre, cantidad]) => ({
        nombre,
        cantidad: Number(cantidad)
      })
    );
  }
}