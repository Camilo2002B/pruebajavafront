import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PlayListService } from '../Service/play-list.service';
import { PlayList } from '../model/Play-List';

@Component({
  selector: 'app-lista-reproducciones',
  templateUrl: './lista-reproducciones.component.html',
  styleUrls: ['./lista-reproducciones.component.css'],
  providers: [MessageService]
})
export class ListaReproduccionesComponent implements OnInit{
  
  playList!: PlayList[];
  nombrePlayList: string = '';
  cols: any[];
  items: MenuItem[];

  constructor(private messageService: MessageService, private router:Router, private playListService:PlayListService) {

  }

  addSingle(severity: string, summary: string, detail: string) {
    this.messageService.add({severity:severity, summary:summary, detail:detail});
  }

  eliminarPlayList(nombre: string): void {
    this.playListService.deleteListaDeReproduccion(nombre).subscribe({
      next: () => {
        // Llamada exitosa: obtener los medicamentos y mostrar el mensaje de éxito
        this.obtenerMedicamentos();
        this.addSingle('success', 'Registro eliminado', 'Registro eliminado exitosamente');
      },
      error: (error) => {
        // Llamada fallida: manejar el error y mostrar el mensaje correspondiente
        console.error(error); // Imprimir el error para depuración
        if (error.message === 'Lista de reproducción no encontrada') {
          this.addSingle('error', 'Error en eliminación', 'No se encuentra el medicamento');
        } else {
          this.addSingle('error', 'Error en eliminación', 'No se puede borrar el medicamento por el registro de ventas');
        }
      }
    });
  }

  ngOnInit(): void {
    this.obtenerMedicamentos();

    this.cols = [
      {field: "id", header:"ID"},
      {field: "nombre", header:"NOMBRE"},
      {field: "descripcion", header:"DESCRIPCION"},
    ]

    this.items = [
      {
        label : "Nuevo",
        icon : 'pi pi-fw pi-plus',
        //command : () => this.showSaveDialog(),
      }
    ]
  }

  private obtenerMedicamentos() {
    this.playListService.obtenerListaDeReproduccion().subscribe(dato =>{
      this.playList = dato;
    })
  }

  public obtenerMedicamentosByName() {
    this.playListService.obtenerMedicamentosByName(this.nombrePlayList).subscribe({
      next: (dato) => {
        this.playList = dato;
      },
      error: (err) => {
        if (err.status === 404) {
          // Si el error es 404, vaciar la lista
          this.playList = [];
          this.addSingle('error', 'Error en la busqueda', 'No se encuentra la PlayList');
        }
        // También puedes agregar un mensaje de error adicional si lo deseas
        console.error('Error al obtener medicamentos:', err);
      }
    });
  }



}
