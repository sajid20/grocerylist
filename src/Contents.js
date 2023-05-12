import ItemList from "./ItemList";

const Contents = ({items, handleCheck, handleDelete}) => {
 

  return (
    <main> 
      {items.length ? ( 
          <ItemList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ) : (
          <p style={{ marginTop : '2 rem'}}>Your List is Empty.</p>
        )}
    </main>
  )
}

export default Contents