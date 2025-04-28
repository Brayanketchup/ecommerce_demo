import { useParams } from 'react-router-dom'
import { TopsData, Reviews } from '../constants'
import { useState, React } from 'react'
import { ProductInfo } from '../components'
import { ReviewCard, CategoryDisplay } from '../minicomponents'


export const ProductTops = () => {
  const { id } = useParams()


  const product = TopsData.find(p => p.id === parseInt(id));
  const recomendations = TopsData.filter(p => p.id !== parseInt(id));
  console.log(recomendations)
  const productReviews = Reviews.filter(r => r.itemID === parseInt(id));
  const [amount, setAmount] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")

  const toggleSelected = (sizeOption) => {
    if (selectedSize !== sizeOption) {
      setSelectedSize(sizeOption);
    } else {
      setSelectedSize("");
    }
  }

  if (id && !product) {
    return (
      <main className='min-h-screen flex flex-col gap-2 items-center justify-center'>
        <h1 className='text-3xl font-bold'>Couldn't find your product we are sorry for the inconvenience</h1>
        <a href='/' className='text-white bg-black/80 px-6 py-5 text-md'>Go Back To Home</a>
      </main>
    )
  }

  if (!id) {
    return (
      <main>
        <CategoryDisplay
          title='Tops section'
          data={TopsData}

        />
      </main>
    )
  }

  return (
    <main className='lg:px-36 md:px-12 px-10 min-h-screen'>

      <ProductInfo
        product={product}
        amount={amount}
        toggleSelected={toggleSelected}
        selectedSize={selectedSize}
      />
      <div className='py-7'>
        <h6 className='text-2xl font-extrabold'>
          All Reviews
          <span className=' font-light text-sm text-gray-400 '> (5)</span>
        </h6>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6 '>
          {productReviews?.length > 0 ? (
            <>
              {productReviews.map((review, index) => (
                <ReviewCard
                  key={index}
                  review={review}
                />
              ))}

            </>
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>

        <div className='w-full flex justify-center flex-wrap content-center pt-4'>
          <button className="bg-white border-[1px] rounded-full py-2 px-14 hover:bg-gray-200 transition duration-300">
            View All
          </button>
        </div>
        <div>
          <CategoryDisplay
            title='You Might Also Like'
            data={recomendations} />
        </div>
      </div>

    </main>
  )
}
