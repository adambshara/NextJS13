import Image from "next/image";
import coffee from "@/public/images/coffee.jpg";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/authOptions";
import { getSession } from "next-auth/react";
import HeavyComponents from "./components/HeavyComponents";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
      <h1>Hello {session && <span>{session.user!.name} </span>}</h1>

      <Link href="/users">Users</Link>
      <ProductCard />

      <h2>Hello World</h2>
      <HeavyComponents />
      {/* <Image src={coffee} alt="coffee" /> */}
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="React Course Book"
        width={300}
        height={170}
        fill
        style={{objectFit:'cover'}}
      /> */}
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="React Course Book"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width:768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
    </main>
  );
}
