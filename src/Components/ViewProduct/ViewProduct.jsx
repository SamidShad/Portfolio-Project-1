import React, { useState, useEffect } from "react";
// IMPORT PRODUCT IMAGES ->>
import AdHeadPhoneProduct1 from "../../assets/AdProducts/adproduct1.png";
import AdHeadPhoneProduct2 from "../../assets/AdProducts/adproduct2.png";
import AdHeadPhoneProduct3 from "../../assets/AdProducts/adproduct3.png";
import AdHeadPhoneProduct4 from "../../assets/AdProducts/adproduct4.png";
// IMPORT PARAMS HOOK FOR GET URL PARAMETERS ->>
import { useParams } from "react-router-dom";
// IMPORT MODAL COMPONENTS ->>
import {
  FormControl,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
// IMPORT TOAST FOR NOTIFY ->>
import { toast } from "react-toastify";
// IMPORT SLIDER ->>
import RelatedProductsSlider from "../RelatedProducts/RelatedProductsSlider";

function ViewProduct() {
  // HOOK FOR MODAL COMPONENTS ->>
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  // NOTIFY FOR SET NOTIFICATION TEXT ->>
  const notify = () => toast.success("Thanks For Buying");

  // ALL HOOKS FOR THIS SECTION ->>
  const [viewProductALLHooks, setViewProductALLHooks] = useState({
    productImage: "",
    headPhoneName: "",
    headPhoneAboutText: "",
    headPhonePriceText: "",
  });

  // QUANTITY ->>
  const [quantity, setQuantity] = useState(1);

  // GET PRODUCT NAMES BY HOOK ->>
  const { productName } = useParams();

  // VIEW PRODUCT LOGIC ->>
  useEffect(() => {
    if (productName === "QuietComfort") {
      setViewProductALLHooks({
        productImage: AdHeadPhoneProduct1,
        headPhoneName: "QuietComfort 35 wireless headphones II",
        headPhoneAboutText:
          "QuietComfort 35 wireless headphones II: Unparalleled noise cancellation, exceptional sound quality, up to 20 hours of wireless listening, voice assistants, and easy Bluetooth pairing. Perfect for travel, work, or leisure.",
        headPhonePriceText: "199.0",
      });
    } else if (productName === "SoundLink®") {
      setViewProductALLHooks({
        productImage: AdHeadPhoneProduct2,
        headPhoneName: "SoundLink® aroundear wireless headphones",
        headPhoneAboutText:
          "SoundLink around-ear wireless headphones: Premium audio, comfort, and convenience with advanced microphone systems, rechargeable battery (15 hours), and wireless Bluetooth technology. Ideal for on-the-go listening.",
        headPhonePriceText: "269.99",
      });
    } else if (productName === "Boseon-ear") {
      setViewProductALLHooks({
        productImage: AdHeadPhoneProduct3,
        headPhoneName: "Bose on-ear wireless headphones",
        headPhoneAboutText:
          "On-ear wireless headphones: Sleek and lightweight, with up to 15 hours of battery life, advanced microphone systems, intuitive touch controls, and voice prompts for easy operation.",
        headPhonePriceText: "209.99",
      });
    } else if (productName === "BoseNoiseCancelling") {
      setViewProductALLHooks({
        productImage: AdHeadPhoneProduct4,
        headPhoneName: "Bose Noise Cancelling Headphones 700",
        headPhoneAboutText:
          "Noise Cancelling Headphones 700: Premium noise-cancelling technology with 11 levels of noise cancellation, intuitive touch controls, voice assistants, exceptional sound quality, and a sophisticated design that complements any style.",
        headPhonePriceText: "379.00",
      });
    }
  }, [productName]);

  // QUANTITY PLUS LOGIC ->>
  function plusQuantity() {
    setQuantity(quantity + 1);
  }

  // QUANTITY MINUS LOGIC ->>
  function minusQuantity() {
    setQuantity(quantity - 1);
  }

  // SUBMIT FORM FUNCTION ->>
  function SubmitFormFunc(e) {
    e.preventDefault();
    onClose();
    notify();
  }

  return (
    <>
      {/* VIEW PRODUCT SECTION ->> */}
      <section className="view_product_section">
        <div className="view_product_box">
          {/* VIEW PRODUCT IMAGES ->> */}
          <img
            src={viewProductALLHooks.productImage}
            className="product_image"
            alt="Products-Images"
          />
          {/* VIEW PRODUCT TEXTS->> */}
          <div className="view_product_text_box">
            <h1>{viewProductALLHooks.headPhoneName}</h1>
            <p>{viewProductALLHooks.headPhoneAboutText}</p>
            <p className="view_product_price_text">
              ${viewProductALLHooks.headPhonePriceText}
            </p>
            {/* VIEW PRODUCT QUANTITY AREA ->> */}
            <div className="quantity_area">
              <button className="quantity_btn" onClick={plusQuantity}>
                +
              </button>
              <span className="quantity_text">{quantity}</span>
              {quantity <= 1 ? (
                <button
                  disabled
                  className="quantity_btn"
                  onClick={minusQuantity}
                >
                  -
                </button>
              ) : (
                <button className="quantity_btn" onClick={minusQuantity}>
                  -
                </button>
              )}
            </div>
            <button className="buy_now_btn" onClick={onOpen}>
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* MORE PRODUCTS CONTAINER ->> */}
      <div className="more-products-container">
        <div className="more-products">
          <div className="more-products-text-box">
            {/* MORE PRODUCTS CONTAINER TITLE ->> */}
            <h1 className="more-products-text">More Products</h1>
          </div>
          <RelatedProductsSlider centeredSlides={false} />
        </div>
      </div>

      {/* MODAL ->> */}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <form onSubmit={SubmitFormFunc}>
          <ModalContent className="modal_content">
            <p className="form_title">Fill This From to Buy</p>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <p className="input_head_texts">First name</p>
                <input
                  type="text"
                  ref={initialRef}
                  required
                  className="inputBoxes"
                  placeholder="First name"
                />
              </FormControl>

              <FormControl mt={4}>
                <p className="input_head_texts">Last name</p>
                <input
                  type="text"
                  className="inputBoxes"
                  required
                  placeholder="Last name"
                />
              </FormControl>

              <FormControl mt={4}>
                <p className="input_head_texts">Email</p>
                <input
                  type="email"
                  className="inputBoxes"
                  required
                  placeholder="Enter your email"
                />
              </FormControl>

              <FormControl mt={4}>
                <p className="input_head_texts">Number</p>
                <input
                  type="number"
                  className="inputBoxes"
                  required
                  placeholder="Enter your number"
                />
              </FormControl>

              <FormControl mt={4}>
                <p className="input_head_texts">Address</p>
                <input
                  type="text"
                  className="inputBoxes"
                  required
                  placeholder="Enter your address"
                />
              </FormControl>

              <FormControl mt={4}>
                <p className="input_head_texts">Quantity: {quantity}</p>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <button className="buy_btn" mr={3}>
                Buy
              </button>
              <button className="form_cancel_btn" onClick={onClose}>
                Cancel
              </button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}

export default ViewProduct;
