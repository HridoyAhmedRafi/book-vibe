import Banner from "@/components/homepage/Banner";
import Books from "@/components/homepage/Books";

const page = () => {
  return (
    <div>
      <div className="container mx-auto px-4">
        <Banner></Banner>
        <Books></Books>
      </div>
    </div>
  );
};

export default page;
