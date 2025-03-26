# Calories Tracker 📜

Bienvenido a este proyecto construido con Angular+17, donde aplico el uso de Reactive Forms para mantener la lógica del formulario y atrapar los errores.

## Proyecto ☕️

Este proyecto me ayudo bastante a consolidar mis conocimientos básicos de angular, la idea de este la obtuve de un curso previo de react que realice y como ahora estoy aprendiendo Angular, decidí poner en práctica lo que he aprendido realizando este "CRUD" desde 0 con este framework.

## Visita la página web 🎉

Puedes visitar la página desde [este link](calories-tracker-bastian.netlify.app)


# Detalles Generales🔥


## Estructura de carpetas 📁
Dentro de SRC no tuve la necesidad de desglozar el app en mas carpetas ya que solo era una aplicacion de una sola página, entonces lo hice en el directorio principal manteniendo el orden correpondiente separando pages, interfaces, componentes, etc.
![image](https://github.com/user-attachments/assets/29ea5605-1a27-4d7e-b240-fc0304e59e90)


## [Reactive Form](./src/app/components/form-tracker) 📋
El reactive form me permitió manipular de forma sencilla el formulario, gracias a esto pude implementar las validaciones que vienen por defecto con el form builder e implementar errores dinámicos depeniendo el caso. 
###Ej:
```
  myForm : FormGroup = this.fb.group({
    name: ['', Validators.required],
    calories: [0, [Validators.required, Validators.min(0)]],
    type:['food', Validators.required]
  })
```

## [Service](./src/app/services/calories-tracker.service.ts) 📂⬅
Dentro de mi archivo service mantuve gran parte de la lógica que hay detrás de la aplicación web.

-Cree y guardé el localStorage de forma dinámica, almacenando los datos con un signal y sincronizando a través de un effect.

```
const loadLocalStorage = () => {
  const history = localStorage.getItem('history')
  return history ? JSON.parse(history) : []
}
```
```
  saveLocalStorage = effect(() =>
    localStorage.setItem('history', JSON.stringify(this.history()))
)
```

-Mediante inputs y outputs pude establecer la comunicación entre el service y componentes para poder controlar la informacion correctamente.
###Ej:
```
export class CalorieCardComponent {

  entrie = input.required<CalorieHistory>()

  editId = output<string>()

  deleteId = output<string>()

 }
```
```
  @if (history().length === 0) {
    <h2 class="text-4xl text-center font-bold">No entries</h2>
  }@else {
    <h2 class="text-4xl text-center font-bold">History</h2>
    @for (item of history(); track item.id) {
      <calorie-card
        [entrie]="item"
        (editId)="editId.emit($event)"
        (deleteId)="deleteId.emit($event)"
      />
    }
  }
```
```
<list-tracker
  [history]="caloriesService.history()"
  (editId)="caloriesService.pasteItem($event)"
  (deleteId)="caloriesService.deleteItem($event)"
/>
```



# ¿Que aprendí? ❤️

  Definitivamente aprender Reactive Forms es una herramienta poderosa, ahora se manipular los datos de formularios de una forma efectiva, tambien reforce los conocimientos de los inputs y outputs, que era algo que no tenia muy claro como funcionaban y en este proyecto se me presento el desafío de encadenar mas de un output para llevar la información un nivel mas arriba de su padre y llegar al service.
  Pude utilizar un effect para poder llenar el formulario cuando quisiera editar un item, donde poseia un signal con un estado true/false dentro de service para poder indicarle al formulario cuando quería que me creara un registro nuevo o me editara el existente.
  También pude darle utilidad a Computed para almacenar un valor dinámico que venía de la resta de las calorías consumidad y las calorías quemadas.
  En resumen creo que este es un buen proyecto para desafíar las habilidades de alguién que esta aprendiendo Angular o cualquier framework en general, porque desde mi perspectiva me ayudo a darme cuenta que puedo crear proyectos solo 😊

#Calories Tracker 📜
Bienvenido a este proyecto construido con Angular 17, donde aplico el uso de Reactive Forms para manejar la lógica del formulario y gestionar errores.

##Proyecto ☕️
Este proyecto me ayudó bastante a consolidar mis conocimientos básicos de Angular. La idea surgió a partir de un curso previo de React que realicé. Como ahora estoy aprendiendo Angular, decidí poner en práctica lo que he aprendido creando este CRUD desde cero con este framework.

##Visita la página web 🎉
Puedes visitar la página en [este enlace](calories-tracker-bastian.netlify.app).

##Detalles Generales 🔥
###Estructura de carpetas 📁
Dentro de src, no tuve la necesidad de desglosar app en más carpetas, ya que se trata de una aplicación de una sola página. Por lo tanto, mantuve la organización en el directorio principal, separando pages, interfaces, componentes, etc.



##Reactive Form 📋
El uso de Reactive Forms me permitió manipular el formulario de manera sencilla. Gracias a esto, pude implementar validaciones nativas de FormBuilder e incluir errores dinámicos según el caso.

Ejemplo:
```typescript
  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    calories: [0, [Validators.required, Validators.min(0)]],
    type: ['food', Validators.required]
  })
```
##[Service](./src/app/services/calories-tracker.service.ts) 📂⬅
Dentro del Service, mantuve gran parte de la lógica de la aplicación.

✅ Guardado dinámico en localStorage

Creé y almacené los datos mediante un signal, sincronizándolos con un effect.

```typescript
const loadLocalStorage = () => {
  const history = localStorage.getItem('history');
  return history ? JSON.parse(history) : [];
}
```
```typescript
saveLocalStorage = effect(() =>
  localStorage.setItem('history', JSON.stringify(this.history()))
)
```
##✅ Comunicación entre componentes mediante input() y output()

Utilicé @Input() y @Output() para establecer la comunicación entre el servicio y los componentes, asegurando un flujo de datos eficiente.

Ejemplo:
```typescript
export class CalorieCardComponent {
  entrie = input.required<CalorieHistory>();
  editId = output<string>();
  deleteId = output<string>();
}
```
```html
@if (history().length === 0) {
  <h2 class="text-4xl text-center font-bold">No entries</h2>
}@else {
  <h2 class="text-4xl text-center font-bold">History</h2>
  @for (item of history(); track item.id) {
    <calorie-card
      [entrie]="item"
      (editId)="editId.emit($event)"
      (deleteId)="deleteId.emit($event)"
    />
  }
}
```
````html
<list-tracker
  [history]="caloriesService.history()"
  (editId)="caloriesService.pasteItem($event)"
  (deleteId)="caloriesService.deleteItem($event)"
/>
````
##¿Qué aprendí? ❤️
✅ Reactive Forms: Ahora sé cómo manipular formularios de manera efectiva, gestionando datos y validaciones.
✅ Inputs y Outputs: Reforcé el uso de input() y output(), logrando encadenar múltiples output() para enviar información hasta el servicio.
✅ Effects y Signals: Implementé un effect para llenar el formulario al editar un elemento y utilicé un signal de estado true/false para indicar si debía crear o editar un registro.
✅ Computed Properties: Usé computed() para calcular dinámicamente el saldo de calorías consumidas y quemadas.

📌 Conclusión:
Este proyecto fue un excelente desafío para mejorar mis habilidades en Angular. Es ideal para cualquier persona que esté aprendiendo un framework, ya que combina formularios reactivos, comunicación entre componentes y manejo de estado con Signals. 💡
