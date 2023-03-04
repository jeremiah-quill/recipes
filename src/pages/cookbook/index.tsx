import { getSession } from "next-auth/react";
import DashboardLayout from "../../components/DashboardLayout";

export default function CookbookPage() {
  return (
    <DashboardLayout>
      <>
        <h1>Cookbook index</h1>
        <p>This is the Cookbook index page. It is protected by authentication.</p>
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

  // TODO: get all users recipes and pass to props
  return {
    props: {},
  };
}
