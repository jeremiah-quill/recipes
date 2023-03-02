import Layout from "../components/Layout";
import { getSession } from "next-auth/react";

export default function ProfilePage() {
  return (
    <Layout>
      <div>you should only see this if you're logged in</div>
    </Layout>
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
