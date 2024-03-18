/*
  Warnings:

  - You are about to drop the column `name` on the `Restaurant` table. All the data in the column will be lost.
  - Added the required column `restaurant_address` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurant_image_url` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurant_name` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "name",
ADD COLUMN     "restaurant_address" TEXT NOT NULL,
ADD COLUMN     "restaurant_image_url" TEXT NOT NULL,
ADD COLUMN     "restaurant_name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "restaurant_id" INTEGER NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_image_url" TEXT NOT NULL,
    "product_price" DECIMAL(65,30) NOT NULL,
    "product_category" TEXT,
    "active_discount" BOOLEAN NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
