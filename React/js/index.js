// ReactDOM.render(React.createElement('input', {

//     placeholder: "Введите текст", 
//     onClick: () => console.log("Clicked"),
//     onMouseEnter: () => console.log("Mouse Over"),

// }), document.getElementById("app"));


const newElement = <input placeholder="Введите текст" />;
const app = document.getElementById("app");

ReactDOM.render(newElement, app);