import React, { useEffect, useState } from 'react'
import IOrderListItem from '../../_models/orderlist'
import orderListLoader from '../../_lib/axios/orderListLoader'
import OrderHeader from './OrderHeader'
import Spinner from '../reusable/spinner'
import { useSearchParams, usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

const OrderList = ({token}: {token:string})=> {
  const [purchases, setPurchases] = useState<IOrderListItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const t = useTranslations()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const endpoint = pathname.includes('purchases') ? `my-orders` : `my-sales`
  const status = searchParams.get('status')
  useEffect(()=> {
    orderListLoader(token, status, endpoint).then((value)=> {
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
          <p className='font-naskh text-lg text-center'>{pathname.includes('purchases')? t('OrdersPage.purchases.notfound'): t('OrdersPage.orders.notfound')}</p>
        </div>
        </> : 
        purchases?.map((item, index)=> <OrderHeader key={index} item={item}/>)
  }
  </>
}
export default OrderList