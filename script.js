    // declarando variáveis
    let cart = []
    
    const catalog = [
        {id: 1, img: './assets/black-hat.png', label: 'Acessórios', title: 'Black Hat', description: 'O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...', price: `R$ ${100.00}`},
        {id: 2, img: './assets/surgical-mask.png', label: 'Acessórios', title: 'Mask', description: 'Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...', price: `R$ ${40.00}`},
        {id: 3, img: './assets/men-tshirt.png', label: 'Camisetas', title: 'T-Shirt', description: 'Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...', price: `R$ ${100.00}`},
        {id: 4, img: './assets/short-sleeve-tshirt.png', label: 'Camisetas', title: 'Short Sleeve T-Shirt', description: 'Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...', price: `R$ ${100.00}`},
        {id: 5, img: './assets/champion-jacket.png', label: 'Camisetas', title: 'Champion Packable Jacket', description: 'roteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...', price: `R$ ${100.00}`},
        {id: 6, img: './assets/men-jacket.png', label: 'Camisetas', title: 'Lightweight Jacket', description: 'Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...', price: `R$ ${100.00}`}
    ]   

        //html do carrinho vazio
        
        const divToAppend = document.getElementById('cart__content')
        const emptyCart = document.createElement('div')
        emptyCart.classList.add('emptycart__content')
        const cartEmptyContent = document.createElement('h3')
        cartEmptyContent.innerText = 'Carrinho vazio'
        const paragraph = document.createElement('p')
        paragraph.innerText = 'Adicione itens'

        emptyCart.appendChild(cartEmptyContent)
        emptyCart.appendChild(paragraph)
    
        //fim do html do carrinho vazio
    
    
    //fim da declaração de variáveis
   
    //declarando funções

    function addToCart(id) {
        let productFiltered = catalog.filter((prod) => prod.id === id)
        cart.push(productFiltered[0])
        isEmptyCart()
        console.log(cart);

    }

    function removeFromCart(id) {
        let newCart = cart.filter((prod) => prod.id !== id) 
        cart = newCart
        isEmptyCart()
        console.log(cart);
    }

    function isEmptyCart() {
        if(cart.length < 1) {
            const cartToAppend = document.getElementById('cart__content')
            cartToAppend.innerHTML = ''
            
            divToAppend.appendChild(emptyCart)
        } else {
            const cartToAppend = document.getElementById('cart__content')
            cartToAppend.innerHTML = ''

            cart.map((item) => {

                const productCart = document.createElement('li')
                productCart.classList.add('product__cart')
                const picCart = document.createElement('div')
                picCart.classList.add('pic__cart')
                const imgCart = document.createElement('img')
                imgCart.src = item.img
                const productInfo = document.createElement('div')
                productInfo.classList.add('product__info')
                const titleCard = document.createElement('h3')
                titleCard.innerText = item.title
                const priceCart = document.createElement('span')
                priceCart.classList.add('cart__price')
                priceCart.innerText = item.price
                const btnCart = document.createElement('button')
                btnCart.id = `btn__remove-${item.id}`
                btnCart.innerText = 'Remover produto'
                
                cartToAppend.appendChild(productCart)
                productCart.appendChild(picCart)
                picCart.appendChild(imgCart)
                productCart.appendChild(productInfo)
                productInfo.appendChild(titleCard)
                productInfo.appendChild(priceCart)
                productInfo.appendChild(btnCart)    
                
                document.getElementById(btnCart.id).onclick = function(){removeFromCart(item.id)}
            })
        }
    }

    //fim da declaração de funções

    //renderização da vitrine

    catalog.map((prod) => {
        const vitrine = document.getElementById('vitrine');

        const cardProduct = document.createElement('li')
        cardProduct.classList.add('card__product')
        const cardImage = document.createElement('div')
        cardImage.classList.add('card__image')
        const image = document.createElement('img')
        image.src = prod.img
        const content = document.createElement('div')
        content.classList.add('card__content')
        const tag = document.createElement('div')
        tag.classList.add('card__tag')
        const label = document.createElement('span')
        label.innerText = prod.label
        const info = document.createElement('div')
        info.classList.add('card__info')
        const title = document.createElement('h3')
        title.innerText = prod.title
        const paragraph = document.createElement('p')
        paragraph.innerText = prod.description
        const price = document.createElement('span')
        price.classList.add('card__price')
        price.innerText = prod.price
        const button = document.createElement('button')
        button.id = `btn__add-${prod.id}`
        button.innerText = 'Adicionar ao carrinho'
       
        cardProduct.appendChild(cardImage)
        cardImage.appendChild(image)
        cardProduct.appendChild(content)
        content.appendChild(tag)
        tag.appendChild(label)
        content.appendChild(info)
        info.appendChild(title)
        info.appendChild(paragraph)
        info.appendChild(price)
        info.appendChild(button)
    
        vitrine.appendChild(cardProduct)

        document.getElementById(button.id).onclick = function(){addToCart(prod.id)}
        
    })

    //fim da renderização da vitrine

    //chamando funções
    
    isEmptyCart()

    //fim da chamada de funções
