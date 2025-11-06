const methodList = [
    'map()',
    'forEach()',
    'filter()',
    'reduce()',
]


function ShoppingList() {
    return (
        <ul>
            {methodList.map((method, index) => (
                <li key={`${method}-${index}`}>{ method }</li>
            ))}
        </ul>
    )
}

export default ShoppingList

            
                
      