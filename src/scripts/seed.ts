import mongoose from 'mongoose';
import { Fact } from '../models/Fact';
import { Recipe } from '../models/Recipe';
import { initialFacts, initialRecipes } from './seed-data';

// Load environment variables via Node.js native loadEnvFile
try { process.loadEnvFile('.env.local'); } catch {}
try { process.loadEnvFile('.env'); } catch {}

const MONGODB_URI = process.env.MONGODB_URI;

async function seedDatabase() {
  if (!MONGODB_URI) {
    console.error('❌ MONGODB_URI is not set in environment or .env.local');
    process.exit(1);
  }

  console.log('🌱 Starting MongoDB database seeding...');
  console.log('Connecting to MongoDB Atlas...');

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB Atlas successfully.');

    // 1. Seed Facts
    console.log(`Upserting ${initialFacts.length} cultural facts...`);
    const factOps = initialFacts.map((fact) => ({
      updateOne: {
        filter: { id: fact.id },
        update: { $set: fact },
        upsert: true,
      },
    }));
    const factRes = await Fact.bulkWrite(factOps);
    console.log(`Facts seeded: ${factRes.upsertedCount} inserted, ${factRes.modifiedCount} updated.`);

    // 2. Seed Recipes
    console.log(`Upserting ${initialRecipes.length} recipes...`);
    const recipeOps = initialRecipes.map((recipe) => ({
      updateOne: {
        filter: { id: recipe.id },
        update: { $set: recipe },
        upsert: true,
      },
    }));
    const recipeRes = await Recipe.bulkWrite(recipeOps);
    console.log(`Recipes seeded: ${recipeRes.upsertedCount} inserted, ${recipeRes.modifiedCount} updated.`);

    const factCount = await Fact.countDocuments();
    const recipeCount = await Recipe.countDocuments();

    console.log(`\n🎉 Seeding complete! Total in DB: ${factCount} Facts, ${recipeCount} Recipes.\n`);
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during seeding:', error);
    await mongoose.disconnect().catch(() => {});
    process.exit(1);
  }
}

seedDatabase();
