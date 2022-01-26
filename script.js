    const catalog = [
        {img: './assets/black-hat.png', label: 'Acessórios', title: 'Black Hat', description: 'O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...', price: 'R$ 100.00'},
        {img: './assets/surgical-mask.png', label: 'Acessórios', title: 'Mask', description: 'Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...', price: 'R$ 40.00'},
        {img: './assets/men-tshirt.png', label: 'Camisetas', title: 'T-Shirt', description: 'Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...', price: 'R$ 100.00'},
        {img: './assets/short-sleeve-tshirt.png', label: 'Camisetas', title: 'Short Sleeve T-Shirt', description: 'Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...', price: 'R$ 100.00'},
        {img: './assets/champion-jacket.png', label: 'Camisetas', title: 'Champion Packable Jacket', description: 'roteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...', price: 'R$ 100.00'}
    ]  
     
    
    const vitrine = document.getElementById('vitrine');

    catalog.map((prod) => {
    
        const cardProduct = document.createElement('div')
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
        
    })
