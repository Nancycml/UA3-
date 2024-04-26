document.addEventListener('DOMContentLoaded', function() {
    
    const dernierIphoneSection = document.getElementById('dernier iphone');
    const iphoneAncienSection = document.getElementById('iphone ancien');

    
    dernierIphoneSection.addEventListener('click', function() {
        afficherDetails('iPhone 15');
    });

    iphoneAncienSection.addEventListener('click', function() {
        afficherDetails('iPhone 13');
    });

    
    function afficherDetails(nomTelephone) {
       
        alert('256 giga ' + nomTelephone);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    
    const images = document.querySelectorAll('img');

    
    images.forEach(image => {
        image.addEventListener('mouseover', function() {
            
            this.style.transform = 'scale(0.5.2)'; 
            this.style.transition = 'transform 0.3s'; 
        });

        image.addEventListener('mouseout', function() {
            
            this.style.transform = 'scale(1)'; 
            this.style.transition = 'transform 0.3s'; 
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    
    const selectButtons = document.querySelectorAll('.select-button');

    
    selectButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            const phoneName = this.getAttribute('data-phone');
           
            alert('Vous avez sélectionné : ' + phoneName);
        });
    });
});


