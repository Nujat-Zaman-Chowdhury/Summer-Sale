const cards = document.querySelectorAll('.card');
let serialNo = 1;

let totalProductPrice = 0;

for(const index of cards){
    const card = index;
    
    card.addEventListener('click',function(){
        
        const productName = card.querySelector('p');
        const productNameText = productName.innerText; 

        const productList = document.getElementById('product-list');
        
        const p = document.createElement('p');
        p.innerText = serialNo + ". "+productNameText;
        productList.appendChild(p);
        serialNo++;

        const productPrice = card.querySelector('span');
        const productPriceText = parseFloat(productPrice.innerText.split(" ")[0]);
        
        // const productItemPrice = parseFloat(productPriceText).toFixed(2);
        
        
        totalProductPrice = totalProductPrice + productPriceText ;
        console.log(totalProductPrice);


        const totalPrice = document.getElementById('total-price');
        totalPrice.innerText = totalProductPrice.toFixed(2);
        makePurchase();
        

        
    });

    
    
}

const applyButton = document.getElementById('apply-btn');
        applyButton.addEventListener('click',function(){
            const inputField = document.getElementById('input').value;
            const couponCode = inputField.split(' ').join('').toUpperCase();
            if(totalProductPrice >= 200){
                if(couponCode === 'SELL200'){
                    const discountPrice = document.getElementById('discount-price');
                    const totalDiscount = totalProductPrice * 0.20; 
                   
                    discountPrice.innerText = totalDiscount.toFixed(2);
                    
                    const total = document.getElementById('total');
                    total.innerText = (totalProductPrice - totalDiscount).toFixed(2);
                    
                    document.getElementById('input').value = " ";
                    makePurchase();
                }

            }
            
        });

function makePurchase(){
    document.getElementById('make-purchase-btn').addEventListener('click',function(){
        const congratsSection = document.getElementById('congrats-section');
        congratsSection.classList.remove('hidden');

        
    })   
}


const goHomeButton = document.getElementById('go-home-btn').addEventListener('click',function(){
        const congratsSection = document.getElementById('congrats-section');
        congratsSection.classList.add('hidden');
})
