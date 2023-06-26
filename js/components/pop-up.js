function setPopUp() {
    let headerText = `
    <div class="section">
    <div class="container">
        <div class="border add-to-card center-column">
            <h3 class="title-3 text-center max-300"> Товар добавлен в корзину</h3>
            <div class="flex flex-column">
                <button class="link-button">продолжить покупки</button>
                <a href="../404/404.html"></a><button class="link-button">оформить заказ</button>
            </div>
        </div>
    </div>
</div>
`;

    let popUp = document.createElement("div");
    popUp.innerHTML = headerText;
    document.body.insertAdjacentElement('beforeend', popUp);
}

setPopUp();
