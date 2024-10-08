import { useParams } from "react-router-dom";

export default function NewsDetails() {
  const { slug } = useParams();

  if (slug === "batik-in-atb") {
    return <div>Новина про АТБ</div>;
  } else if (slug === "coffee-arden") {
    return <div>Новина про каву ARDEN</div>;
  } else if (slug === "made-in-ukraine") {
    return <div>Зроблено в Україні</div>;
  } else {
    return <div>Новина не знайдена</div>;
  }
}
