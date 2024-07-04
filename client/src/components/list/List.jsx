import { listData } from '../../lib/dummydata'
import Card from '../card/card'
import './list.scss'

function List ({posts}) {
  return (
    <div className='list'>
      {posts.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default List
