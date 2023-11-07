document.addEventListener("DOMContentLoaded", function () {
    const lightSwitch = document.getElementById("light-switch");
    const outletSwitch = document.getElementById("outlet-switch");
    const applyChangesButton = document.getElementById("apply-changes");

    const roomCircuits = document.querySelectorAll(".circuit");

    applyChangesButton.addEventListener("click", function () {
        const lightState = lightSwitch.value;
        const outletState = outletSwitch.value;

        // Atualize o estado dos circuitos em todos os quartos
        roomCircuits.forEach(function (circuit) {
            const buttons = circuit.querySelectorAll("button");
            buttons[0].classList.remove("on", "off");
            buttons[1].classList.remove("on", "off");

            if (lightState === "on") {
                buttons[0].classList.add("on");
            } else {
                buttons[0].classList.add("off");
            }

            if (outletState === "on") {
                buttons[1].classList.add("on");
            } else {
                buttons[1].classList.add("off");
            }
        });
    });
});
