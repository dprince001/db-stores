import {Link} from 'react-router-dom'

const ShopItemComp = ({itemObj}) => {
    const {id, title, quantity, imageUrl, price, available} = itemObj;

  return (
    <div className='mt-[30px] group'>
        <Link to={`/product/${id}`}>
            <div className='relative overflow-hidden'>
                <img src={imageUrl} className='group-hover:scale-125 transition-all duration-500'/>

                {available ? <span className='absolute left-[10px] rounded-xl bottom-[10px] bg-[#092532] text-white font-extralight p-[3px] px-[15px] text-sm'>Sale</span> : <span className='absolute left-[10px] rounded-xl bottom-[10px] bg-[#092532] text-white font-extralight p-[3px] px-[15px] text-sm'>Sold Out</span>}
            </div>
            <div className='px-[10px]'>
                <p className='font-inter text-sm font-extralight mt-[10px]'>DP STORES</p>
                <p className='font-medium font-serif group-hover:underline'>{title}</p>
                {price && <p className='font-normal font-["sans-serif"]'>₦{price.toLocaleString()}</p>}
            </div>
        </Link>
    </div>
  )
}

export default ShopItemComp