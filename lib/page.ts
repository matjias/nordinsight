import axios from "axios";

const BASE_URL = "https://nordinsight.com/wp-json/wp/v2";
const BASE_MENU_URL = "http://nordinsight.com/wp-json/wp-api-menus/v2/menus/2"

export async function getAllPageIds() {
  const res = await axios.get(BASE_MENU_URL);
  return res.data.items.map((page) => {
    return {
      params: {
        slug: "" + page.object_slug
      },
    };
  });
}


export async function getPageData(slug) {
  const res = await axios.get(BASE_URL + "/pages/");
  const page = res.data.find(p => p.slug === slug)
  return {
      slug: page.slug,
    ...page,
  };
}

export async function getAllMenuItems() {
  const res = await axios.get(BASE_MENU_URL);
  return res.data.items
}
