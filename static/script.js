console.log('hello')
document.addEventListener('DOMContentLoaded',()=>{
    console.log('DOM')
    document.getElementById('delete-form').addEventListener('submit',(e)=>{
        console.log('You clicked delete')
        if(confirm('Are you sure?')){
            return true
        }
        else{
            e.preventDefault()
            return false
        }
        
    })
})



