'use client'
import { useReviewContext } from "@/context/reviewContext"



const Optimize = () => {

    const context = useReviewContext()
    const { reviewData, JDText, reviewText } = context



    return (
        <>
            <button onClick={() => {
                console.log("Review Data:", reviewData);
                console.log("JD Text:", JDText);
                console.log("Review Text:", reviewText);
            }}>
                Click
            </button>
        </>
    )
}

export default Optimize