const data = [
  {
    question:
      "What services do you offer?", ans: "We offer a wide range of travel services, including travel planning, accommodation booking, guided tours, transportation arrangements, and more. Whether you're looking for a complete travel package or specific services, we've got you covered",
  },
  {
    question: 'Do you offer travel insurance?',
    ans: 'Yes, we offer travel insurance options to ensure your peace of mind during your journey. Contact our customer support for more information and assistance with selecting the right coverage.',
  },
  {
    question: 'How do I book a trip or tour?',
    ans: 'Booking with us is easy. You can browse our website for available trips, choose your preferred itinerary, and follow the booking instructions. You can also contact our customer support for personalized assistance.',
  },
  {
    question: ' Can I make changes to my reservation after booking?',
    ans: 'Changes to reservations are subject to availability and may be subject to fees. Contact our customer support as soon as possible to discuss any modifications you wish to make.',
  },
  {
    question: 'What payment methods do you accept?',
    ans: 'We accept various payment methods, including credit cards, bank transfers, and other secure online payment options. Payment details will be provided during the booking process.',
  },
]
import SingleQuestion from "./SingleQuestion"
const Faq = () => {
  return (
    <div className='py-20 bg-[url(https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-top bg-no-repeat bg-blend-overlay bg-white/90'>
      <div className='font-[cursive] mb-10  text-center'>
        <h1 className='text-3xl font-bold md:text-4xl text-red-500 '>FAQ</h1>
        <p className='text-sm mt-4 md:text-base '>Frequently Asked Questions</p>
      </div>
      <div className='w-[90vw] sm:max-w-xl  md:max-w-5xl mx-auto'>
        {data.map((item, index) => {
          return <SingleQuestion key={index} {...item}></SingleQuestion>
        })}
      </div>
    </div>
  )
}

export default Faq