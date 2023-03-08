import { getSession } from "next-auth/react";

import DashboardLayout from "@/components/DashboardLayout";

export default function CategoriesAndTags() {
  return (
    <DashboardLayout>
      <>
        <h1>Categories and Tags</h1>
        <p>This is the Categories and Tags page. It is protected by authentication.</p>
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
      },
    };
  }
  return {
    props: {},
  };
}
