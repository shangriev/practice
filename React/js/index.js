ReactDOM.render(React.createElement('input', {

    placeholder: "Введите текст", 
    onClick: () => console.log("Clicked"),
    onMouseEnter: () => console.log("Mouse Over"),

}), document.getElementById("app"));