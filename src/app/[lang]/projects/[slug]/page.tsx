import { detailPage } from "@/lib/collection-pages";
const d = detailPage("projects");
export const dynamicParams = false;
export const generateStaticParams = d.generateStaticParams;
export const generateMetadata = d.generateMetadata;
export default d.Page;
