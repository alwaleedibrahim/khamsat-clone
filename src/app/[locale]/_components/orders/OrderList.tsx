import React, { useEffect, useState } from 'react'
import IOrderListItem from '../../_models/orderlist'
import orderListLoader from '../../_lib/axios/orderListLoader'
import OrderHeader from './OrderHeader'
import Spinner from '../reusable/spinner'
import { useSearchParams } from 'next/navigation'

const OrderList = ({token}: {token:string})=> {
  const [purchases, setPurchases] = useState<IOrderListItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const searchParams = useSearchParams()
 
  const status = searchParams.get('status')
  useEffect(()=> {
    orderListLoader(token, status).then((value)=> {
      setPurchases(value)
      setIsLoading(false)
    }).catch(()=>{
      setPurchases([])
      setIsLoading(false)
    })
  },[token, status])

  useEffect(()=>{
    console.log(purchases);
  }, [purchases])
  
  return <>
  {isLoading? 
  <Spinner /> :
  !purchases[0] ? <>
        <div className="bg-white w-full p-5">
          <p className='font-naskh text-lg text-center'>لا يوجد مشتريات</p>
        </div>
        </> : 
        purchases?.map((item, index)=> <OrderHeader key={index} item={item}/>)
  }
  </>
}
export default OrderList