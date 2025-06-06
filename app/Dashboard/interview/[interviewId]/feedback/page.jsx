'use client'
import React, { useEffect, useState } from 'react'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { db } from '@/utils/db'
import { use } from 'react'
import { Button } from '@/components/ui/button'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
  

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const actualParams = use(params);
  const router=useRouter();
  useEffect(() => {
    getFeedback()
  }, [])

  const getFeedback = async () => {
    
    const result = await db.select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, actualParams.interviewId))
      .orderBy(UserAnswer.id)
    setFeedbackList(result)
    console.log(result)
  }
  
  let feedBack = feedbackList.reduce((acc, item) => acc + Number(item.rating), 0);
  feedBack= (feedbackList.length > 0 ? (feedBack / feedbackList.length).toFixed(2) : 0) * 2;
  return (
    <div className='p-10'>
      {feedbackList?.length == 0?
        <h2 className="text-center text-lg font-semibold text-gray-500 mt-8">
        No Interview Record
      </h2>
      
      :
      <>
      <h2 className='text-3xl font-bold text-green-500'>Congratulations</h2>
      <h2 className='font-bold text-2xl'>Here is your Interview Feedback</h2>
      <h2 className='text-primary text-lg my-3'>Your Overall Interview Rating <strong>{feedBack}/10</strong></h2>
      <h2 className='text-sm text-gray-500'>
        Find below interview question with correct answer, your answer and feedback for improvement
      </h2>
      </>
    }
      {feedbackList && feedbackList.map((item,index)=>(
            <Collapsible key={index} className="mt-3">
                <CollapsibleTrigger className='p-2 bg-slate-500 rounded-lg 
                    my-2 text-left flex justify-between w-full'>
                {item?.question}<ChevronsUpDown className='h-5 w-5'/>
                </CollapsibleTrigger>
                <CollapsibleContent>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-red-500 p-2 border rounded-lg'><strong>Rating:</strong>{item?.rating}</h2>
                    <h2 className='p-2 border rounded-lg bg-red-50 text-sm text-red-900'><strong>Your Answer:</strong>{item?.UserAns}</h2>
                    <h2 className='p-2 border rounded-lg bg-green-50 text-sm text-green-900'><strong>Correct Answer:</strong>{item?.correctAns}</h2>
                    <h2 className='p-2 border rounded-lg bg-yellow-50 text-sm text-yellow-900'><strong>Feedback:</strong>{item?.feedback}</h2>
                </div>
                </CollapsibleContent>
            </Collapsible>      
      ))}

      <div className='flex justify-center my-4'>
      <Button onClick={()=>router.replace('/Dashboard')} >GO Home</Button>
      </div>
    </div>
  )
}

export default Feedback
