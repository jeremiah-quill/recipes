import { getSession } from "next-auth/react";
import DashboardLayout from "@/components/DashboardLayout";

export default function ShoppingListPage() {
  return (
    <DashboardLayout>
      <>
        <h1>Shopping List</h1>
        <p>This is the Shopping List page. It is protected by authentication.</p>
      </>
    </DashboardLayout>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
