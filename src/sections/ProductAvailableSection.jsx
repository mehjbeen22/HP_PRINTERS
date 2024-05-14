import Card from 'react-bootstrap/Card';

const ProductAvailableSection = () => {
  return (
    <main className="px-8 py-6 bg-[#38bdf8] my-10">
      <div className=" grid grid-cols-3">
        {array.map(({ id, imageUrl, heading }) => (
          <div key={id} style={{ width: '20rem' }}>
            <Card.Img variant="top" src={imageUrl} className="h-60" />
            <div className="bg-blue-800 py-6 text-center text-white hover:bg-black ">
              <Card.Title>{heading}</Card.Title>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductAvailableSection;

const array = [
  {
    id: 1,
    imageUrl:
      'https://bsmedia.business-standard.com/_media/bs/img/article/2023-08/03/full/1691084532-0022.jpg',
    heading: 'Laptop & Cumputers',
  },
  {
    id: 2,
    imageUrl:
      'https://5.imimg.com/data5/SELLER/Default/2021/11/PU/QK/IJ/22794873/monitor-and-screen-accessories-250x250.jpg',
    heading: 'Moniters & Accessories',
  },
  {
    id: 3,
    imageUrl:
      'https://mediaserver.goepson.com/ImConvServlet/imconv/79b5418733d4d325baf3501203b0521c02805eef/original?use=productpictures&hybrisId=B2C&assetDescr=mobile-wireless-solution_connect_shopping_fg-tile',
    heading: 'Printers & Scanners',
  },
];
