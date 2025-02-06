// scripts/populateUsers.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      phone: "1234567890",
      name: "Alice",
      profilePicture: "https://example.com/alice.jpg",
      email: "alice@example.com",
      currentLat: 37.7749,
      currentLng: -122.4194,
    },
    {
      phone: "9876543210",
      name: "Bob",
      profilePicture: "https://example.com/bob.jpg",
      email: "bob@example.com",
      currentLat: 34.0522,
      currentLng: -118.2437,
    },
    {
      phone: "5555555555",
      name: "Charlie",
      profilePicture: "https://example.com/charlie.jpg",
      email: "charlie@example.com",
      currentLat: 40.7128,
      currentLng: -74.006,
    },
  ];

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log("Users have been added to the database.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
