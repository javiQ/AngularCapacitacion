import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes : string [] =['spiderman','Hulk','Ant-man','Capitan America'];
   heroreB : string ='';
   
  borrando(){
    console.log("Borrando heroe");
    this.heroreB = this.heroes.shift() ||'';
    
  }
}
