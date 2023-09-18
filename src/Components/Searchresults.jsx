import './Searchresults.css'
import Card from './Card'

const Searchresults = ({exercises}) => {

  return (
    <div className='results-outer-div'>
        <div className='text1'>Results</div>
        <div className="cardclass">
        <Card data={exercises}/>
        </div>
    </div>
  )
}

export default Searchresults