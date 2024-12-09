import React from "react";
import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";

function HomePage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  // console.log(searchParams, 'SEARCH PARAM');

  return (
    <div>
      <section>
        <CategoriesList
          category={searchParams.category}
          search={searchParams.search}
        />
        <PropertiesContainer
          category={searchParams.category}
          search={searchParams.search}
        />
      </section>
    </div>
  );
}

export default HomePage;
