var changeBoxShadow = document.getElementByClass('box-a');

changeBoxShadow.addEventListener('mouseover', () => {
    changeBoxShadow.style.boxShadow = 'none';
    changeBoxShadow.style.boxShadow = 'box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;';
});
