document.querySelector( "#retrobg-sun" ).onclick = () => {
  document.querySelector( "#retrobg" ).classList.toggle( "retrobg-shutdown" );
};
TweenLite.set(grid, {
  transformPerspective: 400,
  transformOrigin: '50% 50%',
});

const anim2Props = {
  rotationX: 75,
  y: '0%',
  ease: Power2.easeIn,
  transformPerspective: 300,
  onComplete: () => grid.classList.add('is-animating')
  
};
