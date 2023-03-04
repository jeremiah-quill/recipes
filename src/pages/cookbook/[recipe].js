import { getSession } from "next-auth/react";
import DashboardLayout from "../../components/DashboardLayout";

export default function RecipePage({ recipe }) {
  console.log(recipe);
  return (
    <DashboardLayout>
      <div className="p-2">recipe details for {recipe}</div>
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

  const { recipe } = context.params; // Use `context.params` to get dynamic params
  console.log("recipe", recipe);

  return {
    props: { recipe },
  };
}
