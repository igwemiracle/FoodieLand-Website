import { images } from "../../assets/images";
import { Button, MoreRecipes, SubscribeCard } from "../../components";
import { moreRecipes } from "../../constants";

const ContactPage = () => {
  return (
    <div className="ss:mt-28 sm:mt-48">

      <div className='flex flex-col items-center gap-14 mx-auto mb-44'>
        <h1 className="Header1">
          Contact Us
        </h1>
        <div className="flex lg:flex-row ss:flex-col justify-between gap-8 w-[90%] mx-auto">
          <img className="basis-[45%] h-[660px] object-cover" src={images.contactPic} alt="show-pic" />
          <div className="flex flex-col gap-6 basis-[70%]">
            <div className="flex lg:flex-row ss:flex-col gap-6">
              <div className="flex flex-col gap-6">
                <div>
                  <label className="text-gray-500 ss:text-[10px] lg:text-[16px] sm:text-[12px]">
                    NAME
                  </label><br />
                  <input type="text" placeholder="Enter your name..." className="contactInputField" />
                </div>
                <div>
                  <label className="text-gray-500 ss:text-[10px] lg:text-[16px] sm:text-[12px]">
                    SUBJECT
                  </label><br />
                  <input placeholder="Enter subject..." type="text" className="contactInputField" />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <label className="text-gray-500 ss:text-[10px] lg:text-[16px] sm:text-[12px]">
                    EMAIL ADDRESS
                  </label><br />
                  <input placeholder="Your email address..." type="text" className="contactInputField" />
                </div>
                <div>
                  <label className="text-gray-500 ss:text-[10px] lg:text-[16px] sm:text-[12px]">
                    ENQUIRY TYPE
                  </label><br />
                  <input placeholder="Advertising..." type="text" className="contactInputField" />
                </div>
              </div>
            </div>
            <div>
              <label className="text-gray-500 ss:text-[10px] lg:text-[16px] sm:text-[12px]">
                MESSAGE
              </label><br />
              <textarea placeholder="Enter your messages..." type="text"
                className="focus:outline-none mt-2 pl-5 pt-5 border border-solid border-gray-200 w-full lg:h-[365px] rounded-[16px] placeholder:text-[18px] resize-y ss:placeholder:text-[10px] lg:placeholder:text-[16px] sm:placeholder:text-[12px]
                 " />
            </div>
            <div>
              <Button className="lg:px-16 ss:px-10" >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>

      <SubscribeCard />

      <div className="w-[90%] mx-auto my-36">
        <h2 className="Header2 text-center mb-20">Check out the delicious recipe</h2>
        <div className="grid ss:grid-cols-2  ss:gap-x-[14px] ss:gap-y-[14px] sm:gap-x-10 sm:gap-y-14 lg:grid-cols-4  lg:gap-y-14">
          {moreRecipes.slice(0, 4).map((recipe, index) => (
            <MoreRecipes key={index} recipe={recipe} />
          )
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;