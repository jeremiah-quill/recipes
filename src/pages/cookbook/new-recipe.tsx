import { getSession } from "next-auth/react";
import DashboardLayout from "../../components/DashboardLayout";

export default function NewRecipePage() {
  return (
    <DashboardLayout>
      <>
        <h1>New Recipe</h1>
        <p>This is the New Recipe form page. It is protected by authentication.</p>
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
