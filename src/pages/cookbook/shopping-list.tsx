import { getSession } from "next-auth/react";
import DashboardLayout from "@/components/DashboardLayout";

export default function ShoppingListPage() {
  return (
    <DashboardLayout>
      <div className="p-2 w-full">shopping list</div>
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
