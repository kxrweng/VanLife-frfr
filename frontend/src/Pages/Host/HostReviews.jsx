import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const HostReviews = () => {
  const reviewsData = [
    {
        rating: 5,
        name: "Elliot",
        date: "January 3, 2023",
        text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
        id: "1",
    },
    {
        rating: 5,
        name: "Sandy",
        date: "December 12, 2022",
        text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
        id: "2",
    },
]
  return (
    <div className = "flex flex-col bg-[#FFF7ED] pb-10 pt-5 px-10 gap-5">
      <div className = "flex flex-row items-baseline gap-10">
        <div className = "text-5xl font-inter font-bold">
          Your reviews
        </div>

        <div className = "font-inter text-lg text-[#4D4D4D]">
          Last 30 days
        </div>
      </div>

      <div className = "flex flex-col">
        <div>
          <img src = "/ratingsfr.svg" className = ""/>
        </div>

      </div>

      <div className = "flex flex-col gap-5">
        <div className = "font-inter font-semibold text-2xl">
          Reviews ({reviewsData.length})
        </div>

        <div className = "flex flex-col gap-10">
        {reviewsData.map((review) => {
          return(
            <div className = "gap-2 flex flex-col border-b border-b-black " key = {review.id}>
              <div>
            <Stack spacing={0}>
            <Rating name="half-rating-read" defaultValue={review.rating} precision={0.5} readOnly />
          </Stack>
              </div>

              <div className = "flex flex-row gap-5">
                <div className = "font-inter font-semibold text-xl">
                {review.name}
                </div>

                <div className = "font-inter font-semibold text-[#4D4D4D] text-lg">
                {review.date}
                </div>
              </div>

              <div className = "font-inter font-semibold text-xl py-5">
                {review.text}
                </div>

            </div>
          )
          
        })}
        </div>
      

      </div>
    </div>
  )
}

export default HostReviews