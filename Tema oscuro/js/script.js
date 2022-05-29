const $d = document;

const temaOscuro = (btn, darkMode) => {
    const $temaBtn = $d.querySelector(btn), 
    $dataSelector = $d.querySelectorAll("[data-dark]");

    let iconoNoche = "🌜", 
    iconoDia = "🌞";

    const temaDia = () => { 
        $dataSelector.forEach(element => element.classList.remove("darkMode"));
        $temaBtn.textContent = iconoNoche; 
    }

    const temaNoche = () => { 
        $dataSelector.forEach(element => element.classList.add("darkMode"));
        $temaBtn.textContent = iconoDia;
    }

    $d.addEventListener("click", e => {
        if (e.target.matches(btn)) $temaBtn.textContent === iconoNoche ? temaNoche() : temaDia()
    })
}

$d.addEventListener("DOMContentLoaded", e => {
    temaOscuro(".darkThemeBtn", "darkMode");
})