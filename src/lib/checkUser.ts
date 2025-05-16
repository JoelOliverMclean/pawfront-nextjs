import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const checkUser = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) {
    return null;
  }

  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: clerkUser.id,
    },
  });

  if (loggedInUser) {
    return loggedInUser;
  }

  const newUser = await db.user.create({
    data: {
      clerkUserId: clerkUser.id,
      email: clerkUser.emailAddresses[0].emailAddress,
      name: `${clerkUser.firstName} ${clerkUser.lastName}`,
      imageUrl: clerkUser.imageUrl,
    }
  })

  return newUser;
}