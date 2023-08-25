"use client";
import { useRouter } from "next/navigation";

export default function aboutPage() {
  const router = useRouter();
  return (
    <section>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
        repellendus quidem sequi, laudantium excepturi soluta ipsa reprehenderit
        atque aliquid facere eveniet voluptatem. Veniam ex adipisci ipsum saepe
        cum, repudiandae voluptatum, voluptas repellendus rem doloremque tenetur
        placeat minus. At facilis repudiandae ipsam similique. Qui nostrum
        suscipit consequatur, exercitationem accusamus vel nesciunt. Accusamus
        atque recusandae nobis alias aperiam officiis fugit ex omnis ad, non
        molestias expedita, voluptatum odit assumenda id nihil sapiente animi
        quis odio! Tempora laudantium laborum iste. Assumenda ipsum dolore,
        fugit deserunt, in quidem, non harum maxime maiores quam ad. Nemo
        officiis ullam commodi quis corrupti, repellat enim praesentium.
        Aliquam.
      </p>
      <button
        className="bg-sky-400 py-2 px-3 rounded-md"
        onClick={() => {
          alert("volviendo a home page");
          router.push("/");
        }}
      >
        Home
      </button>
    </section>
  );
}
