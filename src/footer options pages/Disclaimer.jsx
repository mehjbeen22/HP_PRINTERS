const Disclaimer = () => {
  return (
    <div className="bg-[#38bdf8] pt-5">
      <div className="flex justify-center">
        <h1 className="text-6xl text-white  border-b-4 border-black ">
          Disclaimer
        </h1>
      </div>
      <div className="py-10 px-2">
        <div
          className="flex justify-center flex-col p-5 shadow-2xl border
         border-gray-200 rounded-sm bg-white"
        >
          {disclaimerArray.map(({ id, heading, desc }) => {
            return (
              <div key={id} className="m-2">
                <h2 className="font-semibold text-xl mb-2">{heading}</h2>
                {desc.map((value) => {
                  return (
                    <p key={id} className="my-1 list-disc my-2">
                      {value}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;

const disclaimerArray = [
  {
    id: 1,
    heading: 'Definitions and key terms',
    desc: [
      ' To help explain things as clearly as possible in this Disclaimer, every time any of these terms are referenced, are strictly defined as:',
      'Cookie: A small amount of data generated by a website and saved by your web browser. It is used to identify your browser, provide analytics, remember information about you such as your language preference or login information.',
      `Company:  when this policy mentions Company, “we,” “us,” or “our,” it refers to our Store   that is responsible for your information under this Disclaimer.`,
    ],
  },

  {
    id: 2,
    heading: 'Limited liability',
    desc: [
      'our Store   endeavors to update and/or supplement the content of the website on a regular basis. Despite our care and attention, content may be incomplete and/or incorrect.',
      'The materials offered on the website are offered without any form of guarantee or claim to their correctness. These materials can be changed at any time without prior notice from our Store   ',
      'Particularly, all prices on the website are stated subject to typing and programming errors. No liability is assumed for the implications of such errors. No agreement is concluded on the basis of such errors.',
      'our Store   shall not bear any liability for hyperlinks to websites of third parties included on the website. From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone.',
      'Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their “Terms of use” before engaging in any business or uploading any information.',
    ],
  },
  {
    id: 3,
    heading: 'Not a reseller of any brand',
    desc: [
      'At our Store  , we specialize in acquiring pre-owned printers, scanners, laptops, and desktops and offering them for sale on our website. It’s important to note that we are an independent seller and not affiliated with any specific brands or manufacturers. Our focus is on providing quality refurbished electronics to our customers without brand partnerships influencing our offerings.',
      `Links to Other Websites Disclaimer
The Sites might contain connections to other websites that are not under the control of DemoPrinter. We have no obligation regarding the connected website nor does connecting constitute support of any connected web page. Connections are given exclusively to the accommodation and data of the Sites’ clients.`,
      'In no event shall our Store   be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the website or the contents of the website. DemoPrinter reserves the right to make additions, deletions, or modifications to the contents on the website at any time without prior notice.',
    ],
  },
  {
    id: 4,
    heading: 'Copyright Disclaimer',
    desc: [
      `All intellectual property rights concerning these materials are vested in our Store   Copying, distribution and any other use of these materials is not permitted without the written permission of our Store  , except and only to the extent otherwise provided in regulations of mandatory law (such as the right to quote), unless otherwise stated for certain materials.`,
    ],
  },
  {
    id: 5,
    heading: 'Your Consent',
    desc: [
      `We’ve updated our Disclaimer to provide you with complete transparency into what is being set when you visit our site and how it’s being used. By using our website, registering an account, or making a purchase, you hereby consent to our Disclaimer and agree to its terms.`,
    ],
  },
  {
    id: 6,
    heading: 'Changes To Our Disclaimer',
    desc: [
      `Should we update, amend or make any changes to this document so that they accurately reflect our website and policies. Unless otherwise required by law, those changes will be prominently posted here. Then, if you continue to use the website, you will be bound by the updated Disclaimer. If you do not want to agree to this or any updated Disclaimer, you can delete your account.`,
    ],
  },
];
