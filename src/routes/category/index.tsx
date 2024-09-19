import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import { initialSettings } from "~/utils/endpoints";

// TODO: Set-up a mono-repo. of some sort to follow DRY(Don't repeat yourself) principle.
// A.K.A. ENUMS:
const itemCategories = [
  "ELECTRONICS",
  "FASHION",
  "FURNITURE",
  "HARDWARE_ITEM",
  "MEDIA",
  "TOYS_AND_HOBBIES",
] as const;
const productPriceCurrency = ["PHP", "USD"] as const;
const productQuality = ["LIKE_BRAND_NEW", "SLIGHTLY_USED", "USED"] as const;

type ProductImagesType = {
  alternateText: string;
  customBorder: string;
  isHidden: boolean;
  orderNumber: number;
  source: string;
};

type ProductType = {
  id: string;
  brand: string;
  category: (typeof itemCategories)[number];
  createdDate: Date;
  description: string;
  images: ProductImagesType[];
  modifiedDate: Date;
  name: string;
  quality: typeof productQuality;
  quantity: number;
  price: {
    value: number;
    currency: typeof productPriceCurrency;
  };
};

// PURE TYPES:
type InitialSettingsType = {
  itemCategories: typeof itemCategories;
  shopName: string;
  totalProducts: number;
  totalUsers: number;
  newArrivals: ProductType[];
};

// FUNCTIONS
export const useInitialSettingsData = routeLoader$(async () => {
  const response = await fetch(initialSettings, {
    headers: {
      Accept: "application/json",
    },
    method: "GET",
  });
  const { result } = await response.json();
  return result.data.json as InitialSettingsType;
});

export default component$(() => {
  const { value } = useInitialSettingsData();
  const { itemCategories, shopName } = value;

  return (
    <div>
      <h1 class="capitalize text-primary">{shopName}</h1>
      <ul>
        {itemCategories.map((category, index) => {
          return (
            <li key={`${category}${index}`}>
              <button>{category}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Category",
  meta: [
    {
      name: "description",
      content: "Item categories here",
    },
  ],
};
