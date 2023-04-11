// ReactDOM.render(React.createElement('input', {

//     placeholder: "Введите текст", 
//     onClick: () => console.log("Clicked"),
//     onMouseEnter: () => console.log("Mouse Over"),

// }), document.getElementById("app"));


const inputClick = () => console.log("Клик");
const inputMoveMouse = () => console.log("Наведение мышки");
const enterText = "Введите текст"

const newElement = (<div>

<h1>Заголовок</h1>

<input placeholder={enterText} 
onClick={inputClick} 
onMouseEnter={inputMoveMouse} />

<p>Какое-то описание сайта</p>

</div> )

const app = document.getElementById("app");

ReactDOM.render(newElement, app);