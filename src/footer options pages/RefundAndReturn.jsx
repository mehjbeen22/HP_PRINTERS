export default function RefundAndReturn() {
  return (
    <div className="bg-[#38bdf8] pt-5 ">
      <div className="flex justify-center">
        <h1 className="text-6xl text-white border-b-4 border-black">
          Refund and Returns Policy
        </h1>
      </div>
      <div className="p-16">
        <div className="flex justify-center flex-col p-5 shadow-2xl border border-gray-200 rounded-sm bg-white">
          <p>
            Thanks for shopping at from us. We appreciate the fact that you like
            to buy the goods we offer. We also want to make sure you have a
            rewarding experience while you’re exploring, evaluating, and
            purchasing our products. <br />
            As with any shopping experience, there are terms and conditions that
            apply to transactions at we are. We’ll be as brief as our attorneys
            will allow. The main thing to remember is that by placing an order
            or making a purchase at we are, you agree to the terms set forth
            below along with us Privacy Policy. <br /> If there’s something
            wrong with the product you bought, or if you are not happy with it,
            you have 15 days to issue a refund and return your product. If you
            would like to return a product, the only way would be if you follow
            the next guidelines:
          </p>
          {refundPolicyArray.map(({ id, section, content }) => {
            return (
              <div key={id} className="mt-4">
                <h2 className="font-semibold text-xl mb-2">{section}</h2>
                <ul className="my-3">
                  {content.map((value, index) => {
                    return (
                      <li key={`${id}-${index}`} className="list-disc my-2">
                        {value}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const refundPolicyArray = [
  {
    id: 1,
    section: 'Refunds',
    content: [
      `We at  Our Store, commit ourselves to serve our customers with the best products. Every single product that you choose is thoroughly inspected, checked for defects and packaged with utmost care. We do this to ensure that you fall in love with our products. 
Sadly, there are times when we may not have the product(s) that you choose in stock, or may face some issues with our inventory and quality check. In such cases, we may have to cancel your order. You will be intimated about it in advance so that you don’t have.`,

      ` If you have purchased via Online payment (not Cash on Delivery), then you will be refunded once our team confirms your request.
We carry out thorough quality checks before processing the ordered item. We take utmost care while packing the product. At the same time we ensure that the packing is good such that the items won’t get damaged during transit. Please note that  Our Store is not liable for damages that are caused to the items during transit or transportation. 
We will revise your returned product as soon as we receive it and if it follows the guidelines addressed above, we will proceed to issue a refund of your purchase. Your refund may take a couple of days to process but you will be notified when you receive your money. `,
    ],
  },
  {
    id: 2,
    section: 'Requirements for a Full Refund:',
    content: [
      'Items must be in new condition, exactly as received.',
      'Include all original packaging and accessories, such as a blank warranty card, UPC code, with no filled or claimed rebates.',
      'Ship items back to us fully insured, using a traceable shipping method at your expense.',
    ],
  },
  {
    id: 3,
    section: 'When a Product Cannot Be Returned:',
    content: [
      'Beyond 15 days from the receipt of your shipment.',
      'Item is marked as “Final Sale” or “Special Order.”',
      'Item is in used condition or has been installed.',
      'Warranty card is filled out, product registered or serviced, or rebates filed and/or claimed.',
    ],
  },
  {
    id: 4,
    section: 'How to Return a Product:',
    content: [
      'Email us at support@ Our Store.com and request a return within 15 days of receipt.',
      'Once approved, ship the item back to the designated warehouse fully insured with a trackable shipping method.',
    ],
  },
  {
    id: 5,
    section: 'How to Avoid a Return:',
    content: [
      'Check specifications for electrical appliances, ensuring compatibility with your requirements.',
      'Verify cutout dimensions for built-in appliances.',
      'Inspect large products for damages upon delivery.',
      'Measure doorways and spaces for large products to avoid complications.',
      'We are not responsible for return shipping costs. Every shipping has to be paid by the customer, even if the item had free shipping, the customer has to pay for the shipping in return.',
    ],
  },
  {
    id: 6,
    section: 'Delivery Policy:',
    content: [
      'Normal Delivery Hours are 8 am-7 pm Monday-Friday.',
      'No guaranteed delivery date and time.',
      'Adult signature required at the time of delivery.',
      'Inspection of products for damages upon delivery is crucial.',
    ],
  },

  {
    id: 8,
    section: 'Order Cancellation Policy:',
    content: [
      'No cost for cancellations before shipping.',
      'After shipping, an estimated $1.50 per pound return shipping fee applies.',
      '“Special Order” or “Final Sale” products cannot be canceled at any time.',
    ],
  },
  {
    id: 9,
    section: 'Product Image and Specifications Policy:',
    content: [
      'Product images are for representation; specifications and features should be cross-verified.',
      'Check with our sales associates or the manufacturer’s website for accurate information.',
    ],
  },
  {
    id: 10,
    section: ' Freight Forwarding Policy:',
    content: [
      'we are is not responsible for damage or loss after acceptance by you or a freight forwarder.',
      'If goods arrive damaged, refuse them, and instruct your freight forwarder accordingly.',
      'You or the freight forwarder are responsible for compliance with export and import regulations, and  Our Store should not be listed on any export documents.',
    ],
  },
  {
    id: 11,
    section: 'Your Consent',
    content: [
      `By using our website, registering an account, or making a purchase, you hereby consent to our Return & Refund Policy and agree to its terms.
Changes To Our Return & Refund Policy`,
      `Should we update, amend or make any changes to this document so that they accurately reflect our website and policies. Unless otherwise required by law, those changes will be prominently posted here. Then, if you continue to use the website, you will be bound by the updated Return & Refund Policy. If you do not want to agree to this or any updated Return & Refund Policy, you can delete your account.`,
    ],
  },
];
