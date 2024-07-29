var ProductNameInput = document.getElementById('ProductNameInput')
var ProductPriceInput = document.getElementById('ProductPriceInput')
var ProductPrice1Input = document.getElementById('ProductPriceInput1')
var ProductPrice2Input = document.getElementById('ProductPriceInput2')
var ProductCategoryInput = document.getElementById('ProductCategoryInput')
var ProductDescriptionInput = document.getElementById('ProductDescriptionInput')


var myAddBtn = document.getElementById('addBtn')
var myClearBtn = document.getElementById('ClearBtn')
var myUpdateBtn = document.getElementById('updateBtn')


var uniqueId = () => {
    var dateString = Date.now().toString(36);
    var randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
};


let products;


if (localStorage.getItem("myKey") != null) {

    products = JSON.parse(localStorage.getItem("myKey"))
    displyProduct(products)
} else {
    products = []
}


function displyProduct(productList) {
    var display = ``;
    for (var i = 0; i < productList.length; i++) {
        display += `
        <tr>
        <td>${i + 1}</td>
        <td>${productList[i].name} </td>
        <td>${productList[i].price} .LE</td>
        <td>${productList[i].price1} .LE</td>
        <td>${productList[i].price2} .LE</td>
        <td>${productList[i].category} </td>
        <td>${productList[i].description}</td>
        <td><button class="btn btn-outline-success " onclick="updateBtn(${i})">تحديث </button></td>
        <td><button class="btn btn-outline-danger"  onclick="deleteBtn(${i})"  >حذف</button></td>
        </tr>
        `
    }

    document.getElementById('tableBody').innerHTML = display;
}




function addProduct() {
    let product = {
        name: ProductNameInput.value,
        price: ProductPriceInput.value,
        price1: ProductPrice1Input.value,
        price2: ProductPrice2Input.value,
        category: ProductCategoryInput.value,
        description: ProductDescriptionInput.value,
        id:uniqueId()
    }
    products.push(product)
    localStorage.setItem("myKey", JSON.stringify(products));
    clear()
    displyProduct(products)


}

// Al Sofi, Qesm Al Fayoum, Faiyum, Faiyum Governorate, Egypt



function clear() {
    ProductNameInput.value = ""
    ProductPriceInput.value = ""
    ProductPrice1Input.value = ""
    ProductPrice2Input.value = ""
}





function searchProduct(SearchWord) {
    var searchResult = [];
    for (var i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase().includes(SearchWord.toLowerCase()) ||
            products[i].category.toLowerCase().includes(SearchWord.toLowerCase()) ||
            products[i].description.toLowerCase().includes(SearchWord.toLowerCase())) {
            products[i].name=products[i].name
            searchResult.push(products[i]);
        }
    }
    displyProduct(searchResult);
}





function deleteBtn(deleteIndex) {
    products.splice(deleteIndex, 1)
    localStorage.setItem("myKey", JSON.stringify(products))
    displyProduct(products)   
}




var asem;
function updateBtn(updateIndex) {
    asem = updateIndex

    ProductNameInput.value = products[updateIndex].name
    ProductPriceInput.value = products[updateIndex].price
    ProductPrice1Input.value = products[updateIndex].price1
    ProductPrice2Input.value = products[updateIndex].price2
    ProductCategoryInput.value = products[updateIndex].category
    ProductDescriptionInput.value = products[updateIndex].description

    myUpdateBtn.classList.replace('d-none', 'd-inline')
    myAddBtn.classList.replace('d-inline', 'd-none')
    myClearBtn.classList.replace('d-inline', 'd-none')
}



function addUpdate() {

    products[asem].name = ProductNameInput.value
    products[asem].price = ProductPriceInput.value
    products[asem].price1 = ProductPrice1Input.value
    products[asem].price2 = ProductPrice2Input.value
    products[asem].category = ProductCategoryInput.value
    products[asem].description = ProductDescriptionInput.value
    displyProduct(products)
    clear()
    myUpdateBtn.classList.replace('d-inline', 'd-none')
    myAddBtn.classList.replace('d-none', 'd-inline')
    myClearBtn.classList.replace('d-none', 'd-inline')
    localStorage.setItem("myKey", JSON.stringify(products));

}



function clearForm() {

    ProductNameInput.value = ""
    ProductPriceInput.value = ""
    ProductPrice1Input.value = ""
    ProductPrice2Input.value = ""
}




function deleteAllBtn() {
    localStorage.clear("myKey", JSON.stringify(products))
    window.location.replace(window.location.pathname + window.location.search + window.location.hash);   
   
}


