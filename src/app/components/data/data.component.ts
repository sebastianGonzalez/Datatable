import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
/*Tipos de datos*/
export  interface PeriodicElement {
  Fecha: string;
  Estado: string;
  Numero: number;
  Titulo: string;
}

/*Array con los datos de la tabla*/

const ELEMENT_DATA: PeriodicElement [] = [
  {Fecha: '22 Marzo'  , Estado: 'En lectura' , Numero: 1 , Titulo: 'El desarrollo de software' },
  {Fecha: '10 Febrero' , Estado: 'Abierto' , Numero: 4 , Titulo: 'Lo mejor del pais' },
  {Fecha: '11 Enero' , Estado: 'Cerrado' , Numero: 6 , Titulo: 'Las actuales costumbres' },
  {Fecha: '21 Mayo' , Estado: 'Terminado' , Numero: 9 , Titulo: 'Bogota actualmente' },
  {Fecha: '12 Diciembre' , Estado: 'En curso' , Numero: 10 , Titulo: 'Colombia frente al COVID' },
  {Fecha: '25 Abril' , Estado: 'Disponible' , Numero: 2 , Titulo: 'Apertura de los aeropuertos' },
  {Fecha: '30 Agosto' , Estado: 'Caido' , Numero: 4. , Titulo: 'Paseos en carreteras' },
  {Fecha: '2 Junio' , Estado: 'No disponible' , Numero: 5 , Titulo: 'La era de los videojuegos' },
  {Fecha: '20 Julio' , Estado: 'ha sido abierto' , Numero: 8 , Titulo: 'La inteligencia artificial' },
  {Fecha: '7 Octubre' , Estado: 'No abierto' , Numero: 7 , Titulo: 'El poderoso lenguaje python' },
  {Fecha: '15 Noviembre' , Estado: 'Pendiente' , Numero: 3 , Titulo: 'VS Code y sus ventajas' },
  {Fecha: '30 Agosto' , Estado: 'Cancelado' , Numero: 11. , Titulo: 'Las carreras tecnologicas' },
  {Fecha: '2 Junio' , Estado: 'En curso' , Numero: 12 , Titulo: 'La importancia de estudiar' },
  {Fecha: '20 Julio' , Estado: 'Privado' , Numero: 14 , Titulo: 'Lo lindo de la programacion' },
  {Fecha: '7 Octubre' , Estado: 'Publico' , Numero: 15 , Titulo: 'La ingenieria social' },
  {Fecha: '15 Noviembre' , Estado: 'Compartido' , Numero: 13 , Titulo: 'Analisis de datos el hoy' },
  {Fecha: '30 Agosto' , Estado: 'En lectura' , Numero: 17 , Titulo: 'Los empleos mas demandados' },
  {Fecha: '2 Junio' , Estado: 'Disponible' , Numero: 18 , Titulo: 'Robotica y software' },
  {Fecha: '20 Julio' , Estado: 'Actualmente disponible' , Numero: 20 , Titulo: 'Los videojuegos' },
  {Fecha: '7 Octubre' , Estado: 'Pendiente' , Numero: 21 , Titulo: 'Programacion en videojuegos' },
  {Fecha: '15 Noviembre' , Estado: 'En curso' , Numero: 22 , Titulo: 'Los mejores desarrolladores' },
  {Fecha: '30 Agosto' , Estado: 'Terminado' , Numero: 23. , Titulo: 'Seguridad informatica' },
  {Fecha: '2 Junio' , Estado: 'No disponible' , Numero: 25 , Titulo: 'JavaScript y sus fortalezas' },
  {Fecha: '20 Julio' , Estado: 'No ha sido abierto' , Numero: 19 , Titulo: 'Nos conviene estudiar' },
  {Fecha: '7 Octubre' , Estado: 'Completado' , Numero: 24 , Titulo: 'Feliz tarde' },
  
];

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  displayedColumns: string[] = ['Fecha', 'Estado', 'Numero', 'Titulo', 'Opcion'];
  dataSource = new MatTableDataSource <PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
