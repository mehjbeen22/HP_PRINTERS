export default function TermAndConditions() {
  return (
    <div className="bg-[#38bdf8] pt-5">
      <div className="flex justify-center">
        <h1 className="text-6xl text-white border-b-4 border-black">
          Terms And Conditions
        </h1>
      </div>
      <div className="p-16">
        <div className="flex justify-center flex-col p-5 shadow-2xl border border-gray-200 rounded-sm bg-white">
          <p>
            By accessing and placing an order with , you confirm that you are in
            agreement with and bound by the terms of website contained in the
            Terms & Conditions outlined below. These terms apply to the entire
            website and any email or other type of communication between you and
            . <br />
            Under no circumstances shall We team be liable for any direct,
            indirect, special, incidental or consequential damages, including,
            but not limited to, loss of data or profit, arising out of the use,
            or the inability to use, the materials on this site, even if We team
            or an authorized representative has been advised of the possibility
            of such damages. If your use of materials from this site results in
            the need for servicing, repair or correction of equipment or data,
            you assume any costs thereof. <br />
            We will not be responsible for any outcome that may occur during the
            course of usage of our resources. We reserve the rights to change
            prices and revise the resources usage policy at any moment.
          </p>
          {termsAndConditions.map(({ id, section, content }) => {
            return (
              <div key={id} className="mt-4">
                <h2 className="font-semibold text-xl mb-2">{section}</h2>
                <p>{content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const termsAndConditions = [
  {
    id: 1,
    section: 'License',
    content:
      'We grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use the website strictly in accordance with the terms of this Agreement. ...',
  },
  {
    id: 2,
    section: 'Definitions and key terms',
    content:
      'To help explain things as clearly as possible in this Terms & Conditions, every time any of these terms are referenced, are strictly defined as: ...',
  },
  {
    id: 3,
    section: 'Restrictions',
    content: 'You agree not to, and you will not permit others to: ...',
  },
  {
    id: 4,
    section: 'Return and Refund Policy',
    content:
      'As with any shopping experience, there are terms and conditions that apply to transactions at . We’ll be as brief as our attorneys will allow. The main thing to remember is that by placing an order or making a purchase at , you agree to the terms along with ’s Privacy Policy. If, for any reason, You are not completely satisfied with any good that we provide, don’t hesitate to contact us and we will discuss any of the issues you are going through with our product.',
  },
  {
    id: 5,
    section: 'Your Suggestions',
    content:
      'Any feedback, comments, ideas, improvements or suggestions (collectively, “Suggestions”) provided by you to Wewith respect to the website shall remain the sole and exclusive property of . Weshall be free to use, copy, modify, publish, or redistribute the Suggestions for any purpose and in any way without any credit or any compensation to you.',
  },

  {
    id: 6,
    section: 'Your Consent',
    content:
      'We’ve updated our Terms & Conditions to provide you with complete transparency into what is being set when you visit our site and how it’s being used. By using our website, registering an account, or making a purchase, you hereby consent to our Terms & Conditions.',
  },

  {
    id: 7,
    section: 'Links to Other Websites Cookies',
    content: `We uses “Cookies” to identify the areas of our website that you have visited. A Cookie is a small piece of data stored on your computer or mobile device by your web browser. We use Cookies to enhance the performance and functionality of our website but are non-essential to their use. Most web browsers can be set to disable the use of Cookies. However, if you disable Cookies, you may not be able to access functionality on our website correctly or at all. We never place Personally Identifiable Information in Cookies.`,
  },
  {
    id: 8,
    section: 'Changes To Our Terms & Condition',
    content: `You acknowledge and agree that  reserves the right to cease providing the website (or any features within the website) to you or to users, either permanently or temporarily, at ’s sole discretion, without prior notice. You may discontinue using the website at any time, and you are not required to notify  when you choose to do so. If  disables access to your account, you may lose access to the website, your account details, or any associated files or materials.
If we make changes to our Terms & Conditions, we will post those updates on this page and update the modification date below. Please review this page periodically for any modifications to stay informed about our policies.`,
  },
  {
    id: 9,
    section: 'Modifications to Our website',
    content:
      'We reserves the right to modify, suspend or discontinue, temporarily or permanently, the website to which it connects, with or without notice and without liability to you.',
  },
  {
    id: 10,
    section: 'Updates to Our website',
    content: `We may from time to time provide enhancements or improvements to the features/ functionality of the website, which may include patches, bug fixes, updates, upgrades and other modifications (“Updates”). 

Updates may modify or delete certain features and/or functionalities of the website. You agree that Wehas no obligation to (i) provide any Updates, or (ii) continue to provide or enable any particular features and/or functionalities of the website to you.
You further agree that all Updates will be (i) deemed to constitute an integral part of the website, and (ii) subject to the terms and conditions of this Agreement.`,
  },
  {
    id: 11,
    section: 'Term and Termination',
    content: `This Agreement shall remain in effect until terminated by you or . 
Wemay, in its sole discretion, at any time and for any or no reason, suspend or terminate this Agreement with or without prior notice. 

This Agreement will terminate immediately, without prior notice from , in the event that you fail to comply with any provision of this Agreement. You may also terminate this Agreement by deleting the website and all copies thereof from your computer. 
Upon termination of this Agreement, you shall cease all use of the website and delete all copies of the website from your computer.
Termination of this Agreement will not limit any of ’s rights or remedies at law or in equity in case of breach by you (during the term of this Agreement) of any of your obligations under the present Agreement.`,
  },
  {
    id: 12,
    section: 'Copyright Infringement Notice',
    content: `If you are a copyright owner or such owner’s agent and believe any material on our website constitutes an infringement on your copyright, please contact us setting forth the following information: (a) a physical or electronic signature of the copyright owner or a person authorized to act on his behalf; (b) identification of the material that is claimed to be infringing; (c) your contact information, including your address, telephone number, and an email; (d) a statement by you that you have a good faith belief that use of the material is not authorized by the copyright owners; and (e) the a statement that the information in the notification is accurate, and, under penalty of perjury you are authorized to act on behalf of the owner.`,
  },
  {
    id: 13,
    section: 'No Warranties',
    content: `Without limiting the foregoing, neither Wenor any ’s provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the website, or the information, content, and materials or products included thereon; (ii) that the website will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the website. `,
  },
  {
    id: 14,
    section: 'Limitation of Liability',
    content:
      'Notwithstanding any damages that you might incur, the entire liability of Weand any of its suppliers under any provision of this Agreement and your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by you for the website. ',
  },

  {
    id: 15,
    section: ' Amendments to this Agreement',
    content: `Wereserves the right, at its sole discretion, to modify or replace this Agreement at any time. If a revision is material we will provide at least 30 days’ notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. 

By continuing to access or use our website after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use .
Entire Agreement
The Agreement constitutes the entire agreement between you and Weregarding your use of the website and supersedes all prior and contemporaneous written or oral agreements between you and .
You may be subject to additional terms and conditions that apply when you use or purchase other 
’s website, which Wewill provide to you at the time of such use or purchase.`,
  },

  {
    id: 16,
    section: 'Updates to Our Terms',
    content: `We may change our website and policies, and we may need to make changes to these Terms so that they accurately reflect our website and policies. Unless otherwise required by law, we will notify you (for example, through our website) before we make changes to these Terms and give you an opportunity to review them before they go into effect. Then, if you continue to use the website, you will be bound by the updated Terms. If you do not want to agree to these or any updated Terms, you can delete your account.
Intellectual Property
The website and its entire contents, features and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection and arrangement thereof), are owned by , its licensors or other providers of such material and are protected by US and international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws. The material may not be copied, modified, reproduced, downloaded or distributed in any way, in whole or in part, without the express prior written permission of , unless and except as is expressly provided in these Terms & Conditions. Any unauthorized use of the material is prohibited.
Notice of Dispute
In the event of a dispute, you or Wemust give the other a Notice of Dispute, which is a written statement that sets forth the name, address, and contact information of the party giving it, the facts giving rise to the dispute, and the relief requested. You must send any Notice of Dispute via email to: support@.com. Wewill send any Notice of Dispute to you by mail to your address if we have it, or otherwise to your email address. You and Wewill attempt to resolve any dispute through informal negotiation within sixty (60) days from the date the Notice of Dispute is sent. After sixty (60) days, you or Wemay commence arbitration.`,
  },
];
