import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-locales-por-categoria',
  templateUrl: './locales-por-categoria.page.html',
  styleUrls: ['./locales-por-categoria.page.scss'],
})
export class LocalesPorCategoriaPage implements OnInit {
  categoria: string='';
  locales: any[]=[]; // Suponiendo que tienes un modelo para los locales
  productos:any
  isOpen:boolean=false
  estado:boolean=false
total:number=0
localModal:string=""
imgModal:string=""
  constructor(private activatedRoute: ActivatedRoute,private fire :FirebaseService, public ac:AlertController,public nc:NavController) { }


  ngOnInit() {
    this.getProductos();
    this.activatedRoute.paramMap.subscribe(params => {
      const categoria = params.get('categoria');
      if (categoria !== null) {
        this.categoria = categoria;
        this.fire.obtenerLocalesPorCategoria(this.categoria).subscribe(locales => {
          this.locales=locales;
          this.estado=true;
        });
      } else {
        // Manejar el caso donde 'categoria' es null
        console.error('La categoría es null');
      }
    });
    }


    getProductos(){
      this.fire.obtenerColeccion('Productos').subscribe((res)=>{
        this.productos=res;
        });
        
      }
    
    setOpen(abrir:boolean,local:any){
      this.isOpen=abrir;
      this.localModal=local.nombre_local;
      this.imgModal=local.imagen_url;
    }

    async crearAlerta(prod:any){
      const alert=await this.ac.create({
        header:`${prod.producto} ($${prod.precio})`,
        message:`Cantidad que deseas agregar`,
        inputs:[{
          type:'number', placeholder:'Cantidad...', min:1,value:1,name:'cantidad',max:100,
        }],
        buttons:[
          {text:"Agregar a carro",
            handler:((res)=>{
                let datos={
                  id:prod.id,
                  producto:prod.producto,
                  precio:prod.precio,
                  cantidad:parseInt(res.cantidad),
                  precio_cantidad:(prod.precio*res.cantidad)
                }
                if(datos.precio_cantidad>0){
                  this.fire.agregarAlCarro(datos,prod.id);
                this.crearAlertConfirmacion(datos.precio_cantidad);
                }
                else{
                  this.crearAlertError();
                }
            })
          },
          {text:"Cancelar"}
        ]
      });
      alert.present();
    }

    async crearAlertConfirmacion(total_precio:number){
      const alert=await this.ac.create(
        {
          header:'Listo!',
          message:`Se agrego al carro exitosamente`,
          subHeader:`precio total : $${total_precio}`,
          buttons:[
            {
            text:'Ok'
          }]
        }
      )
      alert.present();
    }

    async crearAlertError(){
      const alert=await this.ac.create(
        {
          header:'Error!',
          message:`Debes elegir la cantidad`,
          buttons:[{
            text:'Ok'
          }]
        }
      )
      alert.present();
    }


  }


