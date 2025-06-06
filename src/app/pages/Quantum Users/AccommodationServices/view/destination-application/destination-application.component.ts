import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destination-application',
  standalone: false,
  templateUrl: './destination-application.component.html',
  styleUrl: './destination-application.component.css'
})
export class DestinationApplicationComponent {
  filtroActivo: string = 'todos';

  // Base de datos de destinos
  todosDestinos = [
    {
      id: 1,
      nombre: 'Cartagena de Indias',
      tipo: 'hotel',
      descripcion: 'Hotel Boutique en el corazón amurallado con piscina en la azotea y vista al mar.',
      ubicacion: 'Bolívar',
      calificacion: '4.8',
      imagen: 'https://mlqfmr3rpryd.i.optimole.com/cb:JBSP.a525/w:auto/h:auto/q:100/ig:avif/https://cartagena-tours.co/wp-content/uploads/2024/07/PSBWXEW35NALZC5CQVCARNAKHA.jpg'
    },
    {
      id: 2,
      nombre: 'Salento, Quindío',
      tipo: 'cabaña',
      descripcion: 'Encantadora cabaña con vista al Valle de Cocora y chimenea para noches frías.',
      ubicacion: 'Quindío',
      calificacion: '4.9',
      imagen: 'https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/node/article/field_image/Foto%20Cortes%C3%ADa%20Alcald%C3%ADa%20de%20Salento.jpg?h=c9f93661&itok=GOMbnlgl'
    },
    {
      id: 3,
      nombre: 'San Andrés Isla',
      tipo: 'hostal',
      descripcion: 'Hostal ecológico a 5 minutos de Spratt Bight, con hamacas y ambiente caribeño.',
      ubicacion: 'Archipiélago',
      calificacion: '4.5',
      imagen: 'https://playasdecolombia.co/wp-content/uploads/2024/02/isla-de-san-andres-playas-de-colombia-2-1200x675.webp'
    },
    {
      id: 4,
      nombre: 'Parque Tayrona',
      tipo: 'ecolodge',
      descripcion: 'Alojamiento sostenible en medio de la naturaleza, cerca de las playas más hermosas.',
      ubicacion: 'Magdalena',
      calificacion: '4.7',
      imagen: 'https://poporotours.com/wp-content/uploads/2023/06/cierre-del-parque-tayrona.webp'
    },
    {
      id: 5,
      nombre: 'Bogotá Centro',
      tipo: 'hotel',
      descripcion: 'Hotel moderno en el centro histórico con fácil acceso a museos y restaurantes.',
      ubicacion: 'Bogotá',
      calificacion: '4.6',
      imagen: 'https://blog.urbansa.co/hs-fs/hubfs/Fachadas%20coloridas%20%E2%80%93%20La%20Candelaria%20%E2%80%93%20La%20Candelaria%20en%20el%20centro%20de%20Bogot%C3%A1%20-%E2%80%AFLa%20Candelaria%20Bogot%C3%A1%20%E2%80%93%20Beneficios%20de%20vivir%20en%20el%20centro%20de%20Bogot%C3%A1%E2%80%AF.jpg?width=1400&name=Fachadas%20coloridas%20%E2%80%93%20La%20Candelaria%20%E2%80%93%20La%20Candelaria%20en%20el%20centro%20de%20Bogot%C3%A1%20-%E2%80%AFLa%20Candelaria%20Bogot%C3%A1%20%E2%80%93%20Beneficios%20de%20vivir%20en%20el%20centro%20de%20Bogot%C3%A1%E2%80%AF.jpg'
    },
    {
      id: 6,
      nombre: 'Valle de Cocora',
      tipo: 'cabaña',
      descripcion: 'Cabañas rústicas con vista panorámica a los icónicos paisajes de palmas de cera.',
      ubicacion: 'Quindío',
      calificacion: '4.9',
      imagen: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/f3/c6/55.jpg'
    }
  ];

  destinosFiltrados = this.todosDestinos;
  destinoRecomendado = "Cartagena de Indias";

  constructor(private router: Router) {
    this.obtenerDestinoRecomendado();
  }

  // Función para filtrar los destinos
  filtrarDestinos(tipo: string): void {
    this.filtroActivo = tipo;
    if (tipo === 'todos') {
      this.destinosFiltrados = this.todosDestinos;
    } else {
      this.destinosFiltrados = this.todosDestinos.filter(destino => destino.tipo === tipo);
    }
  }

  // Función para determinar el destino recomendado
  obtenerDestinoRecomendado(): void {
    // Lógica simple: recomendamos el destino mejor calificado 
    const destinosPorCalificacion = [...this.todosDestinos]
      .sort((a, b) => parseFloat(b.calificacion) - parseFloat(a.calificacion));
    
    this.destinoRecomendado = destinosPorCalificacion[0].nombre;
  }

  explorarDestinos(): void {
    this.router.navigate(['/destinos-recomendados']);
  }
}