const getcategorys =async() => {
    const { data } = await axios.get('https://dummyjson.com/products/category-list');

return data;
}

    
const displaycategorys =async()=>{

const  categorys=await getcategorys();
const result = categorys.map ((category)=>{
    return `<div class="category">
    <h2>${category}</h2>
    <a href='categorys.html?category=${category}'>Details</a>
    </div>
    `
    }).join(' ');
    
    document.querySelector(".container .row").innerHTML=result;
}




const getproducts =async()=>{
    const {data} =await axios.get('https://dummyjson.com/products')
  
return data;
}



const displayproducts=async()=>{
    const data=await getproducts();
   
   const  result=data.products.map((product)=>{
return `
 <div class="product">
 <img src="${product.thumbnail}" alt="${product.description}" />
 
<h2>${product.title}</h2>
<span>${product.price}</span>
</div>
`
    
    }).join(' ');
    document.querySelector(".products .row").innerHTML=result;
}

displaycategorys();

displayproducts();
