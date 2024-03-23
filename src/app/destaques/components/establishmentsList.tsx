/* eslint-disable @next/next/no-img-element */
"use client";
import { useVariant } from "@/hooks/useVariant";
import { EstablishmentProps } from "@/types";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const EstablishmentsList = (data: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-450px 0px",
  });
  const { setVariant } = useVariant();

  useEffect(() => {
    if (isInView) {
      setVariant("light");
    } else {
      setVariant("dark");
    }
  }, [isInView, setVariant]);

  const [filtredData, setFiltredData] = useState<EstablishmentProps[]>([]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((item) => item !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  useEffect(() => {
    if (activeFilters.length > 0) {
      const filtred = data?.data?.filter((item: EstablishmentProps) => {
        if (activeFilters.includes("accessibility")) {
          if (!item.accessibility) {
            return false;
          }
        }
        if (activeFilters.includes("$")) {
          if (item.price_average !== "$") {
            return false;
          }
        }
        if (activeFilters.includes("$$")) {
          if (item.price_average !== "$$") {
            return false;
          }
        }
        if (activeFilters.includes("$$$")) {
          if (item.price_average !== "$$$") {
            return false;
          }
        }
        return true;
      });
      if (activeFilters.includes("alphabeticalOrder")) {
        filtred.sort((a: EstablishmentProps, b: EstablishmentProps) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }

          return 0;
        });
      }
      setFiltredData(filtred);
    } else {
      setFiltredData(data?.data);
    }
  }, [activeFilters, data?.data]);

  return (
    <section
      ref={ref}
      className="min-h-screen h-auto w-full flex flex-col gap-24"
    >
      <div className="flex w-full max-w-screen-2xl mx-auto justify-between mt-[10rem] text-fontcolor-100 flex-wrap gap-4 p-4 md:p-2 lg:p-0">
        <div className="flex gap-5 flex-wrap">
          {data?.data?.length > 0 && (
            <Link
              href={`estabelecimento/${
                data?.data[Math.floor(Math.random() * data?.data?.length)].id
              }`}
              className="filterButton border-fontcolor-100"
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path
                  d="M10.7785 20.0369C10.9898 20.1861 11.2317 20.2865 11.4866 20.3307C11.7414 20.3749 12.003 20.3618 12.2522 20.2925C12.5014 20.2232 12.7321 20.0993 12.9275 19.9298C13.1229 19.7603 13.2782 19.5495 13.3821 19.3126L14.2071 16.8055C14.408 16.2024 14.7464 15.6543 15.1957 15.2047C15.645 14.755 16.1928 14.4161 16.7957 14.2148L19.1935 13.4358C19.534 13.3166 19.8285 13.0936 20.0357 12.7983C20.1952 12.574 20.2991 12.315 20.3388 12.0427C20.3785 11.7703 20.3529 11.4924 20.2641 11.2319C20.1752 10.9714 20.0257 10.7357 19.8278 10.5444C19.6299 10.3531 19.3894 10.2116 19.126 10.1315L16.7528 9.36011C16.1495 9.15996 15.601 8.82202 15.151 8.37308C14.7009 7.92414 14.3616 7.37654 14.16 6.77368L13.381 4.37689C13.2611 4.03738 13.0388 3.74348 12.7446 3.53582C12.4486 3.33171 12.0975 3.22241 11.738 3.22241C11.3784 3.22241 11.0274 3.33171 10.7314 3.53582C10.4324 3.74697 10.2075 4.04685 10.0885 4.39296L9.29996 6.81975C9.09901 7.40707 8.76699 7.94094 8.32907 8.3809C7.89116 8.82086 7.35884 9.15535 6.77246 9.35904L4.37246 10.1369C4.03095 10.2576 3.73556 10.4818 3.52739 10.7782C3.31922 11.0746 3.20862 11.4286 3.21097 11.7908C3.21333 12.153 3.32853 12.5055 3.54054 12.7991C3.75255 13.0928 4.05084 13.3131 4.39389 13.4294L6.76817 14.2008C7.53805 14.4589 8.21481 14.9382 8.71389 15.5787C8.99889 15.9462 9.21853 16.3587 9.36317 16.8001L10.1432 19.1937C10.2632 19.5344 10.486 19.829 10.7807 20.0369H10.7785ZM7.27175 12.673L4.89317 11.9015C4.89317 11.9015 4.8021 11.8608 4.8021 11.7858C4.80503 11.7592 4.81488 11.7338 4.83067 11.7122C4.84646 11.6906 4.86764 11.6735 4.8921 11.6626L7.28567 10.8858C8.11673 10.5972 8.87002 10.1208 9.48696 9.49362C10.1039 8.86645 10.5679 8.10544 10.8428 7.26975L11.6153 4.89225C11.6153 4.89225 11.6614 4.80225 11.7375 4.80225C11.8135 4.80225 11.8585 4.89225 11.8585 4.89225L12.6332 7.27404C12.9135 8.11628 13.3866 8.88145 14.0147 9.50866C14.6429 10.1359 15.4087 10.6078 16.2514 10.8869L18.6835 11.6744C18.7066 11.6849 18.7265 11.7013 18.7412 11.722C18.7559 11.7427 18.7648 11.767 18.7671 11.7923C18.7636 11.8183 18.7537 11.843 18.7381 11.8642C18.7226 11.8853 18.702 11.9022 18.6782 11.9133L16.2942 12.6869C15.4519 12.9665 14.6864 13.4389 14.0588 14.0665C13.4312 14.6941 12.9588 15.4595 12.6792 16.3019L11.9132 18.659C11.9087 18.688 11.8936 18.7142 11.8708 18.7327C11.848 18.7511 11.8192 18.7604 11.79 18.7587C11.6785 18.7587 11.6635 18.6783 11.6635 18.6783L10.8889 16.2998C10.6108 15.4549 10.1388 14.6868 9.51075 14.0571C8.88265 13.4273 8.11586 12.9533 7.27175 12.673ZM21.2185 26.5523C21.4368 26.7056 21.6975 26.7872 21.9642 26.7858C22.2293 26.787 22.4883 26.7061 22.7057 26.5544C22.9288 26.3959 23.0961 26.1709 23.1835 25.9115L23.5821 24.6869C23.6663 24.4326 23.8087 24.2014 23.9978 24.0117C24.1869 23.822 24.4177 23.679 24.6717 23.594L25.921 23.189C26.1731 23.0995 26.3914 22.9344 26.5462 22.7161C26.7009 22.4979 26.7846 22.2373 26.7857 21.9698C26.7857 21.6954 26.6979 21.4282 26.5352 21.2073C26.3725 20.9864 26.1434 20.8233 25.8814 20.7419L24.6557 20.3455C24.4013 20.2611 24.17 20.1186 23.9803 19.9293C23.7906 19.74 23.6476 19.509 23.5628 19.2548L23.1557 18.0087C23.0679 17.7544 22.9025 17.534 22.6828 17.3786C22.4632 17.2232 22.2003 17.1407 21.9313 17.1426C21.6623 17.1445 21.4006 17.2307 21.1832 17.3892C20.9657 17.5476 20.8035 17.7703 20.7192 18.0258L20.3185 19.2537C20.2364 19.5046 20.0978 19.7334 19.9133 19.9223C19.7289 20.1112 19.5035 20.2552 19.2546 20.3433L18.0053 20.7483C17.7531 20.8379 17.5346 21.0032 17.3799 21.2217C17.2251 21.4401 17.1416 21.701 17.1407 21.9687C17.141 22.2388 17.2263 22.5019 17.3846 22.7208C17.5429 22.9397 17.766 23.1031 18.0225 23.188L19.2482 23.5865C19.5033 23.6712 19.735 23.8144 19.9248 24.0048C20.1146 24.1951 20.2571 24.4273 20.341 24.6826L20.7471 25.9287C20.8357 26.1804 21.0005 26.3984 21.2185 26.5523ZM19.7496 22.0587L19.4603 21.9644L19.7635 21.8615C20.2499 21.6931 20.6909 21.4146 21.052 21.0477C21.4131 20.6809 21.6846 20.2356 21.8453 19.7465L21.9396 19.4573L22.035 19.7487C22.1985 20.2417 22.4748 20.6897 22.842 21.0571C23.2092 21.4244 23.657 21.701 24.15 21.8648L24.4639 21.9719L24.1735 22.0651C23.6807 22.2297 23.233 22.5068 22.8659 22.8744C22.4988 23.2421 22.2223 23.6902 22.0585 24.1833L21.9642 24.4726L21.87 24.1812C21.7065 23.6865 21.4294 23.237 21.0611 22.8687C20.6927 22.5003 20.2432 22.2233 19.7485 22.0598L19.7496 22.0587Z"
                  fill="#010100"
                />
              </svg>
              descubra
            </Link>
          )}
          <span
            className="filterButton border-fontcolor-100"
            onClick={() => handleFilter("accessibility")}
            style={
              activeFilters.includes("accessibility")
                ? {
                    background: "#010100",
                    color: "#FFFEFB",
                    borderColor: "#FFFEFB",
                  }
                : {}
            }
          >
            acessibilidade
          </span>
        </div>
        <span
          className={`filterButton border-fontcolor-100`}
          style={
            activeFilters.includes("alphabeticalOrder")
              ? {
                  background: "#010100",
                  color: "#FFFEFB",
                  borderColor: "#FFFEFB",
                }
              : {}
          }
          onClick={() => handleFilter("alphabeticalOrder")}
        >
          a-z
        </span>
        <div className="flex gap-5 flex-wrap">
          <span
            className="filterButton border-fontcolor-100"
            onClick={() => handleFilter("$")}
            style={
              activeFilters.includes("$")
                ? {
                    background: "#010100",
                    color: "#FFFEFB",
                    borderColor: "#FFFEFB",
                  }
                : {}
            }
          >
            $
          </span>
          <span
            className="filterButton border-fontcolor-100"
            onClick={() => handleFilter("$$")}
            style={
              activeFilters.includes("$$")
                ? {
                    background: "#010100",
                    color: "#FFFEFB",
                    borderColor: "#FFFEFB",
                  }
                : {}
            }
          >
            $$
          </span>
          <span
            className="filterButton border-fontcolor-100"
            onClick={() => handleFilter("$$$")}
            style={
              activeFilters.includes("$$$")
                ? {
                    background: "#010100",
                    color: "#FFFEFB",
                    borderColor: "#FFFEFB",
                  }
                : {}
            }
          >
            $$$
          </span>
        </div>
      </div>
      {data?.data?.length > 0 && (
        <ul className="mt-12 divide-y border-t border-b border-main-50 divide-main-50 text-main-50">
          {filtredData?.map((item: EstablishmentProps) => {
            return (
              <Link
                href={`/estabelecimento/${item.id}`}
                key={item.id}
                className="establishmentItemList cursor-pointer hover:backdrop-brightness-95 transition duration-300"
              >
                <div>
                  <span className="w-12 h-12 items-center rounded-full p-2 border-2 border-main-50">
                    <img src="/dark-right-arrow.svg" alt="arrow" />
                  </span>
                  <h5>{item.name}</h5>
                </div>
              </Link>
            );
          })}
        </ul>
      )}

      {data?.data?.length <= 0 && (
        <h3 className="grotesk text-fontcolor-190 font-normal lg:text-5xl md:text-3xl text-xl text-center">
          NÃO CONSEGUIMOS ENCONTRAR RESULTADOS
        </h3>
      )}
    </section>
  );
};
