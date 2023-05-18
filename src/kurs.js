 import {model} from './model'
 import {title,text,columns,image,} from './templates.js'
 import 'styles/style.css'

const $site = document.querySelector('#site')

model.forEach(block => {
    let html = ''

     if (block.type === 'title') {
     html = title(block)
}
    
     if  (block.type === 'text') {
     html = text(block)
}

     if (block.type === 'columns') {
      html = columns(block)
} 

     if (block.type === 'image') {
    html = image(block)
} 


    $site.insertAdjacentHTML('beforeend', html)

}) 

