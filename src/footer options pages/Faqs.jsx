export default function Faqs() {
  return (
    <div className="bg-[#38bdf8] pt-5 mt-10">
      <div className="flex justify-center">
        <h1 className="text-6xl text-white border-b-4 border-black">FAQ'S</h1>
      </div>
      <div className="p-16">
        <div className="flex justify-center flex-col p-5 shadow-2xl border border-gray-200 rounded-sm bg-white">
          {faqsArray.map(({ id, ques, ans }) => {
            return (
              <div key={id}>
                <h2 className="font-semibold text-xl mb-2">{ques}</h2>
                {Array.isArray(ans) ? (
                  <ul className="my-3">
                    {ans.map((value, index) => (
                      <li key={index} className="list-disc my-2">
                        {value}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{ans}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const faqsArray = [
  {
    id: 1,
    ques: 'What Does “Refurbished” Mean?',
    ans: [
      `Refurbished products are items that have been previously owned but have undergone multiple testings and repairs to ensure they meet high-quality standards. Our refurbished printers, scanners, laptops, and desktops are fully functional and come with a warranty.`,
    ],
  },
  {
    id: 2,
    ques: 'Are Refurbished Products Reliable?',
    ans: [
      ` Yes, our refurbished products are thoroughly inspected, tested, and restored to like-new condition by our certified technicians. They are reliable and offer great value for money.`,
    ],
  },
  {
    id: 3,
    ques: 'Do You Provide Support For Setting Up Printers, Scanners, And Other Devices?',
    ans: [
      `Yes, we offer comprehensive support services for setting up and troubleshooting printers, scanners, desktops, WiFi systems, and email (including Outlook). Our knowledgeable support team is here to assist you.`,
    ],
  },
  {
    id: 4,
    ques: 'How Can I Contact Customer Support?',
    ans: [
      'You can reach our customer support team via email. Visit our Contact Us page for more information on how to get in touch with us.',
    ],
  },
  {
    id: 5,
    ques: 'How Would I Know If The Technician Is An Expert Or Not?',
    ans: [
      'Our technicians are certified by CompTIA A+ Certification which is recognized globally. ',
    ],
  },
  {
    id: 6,
    ques: 'Why is my printer taking so long?',

    ans: [
      `If your printer is taking a long time to function, this could indicate an issue with the connection or a dodgy file. To resolve this, you need to address each possible fault.Firstly, check that everything is properly connected. Check the settings on your PC, laptop or mobile device and ensure that everything is fully linked up. If everything appears okay with the connection, check to see that the file is safe. If there is an issue with the file, then it is likely that the document will not print. A simple, quick-fire way to test this is to simply double click to open the file. If an error message pops up, and the file does not open, then there is a strong chance that it is corrupt.`,
    ],
  },
  {
    id: 7,
    ques: 'How do I install paper trays?',
    ans: [
      'Your paper trays should always come with full installation instructions to guide you through the set-up process. If you are having issues with this, or if you are struggling to locate these instructions, please don’t hesitate to contact us. There are some great installation tutorials online, too!',
      `a) If the enterprise has at least two years of experience in carrying out the permitted activities, on the basis of which it applies to obtain the status`,
      `b) if the enterprise is a representative of a non-resident enterprise, which has at least two years of experience in the permitted activities.`,
    ],
  },
  {
    id: 8,
    ques: 'What are the media restrictions with paper trays?',
    ans: [
      'With any paper tray, there will be media restrictions. What those restrictions are will depend on the paper tray that you have bought. Some trays have a higher capacity than others and so on, so this will completely vary. When you buy your paper tray(s), this information should come with the item itself',
    ],
  },
  {
    id: 9,
    ques: 'Can I come to your office to buy a printer?',
    ans: 'Unfortunately, not, no – although we do love meeting our customers! Our service is for delivery only, and all orders must be made either online or via telephone.',
  },

  {
    id: 10,
    ques: 'Why can’t I scan to network?',
    ans: [
      `If you are experiencing difficulty scanning to a network, then this is most likely to be a connectivity issue. Double-check to ensure that everything is properly connected and try again. If the issue persists after you have trouble-shooted, then it may be worth contacting the manufacturer directly to report the issue. More often than not, though, a network connectivity failure is highly resolvable.`,
    ],
  },
];
