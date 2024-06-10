import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet ,RouterLinkActive,ActivatedRoute} from '@angular/router';
import { Observable, from } from 'rxjs';
import { Alunni } from '../alunni';
import { log } from 'console';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  @Input() x?:number;
  data ?: Observable<Response>
  id ?: number;
  alunni?:Alunni;


  constructor(private route: ActivatedRoute){

    this.fetchData(this);
  }

  fetchData(elem:ListaComponent) {

    //this.data = from(fetch('http://localhost:8081/api/all'));

    this.data?.subscribe({ //parsing di Observable con next (response) accede ai valori response.json()  accede ai dati in lettura
      next(response) {

        response.json().then((ele)=>{

          elem.alunni=ele;
          console.log(ele);



        });
      },
      error(err) { console.error('Error: ' + err); },

      complete() { console.log('Completed'); }

    });

  }

  ngOnInit() {

      this.route.params.forEach((x)=>{

        this.id = (x['id']);
        this.data = from(fetch('http://localhost:8081/api/student/'+this.id))

      }

    );
    this.fetchData(this);
  }

}
