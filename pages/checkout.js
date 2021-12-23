import Header from '../components/Header'
import Image from 'next/image'

const checkout = () => {
  return (
    <div>
      <Header />

      <main className='lg:flex max-w-screen-2x1 mx-auto'>
        <div>
          <Image src='/Amazon-Prime-Day.jpeg' width={1450} height={280} />

          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-5xl border-b pb-7'>
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
