import { getSession } from "next-auth/react";

export default function requireAuth(getServerSidePropsFunc, allowedRoles) {
  return async (context) => {
    const session = await getSession(context);

    if (!session || !allowedRoles.includes(session.user.role)) {
      return {
        redirect: { destination: "/auth/signin", permanent: false },
      };
    }

    return await getServerSidePropsFunc(context, session);
  };
}
