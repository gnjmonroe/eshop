// grab menu & button elements
const logo = document.getElementsByTagName('h1')[0];
const search = document.getElementById('search-button');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const cart = document.getElementById('cart');
const account = document.getElementById('account');
const hamburgerButton = document.getElementById('hamburger-button');
const hamburgerClose = document.getElementById('hamburger-close')
const cartButton = document.getElementById('cart-button');
const accountButton = document.getElementById('account-button');

// grab banners elements
const test1 = document.getElementById('test-1');
const test2 = document.getElementById('test-2');
const test3 = document.getElementById('test-3');
const test4 = document.getElementById('test-4');
const test5 = document.getElementById('test-5');
const test6 = document.getElementById('test-6');
const test7 = document.getElementById('test-7');
const test8 = document.getElementById('test-8');

// grab curatedSlider element
const curatedSlider = document.getElementById('curated');

// grab section elements
const sliderDepts = document.getElementById('depts');
const sliderTrending = document.getElementById('trending');
const sliderFlashSale = document.getElementById('flash-sale');
const sliderDeptsMobile = document.getElementById('departments-mobile');
const sliderTopBrands = document.getElementById('top-brands');
const sliderTodaysDeal = document.getElementById('todays-deals');

// grab searchbar input element
const searchBarDiv = document.getElementById('search-bar');
const searchBarInput = document.getElementById('search-bar-input');

// menu functions
search.addEventListener('click', (e) => {
  searchBarDiv.style.border = "2px solid #e59700";
  if(!hamburger.classList.contains('hidden')) {
    hamburger.classList.add('hidden');
  }
  if(!cart.classList.contains('hidden')) {
    cart.classList.add('hidden');
  }
  if(!account.classList.contains('hidden')) {
    account.classList.add('hidden');
  }
  logo.classList.toggle('hidden');
  searchBarDiv.classList.toggle('active');
})
hamburgerButton.addEventListener('click', (e) => {
  if (!cart.classList.contains('hidden')) {
    cart.classList.add('hidden');
  }
  if (!account.classList.contains('hidden')) {
    account.classList.add('hidden');
  }
  hamburger.classList.remove('hidden');
  hamburger.style.top = '0px';
  hamburger.style.left = '0px';
})
hamburgerClose.addEventListener('click', (e) => {
  hamburger.classList.add('hidden');
})
cartButton.addEventListener('click', (e) => {
  if (!hamburger.classList.contains('hidden')) {
    hamburger.classList.add('hidden');
  }
  if (!account.classList.contains('hidden')) {
    account.classList.add('hidden');
  }
  cart.classList.toggle('hidden');
  let menuTop = navMenu.getBoundingClientRect().bottom;
  cart.style.top = `${menuTop}px`;
  cart.style.right = '0px'
})
accountButton.addEventListener('click', (e) => {
  if (!hamburger.classList.contains('hidden')) {
    hamburger.classList.add('hidden');
  }
  if (!cart.classList.contains('hidden')) {
    cart.classList.add('hidden');
  }
  account.classList.toggle('hidden');
  let menuTop = navMenu.getBoundingClientRect().bottom;
  account.style.top = `${menuTop}px`;
  account.style.right = '0px'
})

// banner slideshow
let slideIndexBanner = -1;

function bannerSlideshow() {
  let i;
  let slidesBanner = document.getElementsByClassName("banner");
  for (i = 0; i < slidesBanner.length; i++) {
    // console.log('hi')
    // console.log(i)
    slidesBanner[i].classList.remove("prev");
    slidesBanner[i].classList.remove("active");
    slidesBanner[i].classList.remove("next");
  }
  slideIndexBanner++;
  if (slideIndexBanner >= slidesBanner.length) {slideIndexBanner = 0}
  slidesBanner[(slideIndexBanner - 1 == -1) ? 7 : (slideIndexBanner - 1)].classList.add("prev");
  slidesBanner[slideIndexBanner].classList.add("active");
  slidesBanner[(slideIndexBanner + 1 == 8) ? 0 : (slideIndexBanner + 1)].classList.add("next");
  setTimeout(bannerSlideshow, 5000);
}

bannerSlideshow();

// Curated section slider
let curatedSliderIsDown = false;
let startX;
let scrollLeft;

curatedSlider.addEventListener('mousedown', (e) => {
  curatedSliderIsDown = true;
  curatedSlider.classList.add("active");
  startX = e.pageX - curatedSlider.offsetLeft;
  scrollLeft = curatedSlider.scrollLeft;
})
curatedSlider.addEventListener('mouseup', (e) => {
  curatedSliderIsDown = false;
  curatedSlider.classList.remove('active');
})
curatedSlider.addEventListener('mousemove', (e) => {
  if(!curatedSliderIsDown) return;
  e.preventDefault();
  const x = e.pageX - curatedSlider.offsetLeft;
  const walk = (x - startX);
  curatedSlider.scrollLeft = scrollLeft - walk;
})

// main section sliders
let sliderDeptsIsDown = false;
let startXDepts
let scrollLeftDepts
let sliderTrendingIsDown = false;
let startXTrending;
let scrollLeftTrending;
let sliderFlashSaleIsDown = false;
let startXFlashSale;
let scrollLeftFlashSale;
let sliderDeptsMobileIsDown = false;
let startXDeptsMobile;
let scrollLeftDeptsMobile;
let sliderTopBrandsIsDown = false;
let startXTopBrands;
let scrollLeftTopBrands;
let sliderTodaysDealIsDown = false;
let startXTodaysDeal;
let scrollLeftTodaysDeal;

sliderDepts.addEventListener('mousedown', (e) => {
  sliderDeptsIsDown = true;
  sliderDepts.classList.add('active');
  startXDepts = e.pageX - sliderDepts.offsetLeft;
  scrollLeftDepts = sliderDepts.scrollLeft;
})
sliderDepts.addEventListener('mouseup', (e) => {
  sliderDeptsIsDown = false;
  sliderDepts.classList.remove('active');
})
sliderDepts.addEventListener('mousemove', (e) => {
  if(!sliderDeptsIsDown) return;
  e.preventDefault();
  const x = e.pageX - sliderDepts.offsetLeft;
  const walk = (x - startXDepts);
  sliderDepts.scrollLeft = scrollLeftDepts- walk;
})
sliderTrending.addEventListener('mousedown', (e) => {
  sliderTrendingIsDown = true;
  sliderTrending.classList.add('active');
  startXTrending = e.pageX - sliderTrending.offsetLeft;
  scrollLeftTrending = sliderTrending.scrollLeft;
})
sliderTrending.addEventListener('mouseup', (e) => {
  sliderTrendingIsDown = false;
  sliderTrending.classList.remove('active');
})
sliderTrending.addEventListener('mousemove', (e) => {
  if(!sliderTrendingIsDown) return;
  e.preventDefault();
  const x = e.pageX - sliderTrending.offsetLeft;
  const walk = (x - startXTrending);
  sliderTrending.scrollLeft = scrollLeftTrending- walk;
})
sliderFlashSale.addEventListener('mousedown', (e) => {
  sliderFlashSaleIsDown = true;
  sliderFlashSale.classList.add('active');
  startXFlashSale = e.pageX - sliderFlashSale.offsetLeft;
  scrollLeftFlashSale = sliderFlashSale.scrollLeft;
})
sliderFlashSale.addEventListener('mouseup', (e) => {
  sliderFlashSaleIsDown = false;
  sliderFlashSale.classList.remove('active');
})
sliderFlashSale.addEventListener('mousemove', (e) => {
  if(!sliderFlashSaleIsDown) return;
  e.preventDefault();
  const x = e.pageX - sliderFlashSale.offsetLeft;
  const walk = (x - startXFlashSale);
  sliderFlashSale.scrollLeft = scrollLeftFlashSale - walk;
})
sliderDeptsMobile.addEventListener('mousedown', (e) => {
  sliderDeptsMobileIsDown = true;
  sliderDeptsMobile.classList.add('active');
  startXDeptsMobile = e.pageX - sliderDeptsMobile.offsetLeft;
  scrollLeftDeptsMobile = sliderDeptsMobile.scrollLeft;
})
sliderDeptsMobile.addEventListener('mouseup', (e) => {
  sliderDeptsMobileIsDown = false;
  sliderDeptsMobile.classList.remove('active');
})
sliderDeptsMobile.addEventListener('mousemove', (e) => {
  if(!sliderDeptsMobileIsDown) return;
  e.preventDefault();
  const x = e.pageX - sliderDeptsMobile.offsetLeft;
  const walk = (x - startXDeptsMobile);
  sliderDeptsMobile.scrollLeft = scrollLeftDeptsMobile - walk;
})
sliderTopBrands.addEventListener('mousedown', (e) => {
  sliderTopBrandsIsDown = true;
  sliderTopBrands.classList.add('active');
  startXTopBrands = e.pageX - sliderTopBrands.offsetLeft;
  scrollLeftTopBrands = sliderTopBrands.scrollLeft;
})
sliderTopBrands.addEventListener('mouseup', (e) => {
  sliderTopBrandsIsDown = false;
  sliderTopBrands.classList.remove('active');
})
sliderTopBrands.addEventListener('mousemove', (e) => {
  if(!sliderTopBrandsIsDown) return;
  e.preventDefault();
  const x = e.pageX - sliderTopBrands.offsetLeft;
  const walk = (x - startXTopBrands);
  sliderTopBrands.scrollLeft = scrollLeftTopBrands - walk;
})
sliderTodaysDeal.addEventListener('mousedown', (e) => {
  sliderTodaysDealIsDown = true;
  sliderTodaysDeal.classList.add('active');
  startXTodaysDeal = e.pageX - sliderTodaysDeal.offsetLeft;
  scrollLeftTodaysDeal = sliderTodaysDeal.scrollLeft;
})
sliderTodaysDeal.addEventListener('mouseup', (e) => {
  sliderTodaysDealIsDown = false;
  sliderTodaysDeal.classList.remove('active');
})
sliderTodaysDeal.addEventListener('mousemove', (e) => {
  if(!sliderTodaysDealIsDown) return;
  e.preventDefault();
  const x = e.pageX - sliderTodaysDeal.offsetLeft;
  const walk = (x - startXTodaysDeal);
  sliderTodaysDeal.scrollLeft = scrollLeftTodaysDeal - walk;
})

searchBarInput.addEventListener('focus', (e) => {
  e.preventDefault();
  searchBarDiv.style.border = "2px solid #e59700";
  if(!hamburger.classList.contains('hidden')) {
    hamburger.classList.add('hidden');
  }
  if(!cart.classList.contains('hidden')) {
    cart.classList.add('hidden');
  }
  if(!account.classList.contains('hidden')) {
    account.classList.add('hidden');
  }
})
searchBarInput.addEventListener('blur', (e) => {
  e.preventDefault();
  searchBarDiv.style.border = "2px solid #333";
})
