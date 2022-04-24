console.log('test');

function loadItems() {
   return fetch('data/data.json')
//    .then(response =>console.log(response));
      .then((response) =>{
          return response.json()
      } )
      .then((json)=>{
        //    return console.log(json) 
        // return console.log(json.items)
        return json.items;
      })
}
// loadItems()

function displayItems(items) {
 const container = document.querySelector('.items');
 const html = items.map(item=>createHTMLString(item)).join('');
 console.log(html);
 container.innerHTML =items.map((item) =>{
     return createHTMLString(item)
 }).join('');

}
function onButtonClick(event, items){

}

function setEventListeners(items){
    const logo = document.querySelector('.logo');
    const buttons =document.querySelector('buttons');
//    logo.addEventListener('click', ()=>{
    //    return displayItems(items);
//    })
    logo.addEventListener('click', ()=>displayItems(items));
    buttons.addEventListener('click', (event)=>{
        return onButtonClick(event,items)
    })
}

function createHTMLString(item) {
    return ` 
     <li class="item">
        <img src="${item.image}" alt="${item.type}" 
            class="item__thumbnail" />
         <span class="item__description">${item.gender},
          ${item.size}</span>
    </li>  
    `;
}
// console.log(createHTMLString);


loadItems()
.then(items =>{
    console.log(items);
    displayItems(items);
    // console.log(displayItems)
    setEventListeners(items)
    // console.log(setEventListner);
})
.catch(console.log)
