import { getSession } from "next-auth/react";
import DashboardLayout from "../../components/DashboardLayout";

export default function RecipePage({ recipe }: any) {
  return (
    <DashboardLayout>
      <>
        <h1>Recipe Details</h1>
        <p>This is the details page for {recipe}. It is protected by authentication.</p>
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

  // get slug to use when fetching recipe details
  const { recipe } = context.params;

  // TODO: Fetch recipe details from database and return them as props if they exist, otherwise redirect to 404 page
  return {
    props: { recipe },
  };
}
