//hot_offers slider

const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;
slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});
//promotions slider

const promotionsSlider = document.querySelector('.promotions_gallery');
let isDown2 = false;
let startX2;
let scrollLeft2;
promotionsSlider.addEventListener('mousedown', e => {
  isDown2 = true;
  promotionsSlider.classList.add('active');
  startX2 = e.pageX - promotionsSlider.offsetLeft;
  scrollLeft2 = promotionsSlider.scrollLeft2;
});
promotionsSlider.addEventListener('mouseleave', _ => {
  isDown2 = false;
  promotionsSlider.classList.remove('active');
});
promotionsSlider.addEventListener('mouseup', _ => {
  isDown2 = false;
  promotionsSlider.classList.remove('active');
});
promotionsSlider.addEventListener('mousemove', e => {
  if (!isDown2) return;
  e.preventDefault();
  const x2 = e.pageX - promotionsSlider.offsetLeft;
  const SCROLL_SPEED2 = 3;
  const walk2 = (x2 - startX2) * SCROLL_SPEED2;
  promotionsSlider.scrollLeft2 = scrollLeft2 - walk2;
});

//benefits slider benefits_gallery
const benefitsSlider = document.querySelector('.benefits_gallery');
let isDown3 = false;
let startX3;
let scrollLeft3;
benefitsSlider.addEventListener('mousedown', e => {
  isDown3 = true;
  promotionsSlider.classList.add('active');
  startX3 = e.pageX - promotionsSlider.offsetLeft;
  scrollLeft3 = promotionsSlider.scrollLeft3;
});
benefitsSlider.addEventListener('mouseleave', _ => {
  isDown3 = false;
  benefitsSlider.classList.remove('active');
});
benefitsSlider.addEventListener('mouseup', _ => {
  isDown3 = false;
  benefitsSlider.classList.remove('active');
});
benefitsSlider.addEventListener('mousemove', e => {
  if (!isDown3) return;
  e.preventDefault();
  const x3 = e.pageX - benefitsSlider.offsetLeft;
  const SCROLL_SPEED3 = 3;
  const walk3 = (x3 - startX3) * SCROLL_SPEED3;
  benefitsSlider.scrollLeft3 = scrollLeft3 - walk3;
});

//FAQ spoiler
$(document).ready(function(){
    $(".hider").click(function(){
        $("#hidden").slideToggle("slow");
        return false;
    });
});
$(document).ready(function(){
    $(".hider1").click(function(){
        $("#hidden1").slideToggle("slow");
        return false;
    });
});
$(document).ready(function(){
    $(".hider2").click(function(){
        $("#hidden2").slideToggle("slow");
        return false;
    });
});
let tool = document.getElementById('tool');
tool.addEventListener('click', () => {
  tool.classList.toggle('tool');
});
let tool1 = document.getElementById('tool1');
tool1.addEventListener('click', () => {
  tool1.classList.toggle('tool');
});
let tool2 = document.getElementById('tool2');
tool2.addEventListener('click', () => {
  tool2.classList.toggle('tool');
});
