import { MailLogo, VisaLogo, MastercardLogo, PlusLogo, DownloadLogo } from 'assets'
import { DefaultInput, PaymentCard, RadioInput, Button, Table } from 'components'
import { links, tableData } from 'data'
import { useMemo, useState } from 'react'
import Slider from "react-slick";
import useViewport from 'hooks/useViewPort';

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 2,
  draggable: true,
  swipe: true,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
};

const Settings = () => {
  const [defaultCard, setDefaultCard] = useState("");
  const { currentScreenSize } = useViewport();
  const dataMap = useMemo(() =>
    links.map(({ name }) => {
      return <div className='border border-gray-300 px-2 md:px-3 py-2 text-gray-700 text-xs text-center md:text-base' key={name}>{name}</div>
    })
    , [links])
  return (
    <div className='px-3 py-3 md:py-6 md:px-6 w-full bg-gray-50'>
      <div className=''>
        <div>
          <h3 className='font-bold md:text-3xl text-xl'>Settings</h3>
          <p className='text-gray-500 text-sm'>Manage your team and preferences here.</p>
        </div>
        {
          currentScreenSize.width < 1080 ? (
            <div className='py-6 px-3 w-full md:w-[72%] lg:w-full'>
              <Slider {...settings}>
                {dataMap}
              </Slider>
            </div>
          ) : (
            <div className='flex row py-6'>
              {dataMap}
            </div>
          )

        }

      </div>
      <main className=''>
        <div className='py-6'>
          <h4>Payment method</h4>
          <p className='text-gray-500'>Update your billing details and address</p>
        </div>
        <hr />
        <section className='flex lg:row py-6 flex-col'>
          <div className='w-full lg:w-4/12 flex-none mb-4 md:mb-0'>
            <h5>Contact email</h5>
            <p className='text-gray-500'>Where should invoices be sent?</p>
          </div>
          <div className='w-full md:w-8/12 flex-1'>
            <RadioInput labelPlacement='after' name='radio' type='radio' id={"radio1"} labelText={<div>
              <p className='text-gray-700'>Send to my account email</p>
              <p className='text-gray-500'>olivia@untitledui.com</p>
            </div>} labelProps={{ htmlFor: "radio1" }} />
            <RadioInput labelPlacement='after' name='radio' type='radio' id={"radio2"} labelText={"Send to an alternative email"} labelProps={{ htmlFor: "radio2" }} />
            <div>
              <DefaultInput Logo={MailLogo} value={"billing@untitledui.com"} />
            </div>
          </div>
        </section>
        <hr />
        <section className='flex lg:row flex-col py-6'>
          <div className='w-full lg:w-4/12 flex-none mb-4 lg:mb-0'>
            <h5>Card details</h5>
            <p className='text-gray-500'>Select default payment method.</p>
          </div>
          <div className='w-full md:w-8/12 flex-1'>
            <PaymentCard Logo={VisaLogo} cardType='Visa' expiryDate='06/24' endingNumbers='1234' isDefault={defaultCard === 'Visa'} handleClick={() => { setDefaultCard('Visa') }} />
            <PaymentCard Logo={MastercardLogo} cardType='MasterCard' expiryDate='06/24' endingNumbers='1234' isDefault={defaultCard === 'MasterCard'} handleClick={() => { setDefaultCard("MasterCard") }} />

            <div className='flex row items-center'>
              <PlusLogo />
              <span className='ml-2 mr-3'>Add new payment method</span>
              <div className='w-[100px] h-[100px] hidden sm:flex bg-grey rounded-full'></div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex row justify-between mb-3 items-center">
            <h5 className={'font-medium mb-0'}>Billing history</h5>
            <div>
              <Button className={`inline-flex px-3 py-1 bg-white border rounded-lg border-gray-200 items-center`}>
                <DownloadLogo />
                &ensp;
                <span>Download</span>
              </Button>

            </div>

          </div>
        </section>

        <div>
          <Table columns={tableData.head} data={tableData.body} />
        </div>
      </main>

    </div>
  )
}

export default Settings