import { getSession } from "next-auth/react";
import DashboardLayout from "../../components/DashboardLayout";

export default function CookbookPage() {
  return (
    <DashboardLayout>
      <div className="p-2">dashboard index</div>
    </DashboardLayout>
  );
}

export async function getServerSideProps(context) {
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
