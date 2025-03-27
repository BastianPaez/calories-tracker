[![Ir a la sección en Inglés](https://img.shields.io/badge/Readme%20en%20Inglés-blue)](#english)

[![Ir a la sección en Español](https://img.shields.io/badge/Readme%20en%20Español-blue)](#español)

##English

# Calories Tracker 📜
Welcome to this proyect builded with Angular 17+, here i apply Reactive Forms to manipulate the logic of formularies and catching his errors.

## Proyect ☕️
This proyect help me to consolidate mi basic habilities in Angular. The idea was born in a React course i took. how am i now learning Angular, i decided to put my knowledge in practice making a CRUD from the beginning with this Framework.


## Visit the web Calorie Tracker 🎉
Yo can visit the page [in this link](https://67e48c47677fb534656ac0be--calories-tracker-bastian.netlify.app/).

## General Details 🔥
### Directory estructure 📁
In src, i don't have the need to destructure the app in more directories, as it is about an aplication of one less page. For that reason, i keep the orgnanization in the app directory, diving page, interfaces, components, etc


## Reactive Form 📋
The use of Reactive Form allowed me to manipulate the form in a easy way. Thanks to this, i can use the native validations of FormBuilder and show dynamics errors.


Example:
```typescript
  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    calories: [0, [Validators.required, Validators.min(0)]],
    type: ['food', Validators.required]
  })
```
## [Service](./src/app/services/calories-tracker.service.ts) 📂⬅
In Service, i managed most of logic in the aplication.

✅ Dynamic Save in the Local Storage

I make and save the information with a signal, synchronizing whi a Effect

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
## ✅ Comunication in the components with input() and output()

I use input() and output() to keep the comunication between the service and components.


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
## What i did learn? ❤️
✅ Reactive Forms: now i know how to manipulate Forms whit Reactive Forms, managing information and validations.


✅ Inputs and Outputs: I was practice the use of input() and output(), achieving to chain multiple outputs to send information to service.

✅ Effects and Signals: I implemented a effect to fill the form when i need edit a item and i was use a signal whit a state boolean(true/false) to indicate if i need create a new item or update a item

✅ Computed Properties: I use computed() to calculate the balance of calories consumed and burned



## 📌 Conclusion:
This proyect is a excelent challenge to improve my skills in Angular. I recommend this proyect for anyone that interested to learn Angular or any Frontend Framework.💡


##Español

# Calories Tracker 📜
Bienvenido a este proyecto construido con Angular 17, donde aplico el uso de Reactive Forms para manejar la lógica del formulario y gestionar errores.

## Proyecto ☕️
Este proyecto me ayudó bastante a consolidar mis conocimientos básicos de Angular. La idea surgió a partir de un curso previo de React que realicé. Como ahora estoy aprendiendo Angular, decidí poner en práctica lo que he aprendido creando este CRUD desde cero con este framework.

## Visita la página web 🎉
Puedes visitar la página en [este enlace](https://67e48c47677fb534656ac0be--calories-tracker-bastian.netlify.app/).

## Detalles Generales 🔥
### Estructura de carpetas 📁
Dentro de src, no tuve la necesidad de desglosar app en más carpetas, ya que se trata de una aplicación de una sola página. Por lo tanto, mantuve la organización en el directorio principal, separando pages, interfaces, componentes, etc.



## Reactive Form 📋
El uso de Reactive Forms me permitió manipular el formulario de manera sencilla. Gracias a esto, pude implementar validaciones nativas de FormBuilder e incluir errores dinámicos según el caso.

Ejemplo:
```typescript
  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    calories: [0, [Validators.required, Validators.min(0)]],
    type: ['food', Validators.required]
  })
```
## [Service](./src/app/services/calories-tracker.service.ts) 📂⬅
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
## ✅ Comunicación entre componentes mediante input() y output()

Utilicé input() y output() para establecer la comunicación entre el servicio y los componentes, asegurando un flujo de datos eficiente.

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
## ¿Qué aprendí? ❤️
✅ Reactive Forms: Ahora sé cómo manipular formularios de manera efectiva, gestionando datos y validaciones.

✅ Inputs y Outputs: Reforcé el uso de input() y output(), logrando encadenar múltiples output() para enviar información hasta el servicio.

✅ Effects y Signals: Implementé un effect para llenar el formulario al editar un elemento y utilicé un signal de estado true/false para indicar si debía crear o editar un registro.

✅ Computed Properties: Usé computed() para calcular dinámicamente el saldo de calorías consumidas y quemadas.


## 📌 Conclusión:
Este proyecto fue un excelente desafío para mejorar mis habilidades en Angular. Es ideal para cualquier persona que esté aprendiendo un framework, ya que combina formularios reactivos, comunicación entre componentes y manejo de estado con Signals. 💡
