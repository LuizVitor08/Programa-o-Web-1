function changeColor() {
    const blockNumber = document.getElementById('block').value;
    const boxNumber = document.getElementById('box').value;
    const color = document.querySelector('input[name="color"]:checked').value;

    const boxId = `box${(blockNumber - 1) * 16 + parseInt(boxNumber)}`;

    const box = document.getElementById(boxId);
    box.style.backgroundColor = color;
}