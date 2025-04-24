import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import connectDB from "@/app/utils/db";
import User from "@/app/models/User";
import Instructor from "@/app/models/Instructor";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "you@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
<<<<<<< HEAD
        await connectDB();
        let user = await User.findOne({ email: credentials.email });

        if (!user) {
          user = await Instructor.findOne({ email: credentials.email });

          if (!user) {
            throw new Error("User not found");
          }
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        );
        if (!isPasswordValid) throw new Error("Invalid password");

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
          dob: user.dob || null,
          gender: user.gender || null,
          phoneNumber: user.phoneNumber || null,
        };
=======
        try {
          await connectDB();
          let user = await User.findOne({ email: credentials.email });

          if (!user) {
            user = await Instructor.findOne({ email: credentials.email });

            if (!user) {
              throw new Error("User not found");
            }
          }

          const isPasswordValid = await compare(
            credentials.password,
            user.password
          );
          if (!isPasswordValid) throw new Error("Invalid password");

          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            role: user.role,
            dob: user.dob || null,
            gender: user.gender || null,
            phoneNumber: user.phoneNumber || null,
          };
        } catch (error) {
          console.error("Auth error:", error);
          throw error;
        }
>>>>>>> 5fe4666 (Update project)
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.dob = user.dob;
        token.gender = user.gender;
        token.phoneNumber = user.phoneNumber;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
<<<<<<< HEAD
        session.user._id = token.id; // Important for consistency
=======
        session.user._id = token.id;
>>>>>>> 5fe4666 (Update project)
        session.user.role = token.role;
        session.user.dob = token.dob;
        session.user.gender = token.gender;
        session.user.phoneNumber = token.phoneNumber;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
<<<<<<< HEAD
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export const GET = handler;
export const POST = handler;
=======
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
>>>>>>> 5fe4666 (Update project)
