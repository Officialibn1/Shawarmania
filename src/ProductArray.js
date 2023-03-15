
// Shawarma Array
const Shawarmas = [
    {id: 1, SRC: './images/ChickenShawarmaWrap.png', title: 'Shawarma', span: '~Chicken & sausage~', price: 'N1.200.00'},
    {id: 2, SRC: './images/ChickennoSausage.jpg', title: 'Shawarma', span: '~Chicken No sausage~', price: 'N1.000.00'},
    {id: 3, SRC: './images/ChickenShawarmaWrap.png', title: 'Shawarma', span: '~Beef & sausage~', price: 'N1.200.00'},
    {id: 4, SRC: './images/BeefnoSausage.jpg', title: 'Shawarma', span: '~Beef No Sausage~', price: 'N1.000.00'},
    {id: 5, SRC: './images/AndSausage.jpg', title: 'Shawarma', span: '~Cheese & Sausage~', price: 'N1.700.00'},
    {id: 6, SRC: './images/ComboShawarma.jpeg', title: 'Shawarma', span: '~Cheese & Double Sausage~', price: 'N2.000.00'},
    {id: 7, SRC: './images/NoSausageShawarma.jpg', title: 'Shawarma', span: '~Cheese No Sausage~', price: 'N1,500.00'},
    {id: 8, SRC: './images/MeatyandCheese.jpg', title: 'Shawarma', span: '~Meaty & Cheese & Sausage~', price: 'N2,000.00'},
    {id: 9, SRC: './images/MeatynoSausage.jpg', title: 'Shawarma', span: '~Meaty No sausage~', price: 'N1,500.00'},
    {id: 10, SRC: './images/CheeseShawarma.png', title: 'Shawarma', span: '~Meaty With Cheese & Double Sausage~', price: 'N2,400.00'},
    {id: 11, SRC: './images/PitaShawarma.jpg', title: 'Shawarma', span: '~Pita~', price: 'N1,800.00'},
    {id: 12, SRC: './images/Combo.jpg', title: 'Shawarma', span: '~Combo~', price: 'N1,500.00'},
    {id: 13, SRC: './images/ComboShawarma.jpeg', title: 'Shawarma', span: '~Combo & Cheese~', price: 'N2,000.00'},
    {id: 14, SRC: './images/shawarma.jpeg', title: 'Shawarma', span: '~Combo & Double Sausage~', price: 'N1,800.00'},
    // {id: 15, SRC: './images/ChickenBurger.jpg', title: 'Burger', span: '~Chicken~', price: 'N1,600.00'},
    // {id: 16, SRC: './images/BurgerCheeseFries.jpg', title: 'Burger', span: '~Chicken & Fries~', price: 'N2,000.00'},
    // {id: 17, SRC: './images/BurgerDoubleLayer.png', title: 'Burger', span: '~Chicken Double Layer~', price: 'N2,000.00'},
    // {id: 18, SRC: './images/ChickenBurgerCombo.jpg', title: 'Burger', span: '~Combo~', price: 'N3,000.00'},
]

// Burger Array
const burgers = [
    {id: 1, SRC: './images/ChickenBurger.jpg', title: 'Burger', span: '~Chicken~', price: 'N1,600.00'},
    {id: 2, SRC: './images/BurgerCheeseFries.jpg', title: 'Burger', span: '~Chicken & Fries~', price: 'N2,000.00'},
    {id: 3, SRC: './images/BurgerDoubleLayer.png', title: 'Burger', span: '~Chicken Double Layer~', price: 'N2,000.00'},
    {id: 4, SRC: './images/ChickenBurgerCombo.jpg', title: 'Burger', span: '~Combo~', price: 'N3,000.00'},
]

// function getProductData(id) {
//     let ProductData = Shawarmas.find(product => product.id === id)

//     if (ProductData === undefined) {
//         console.log('Can not find product with the ID of ' + id)
//     }

//     return ProductData;
// }


export {Shawarmas, burgers};