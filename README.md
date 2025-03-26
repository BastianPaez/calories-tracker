# Calories Tracker 📜

Bienvenido a este proyecto construido con Angular+17, donde aplico el uso de Reactive Forms para mantener la lógica del formulario y atrapar los errores.

## Proyecto ☕️

Este proyecto me ayudo bastante a consolidar mis conocimientos básicos de angular, la idea de este la obtuve de un curso previo de react que realice y como ahora estoy aprendiendo Angular, decidi poner en práctica lo que he aprendido realizando el proyecto desde 0 con este framework

## Visita la página web 🎉

Puedes visitar la página desde [este link](calories-tracker-bastian.netlify.app)


# Detalles Generales🔥


## Estructura de carpetas 📁
Dentro de SRC no tuve la necesidad de desglozar el app en mas carpetas ya que solo era una aplicacion de una sola página, entonces lo hice en el directorio principal manteniendo el orden correpondiente separando pages, interfaces, componentes, etc.
![image](https://github.com/user-attachments/assets/29ea5605-1a27-4d7e-b240-fc0304e59e90)


## [Reactive Form](./) 📋
El reactive form me permitió manipular de forma sencilla el formulario, gracias a esto pude implementar las validaciones que vienen por defecto con el form builder e implementar errores dinámicos depeniendo el caso. 
```
  myForm : FormGroup = this.fb.group({
    name: ['', Validators.required],
    calories: [0, [Validators.required, Validators.min(0)]],
    type:['food', Validators.required]
  })
```

## Service 📂⬅
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
-



## Aprenda programação ❤️

Este repositório é um projeto gratuito para a comunidade de desenvolvedores, mas você pode me ajudar comprando o meu curso "**[FrontCode](https://iuricode.com/frontcode)**" se estiver interessado em aprender ou melhorar suas habilidades na programação. A sua compra me ajuda a produzir e fornecer mais conteúdo gratuito para a comunidade. Adquira agora e comece sua jornada na programação.
# calories-tracker
