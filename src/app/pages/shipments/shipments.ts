import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shipments',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './shipments.html',
  styleUrl: './shipments.css'
})
export class ShipmentsComponent {
  shipments = [
    { id: 'ENV-001', destination: 'Santiago Central', status: 'En Tránsito', date: '2026-09-14' },
    { id: 'ENV-002', destination: 'Valparaíso', status: 'Entregado', date: '2026-09-14' },
    { id: 'ENV-003', destination: 'Concepción', status: 'Pendiente', date: '2026-09-15' }
  ];
}