import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);

/* size of viewport */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

console.log("window height", sizes.height)
app.load('https://prod.spline.design/V-eQzxM8ljrGYfYS/scene.splinecode')
.then(() => {
   let currentSection = 0;    
    window.addEventListener('scroll', () => {

        let scrollY = window.scrollY
        console.log('scrollY', scrollY);
        const newSection = Math.round(scrollY / sizes.height)
        
        if(newSection != currentSection)
        {

            if(newSection > currentSection){
                const obj = app.findObjectByName('Bottle');
                obj.emitEvent('mouseDown');

                const obj1 = app.findObjectByName('Spray Area');
                obj1.emitEvent('mouseDown');

                const obj2 = app.findObjectByName('Text');
                obj2.emitEvent('mouseDown');
            }else if (newSection < currentSection) {
                const obj = app.findObjectByName('Bottle');
                obj.emitEventReverse('mouseDown');

                const obj1 = app.findObjectByName('Spray Area');
                obj1.emitEventReverse('mouseDown');

                const obj2 = app.findObjectByName('Text');
                obj2.emitEventReverse('mouseDown');   
            }

            currentSection = newSection
            
        }
    })
});

