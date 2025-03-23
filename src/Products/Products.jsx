import Card from "../components/card/Card";

const Products = () => {
  return (
    <>
      <div className="flex flex-wrap gap-[50px] overflow-y-scroll justify-items-start items-start">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Products;
