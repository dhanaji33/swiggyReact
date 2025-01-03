export const BASEIMGURL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
export const FOODLIST =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=latitude&lng=longitude&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
export const RESTAURANTDETAILS =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&&lat=latitude&lng=longitude&restaurantId=REST_ID";
export const SEARCHLOCATION =
  "https://www.swiggy.com/dapi/misc/place-autocomplete?input=INPUT_DATA&types=";
export const ADDRESSLATLONG =
  "https://nominatim.openstreetmap.org/search?q=ADDRESS_DATA&format=json&addressdetails=1";
export const COLLECTION =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=latitude&lng=longitude&COLLECTION_ID";
export const SUPPORTED_LANGUGAGE = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "de", name: "German" },
];
