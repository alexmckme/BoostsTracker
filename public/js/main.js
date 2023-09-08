const deleteBtn = document.querySelectorAll('.fa-trash')
const item = document.querySelectorAll('.item span')
const itemCompleted = document.querySelectorAll('.item span.completed')

Array.from(deleteBtn).forEach((element)=>{
    element.addEventListener('click', deleteBeneficiaireID)
})

Array.from(item).forEach((element)=>{
    element.addEventListener('click', markBeneficiaireIDComplete)
})

Array.from(itemCompleted).forEach((element)=>{
    element.addEventListener('click', markBeneficiaireIDUnComplete)
})

async function deleteBeneficiaireID(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('deleteBeneficiaireID', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function markBeneficiaireIDComplete(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markBeneficiaireIDComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function markBeneficiaireIDUnComplete(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markBeneficiaireIDUnComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}