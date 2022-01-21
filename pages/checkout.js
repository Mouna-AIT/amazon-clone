import Header from '../components/Header'
import Image from 'next/image'

const checkout = () => {
  return (
    <div>
      <Header />

      <main className='lg:flex max-w-screen-2x1 mx-auto'>
        <div className='flex-grow m-5'>
          <Image src='/Amazon-Prime-Day.jpeg' width={1450} height={280} />
          {/*empty Basket */}
          <div className='flex flex-col p-5 space-y-10'>
            <h1 className='text-5xl border-b pb-6'>
              {' '}
              Your Amazon cart is empty{' '}
            </h1>
          </div>
        </div>
      </main>
    </div>
  )
}

export default checkout
