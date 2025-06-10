"use strict";


function getSplitText(sep, item) {
   let text = item.textContent;
   return text.split(sep);
}
function setSpanWords(text, sep, id = '') {
   let textSplit = getSplitText(sep, text);
   let result = '';

   textSplit.forEach(function (item, index) {
      result += `<span class="${id == '' ? '' : id + '' + index}">${item}</span>`;
   });

   return result;
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

let smoother = ScrollSmoother.create({
   smooth: 2,
   effects: true,
   smoothTouch: 0.1,
});

let menuLinks = document.querySelectorAll('[data-goto]');
menuLinks.forEach(function (item) {
   let href = item.dataset.goto;
   item.addEventListener("click", () => {
      smoother.scrollTo(href, true, "top 0px")
   });
});

function animSectionMain() {
   let tl = gsap.timeline();
   tl.from('.header .header__logo, .header .menu__item', {
      opacity: 0,
      delay: 0.2,
      duration: 0.5,
      y: -30,
      stagger: 0.15,
   });
   
   let title = document.querySelector('.main__title');
   title.innerHTML = setSpanWords(title, '');
   
   tl.from('.main__title span', {
      opacity: 0,
      duration: 0.2,
      stagger: 0.15,
      ease: "steps(12)",
   }, '-=1');
   
   document.fonts.ready.then(() => {
      gsap.set(".main__text", { opacity: 1 });
      let split = SplitText.create(".main__text p", { type: "words", aria: "hidden" });
   
      tl.from(split.words, {
         opacity: 0,
         duration: 0.7,
         ease: "sine.out",
         stagger: 0.1,
      }, '-=0.4')
   
      tl.from('.main__btn', {
         opacity: 0,
         duration: 0.5,
      }, '-=0.5');
      
      tl.from('.main__images', {
         opacity: 0,
         duration: 0.5,
      }, '-=0.2');
      
      tl.from('.item-main__icon', {
         opacity: 0,
         y: 30,
         duration: 0.5,
         stagger: 0.1,
      });
      
      tl.to('.mouse .mouse-two', {
         strokeDashoffset: 0,
         duration: 1,
         opacity: 1,
         ease: 'none',
      });
      tl.from('.mouse .mouse-one', {
         duration: 0.5,
         opacity: 0,
      }, '-=0.5');
   });
}
animSectionMain();

function animSectionServices() {
   let tl2 = gsap.timeline({
      scrollTrigger: {
         trigger: '.page__services',
         scroller: 'body',
         markers: false,
         start: 'top 50%',
         end: 'top -40%',
         scrub: 3,
      }
   });
   tl2.from('.services__column--1', {
      transform: 'translateX(-20%)',
      opacity: 0,
      duration: 0.6
   }, 'anim1');
   
   tl2.from('.services__column--2', {
      transform: 'translateX(20%)',
      opacity: 0,
      duration: 0.6
   }, 'anim1');
   
   tl2.from('.services__column--3', {
      transform: 'translateX(-20%)',
      opacity: 0,
      duration: 0.6
   }, 'anim2');
   
   tl2.from('.services__column--4', {
      transform: 'translateX(20%)',
      opacity: 0,
      duration: 0.6
   }, 'anim2');
   
   tl2.from('.services-decor-board', {
      y: 20,
      duration: 0.6,
      opacity: 0,
   });
   
   tl2.to('.services-decor-line', {
      strokeDashoffset: 0,
      duration: 0.6,
      opacity: 1,
      ease: 'none',
   }, '-=0.5');
}
animSectionServices();

function animSectionAbout() {
   let tl3 = gsap.timeline({
      scrollTrigger: {
         trigger: '.page__about',
         scroller: 'body',
         markers: false,
         start: 'top 50%',
         end: 'top 20%',
         scrub: 3,
      }
   });
   
   let title2 = document.querySelectorAll('.about__title .title__item');
   title2.forEach(function (item) {
      item.innerHTML = setSpanWords(item, '', 't-');
   });
   
   tl3.from('.about__title .title__item > span', {
      y: 80,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      delay: 0.5,
   });
   
   tl3.from('.about__text p', {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      delay: 0.5,
   }, '-=0.5');
   
   tl3.from('.about__item', {
      x: -80,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      delay: 0.5,
   }, '-=0.5');
}
animSectionAbout();

function animSectionPortfolio() {
   if (ScrollTrigger.isTouch === 0) {
      let tl4 = gsap.timeline();
   
      tl4.to('.portfolio__body', {
         transform: 'translateX(-450%)',
         scrollTrigger: {
            trigger: '.page__portfolio',
            scroller: '#smooth-wrapper',
            markers: false,
            start: 'top 0%',
            end: 'top -150%',
            scrub: 3,
            pin: true,
         }
      });
   }
}
animSectionPortfolio();

function animSectionAdvantages() {
   let tl5 = gsap.timeline({
      scrollTrigger: {
         trigger: '.page__advantages',
         scroller: 'body',
         markers: false,
         start: 'top 50%',
         end: 'top 20%',
         scrub: 3,
      }
   });
   
   let title3 = document.querySelector('.advantages__title');
   title3.innerHTML = setSpanWords(title3, '');
   
   tl5.from('.advantages__decor', {
      y: 80,
      opacity: 0,
      duration: 0.4,
   }, '-=1');
   
   tl5.from('.advantages__title span', {
      y: 80,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
   }, '-=1');
   
   tl5.from('.advantages__item', {
      x: 80,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
   }, '-=1');
}
animSectionAdvantages();

function animSectionSale() {
   let title4 = document.querySelector('.sale__title');
   title4.innerHTML = setSpanWords(title4, ' ');
   
   let title5 = document.querySelectorAll('.sale__title span');
   title5.forEach(function (item) {
      item.innerHTML = setSpanWords(item, '');
   });
   
   let tl6 = gsap.timeline({
      scrollTrigger: {
         trigger: '.page__sale',
         scroller: 'body',
         markers: false,
         start: 'top 80%',
         end: 'top 50%',
         scrub: 3,
      }
   });
   
   let split, animation;
   
   animation = tl6.from('.sale__title span', {
      y: -60,
      opacity: 0,
      rotation: "random(-80, 80)",
      duration: 1,
      ease: "back",
      stagger: 0.15
   })
   
   document.fonts.ready.then(() => {
      gsap.set(".sale__text", { opacity: 1 });
      let split = SplitText.create(".sale__text", { type: "words", aria: "hidden" });
   
      tl6.from(split.words, {
         opacity: 0,
         duration: 0.7,
         ease: "sine.out",
         stagger: 0.1,
      }, '-=0.4')
   });
}
animSectionSale();

function initCursor() {
   let main = document.querySelector('#smooth-wrapper');
   let cursor = document.querySelector('.cursor');
   let images = document.querySelectorAll('.item-portfolio');
   
   main.addEventListener('mousemove', function (e) {
      gsap.to(cursor, {
         x: e.x - 7.5,
         y: e.y - 7.5,
         duration: 1,
      });

      let objHTML = document.querySelector('.item-main--html');
      let objCSS = document.querySelector('.item-main--css');
      let objJS = document.querySelector('.item-main--js');
      let objImage = document.querySelector('.main__image');

      const depth = 80;
      const moveX = (e.pageX - window.innerWidth / 2) / depth;
      const moveY = (e.pageY - window.innerHeight / 2) / depth;

      gsap.to(objHTML, {
         x: moveX,
         y: moveY,
      });
      gsap.to(objCSS, {
         x: -moveX,
         y: moveY,
      });
      gsap.to(objJS, {
         x: moveX,
         y: -moveY,
      });
      gsap.to(objImage, {
         x: -moveX,
         y: moveY,
      });
   });
   
   images.forEach(function (item) {
      item.addEventListener('mouseenter', function (e) {
         cursor.innerHTML = 'Подробнее';
         gsap.to(cursor, {
            scale: 6,
         });
      });
   
      item.addEventListener('mouseleave', function (e) {
         cursor.innerHTML = '';
         gsap.to(cursor, {
            scale: 1
         });
      });
   });
}
initCursor();


// МЕНЮ БУРГЕР
let menu = document.querySelector('.icon-menu');
let menuBody = document.querySelector('.menu__body');
menu.addEventListener('click', function () {
   document.body.classList.toggle('_lock');
   menu.classList.toggle('_active');
   menuBody.classList.toggle('_active');
});

// ЛИПКИЙ HEADER
let header = document.querySelector('.header');

document.onscroll = function () {
   let scroll = window.scrollY;
   if (scroll > 0){
      header.classList.add('_fixed');
   } else {
      header.classList.remove('_fixed');
   }
}
/**
 * @typedef {Object} dNode
 * @property {HTMLElement} parent
 * @property {HTMLElement} element
 * @property {HTMLElement} to
 * @property {string} breakpoint
 * @property {string} order
 * @property {number} index
 */
/**
 * @typedef {Object} dMediaQuery
 * @property {string} query
 * @property {number} breakpoint
 */
/**
 * @param {'min' | 'max'} type
 */
function useDynamicAdapt(type = 'max') {
   const className = '_dynamic_adapt_'
   const attrName = 'data-da'

   /** @type {dNode[]} */
   const dNodes = getDNodes()

   /** @type {dMediaQuery[]} */
   const dMediaQueries = getDMediaQueries(dNodes)

   dMediaQueries.forEach((dMediaQuery) => {
      const matchMedia = window.matchMedia(dMediaQuery.query)
      // массив объектов с подходящим брейкпоинтом
      const filteredDNodes = dNodes.filter(({ breakpoint }) => breakpoint === dMediaQuery.breakpoint)
      const mediaHandler = getMediaHandler(matchMedia, filteredDNodes)
      matchMedia.addEventListener('change', mediaHandler)

      mediaHandler()
   })

   function getDNodes() {
      const result = []
      const elements = [...document.querySelectorAll(`[${attrName}]`)]

      elements.forEach((element) => {
         const attr = element.getAttribute(attrName)
         const [toSelector, breakpoint, order] = attr.split(',').map((val) => val.trim())

         const to = document.querySelector(toSelector)

         if (to) {
            result.push({
               parent: element.parentElement,
               element,
               to,
               breakpoint: breakpoint ?? '767',
               order: order !== undefined ? (isNumber(order) ? Number(order) : order) : 'last',
               index: -1,
            })
         }
      })

      return sortDNodes(result)
   }

   /**
    * @param {dNode} items
    * @returns {dMediaQuery[]}
    */
   function getDMediaQueries(items) {
      const uniqItems = [...new Set(items.map(({ breakpoint }) => `(${type}-width: ${breakpoint}px),${breakpoint}`))]

      return uniqItems.map((item) => {
         const [query, breakpoint] = item.split(',')

         return { query, breakpoint }
      })
   }

   /**
    * @param {MediaQueryList} matchMedia
    * @param {dNodes} items
    */
   function getMediaHandler(matchMedia, items) {
      return function mediaHandler() {
         if (matchMedia.matches) {
         items.forEach((item) => {
            moveTo(item)
         })

         items.reverse()
         } else {
         items.forEach((item) => {
            if (item.element.classList.contains(className)) {
               moveBack(item)
            }
         })

         items.reverse()
         }
      }
   }

   /**
    * @param {dNode} dNode
    */
   function moveTo(dNode) {
      const { to, element, order } = dNode
      dNode.index = getIndexInParent(dNode.element, dNode.element.parentElement)
      element.classList.add(className)

      if (order === 'last' || order >= to.children.length) {
         to.append(element)

         return
      }

      if (order === 'first') {
         to.prepend(element)

         return
      }

      to.children[order].before(element)
   }

   /**
    * @param {dNode} dNode
    */
   function moveBack(dNode) {
      const { parent, element, index } = dNode
      element.classList.remove(className)

      if (index >= 0 && parent.children[index]) {
         parent.children[index].before(element)
      } else {
         parent.append(element)
      }
   }

   /**
    * @param {HTMLElement} element
    * @param {HTMLElement} parent
    */
   function getIndexInParent(element, parent) {
      return [...parent.children].indexOf(element)
   }

   /**
    * Функция сортировки массива по breakpoint и order
    * по возрастанию для type = min
    * по убыванию для type = max
    *
    * @param {dNode[]} items
    */
   function sortDNodes(items) {
      const isMin = type === 'min' ? 1 : 0

      return [...items].sort((a, b) => {
         if (a.breakpoint === b.breakpoint) {
         if (a.order === b.order) {
            return 0
         }

         if (a.order === 'first' || b.order === 'last') {
           return -1 * isMin
         }

         if (a.order === 'last' || b.order === 'first') {
           return 1 * isMin
         }

         return 0
      }

       return (a.breakpoint - b.breakpoint) * isMin
      })
   }

   function isNumber(value) {
      return !isNaN(value)
   }
}
useDynamicAdapt();