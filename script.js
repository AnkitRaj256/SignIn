window.onload = function() {
    const imageContainer = document.getElementById('imageContainer');
    const image = imageContainer.querySelector('img');
    const formContainer = document.querySelector('.form-container');
    const logo = document.getElementById('logo');

    formContainer.style.opacity = 0;
    logo.style.position = 'fixed'; 
    logo.style.left = '50%';     
    logo.style.top = '50%';     
    logo.style.transform = 'translate(-50%, -50%)'; 
    logo.style.transition = 'all 1s ease-in-out';
    logo.style.opacity = 1; 

    image.style.position = 'fixed';
    image.style.top = 0;
    image.style.left = 0;
    image.style.width = '100vw';
    image.style.height = '100vh';
    image.style.transform = 'scale(1)';
    image.style.transition = 'transform 1.5s ease-in-out, width 1.5s ease-in-out, height 1.5s ease-in-out';

    setTimeout(() => {
        image.style.position = 'relative';
        image.style.width = '100%';
        image.style.height = '100%';

        logo.style.position = 'relative';
        logo.style.left = 'auto';
        logo.style.top = 'auto';
        logo.style.transform = 'none';

        formContainer.style.opacity = 1;
        formContainer.style.transition = 'opacity 1s ease-in-out';
    }, 1500); 
};
