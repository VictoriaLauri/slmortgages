import { Button } from '../components/ui'

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center gap-6 p-6 bg-gray-50'>
      {/* Existing home page content */}
      <h1 className='text-2xl font-bold mb-4'>Welcome to SL Mortgages</h1>

      {/* --- TEST BUTTONS SECTION --- */}
      <section className='flex flex-wrap gap-4 justify-center items-center bg-white p-6 rounded-xl shadow-sm'>
        <div className='space-y-2 text-center'>
          <h2 className='font-semibold text-sm text-gray-600'>
            Primary Buttons
          </h2>
          <div className='flex gap-3 flex-wrap justify-center'>
            <Button variant='primary' size='sm'>
              Primary SM
            </Button>
            <Button variant='primary' size='md'>
              Primary MD
            </Button>
            <Button variant='primary' size='lg'>
              Primary LG
            </Button>
          </div>
        </div>

        <div className='space-y-2 text-center'>
          <h2 className='font-semibold text-sm text-gray-600'>
            Secondary Buttons
          </h2>
          <div className='flex gap-3 flex-wrap justify-center'>
            <Button variant='secondary' size='sm'>
              Secondary SM
            </Button>
            <Button variant='secondary' size='md'>
              Secondary MD
            </Button>
            <Button variant='secondary' size='lg'>
              Secondary LG
            </Button>
          </div>
        </div>

        <div className='space-y-2 text-center'>
          <h2 className='font-semibold text-sm text-gray-600'>
            Outline Buttons
          </h2>
          <div className='flex gap-3 flex-wrap justify-center'>
            <Button variant='outline' size='sm'>
              Outline SM
            </Button>
            <Button variant='outline' size='md'>
              Outline MD
            </Button>
            <Button variant='outline' size='lg'>
              Outline LG
            </Button>
          </div>
        </div>
      </section>
      {/* --- END TEST SECTION --- */}
    </main>
  )
}
