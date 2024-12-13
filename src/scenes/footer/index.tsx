import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo} />
                <p className="my-5">
                Elevate your fitness journey with our innovative gym platform. Access personalized workout plans, track your progress, and stay motivated anytime, anywhere. Start building a healthier, stronger you—because your fitness goals deserve the best!
                </p>   
                <p>© Evogym All Rights Reserved.</p>    
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Follow us on Facebook</p>
                <p className="my-5">Follow Us on Instergram</p>
                <p >Join our community</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5"><span className="font-bold">Mobile :</span> 011-12346743536</p>
                <p className="my-5"><span className="font-bold">Office :</span> 242525251353463</p>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer