const getproducts= async()=>{

    
    const params=new URLSearchParams(window.location.search);
    const category=params.get('category');
    const{data}=await axios.get('https://dummyjson.com/products/category/'+category);
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
displayproducts();