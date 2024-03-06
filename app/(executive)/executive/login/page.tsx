import Footer from 'components/layout/footer';
import { ExecutiveLogin } from 'components/login/executive-login';

export const runtime = 'edge';

export const metadata = {
    title: 'Delivery Executive Login',
    description: 'Delivery executive account login page'
};

export default async function ExecutiveLoginPage() {

    return (
        <>
            <div className="mt-[-80px] bg-[linear-gradient(rgb(82,191,141),rgb(255,209,97))] text-black">
                <div className="container relative z-10 mx-auto px-[1.5rem] pt-16 lg:pt-32">
                    <div className="mx-auto max-w-screen-2xl px-4 h-screen">
                        <h1 className='text-center mb-5 font-work text-[30px] font-medium leading-[36px] md:text-[35px] md:leading-[42px] xl:text-[48px] xl:leading-[56px]'>Login to your Delivery Executive account</h1>
                        <div className='ml-auto mr-auto w-full max-w-[500px]'>
                            <ExecutiveLogin />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};
