'use client';

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';


interface Faq {
  question: string;
  answer: string;
}
export default function FaqList( {question, answer}: Faq) {
  return (
    <div className="">
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>{question}</AccordionTrigger>
        <AccordionContent>
          {answer}
        </AccordionContent>
      </AccordionItem>
      </Accordion>
      </div>
  )
}
