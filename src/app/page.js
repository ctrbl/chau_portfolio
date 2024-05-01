import { ClientOnly } from './client';
import "../../public/css/App.css";

export function generateStaticParams() {
  return [{ slug: [''] }]
}
 
export default function Page() {
  return <ClientOnly />
}