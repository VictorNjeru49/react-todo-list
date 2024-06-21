import './body.scss'


const Container=()=>{
    return(
        <>
        <div className='container'>
       <p>items left</p>

        <div className='sidebar'>

        <div className='listing'>
        <p> All</p>
       <p>Active</p>
       <p>Completed</p>
        </div>

       <p>Clear Completed</p>
        </div>


        </div>
        <p>Drag and drop to reorder list</p>
        </>
    )
}
export default Container