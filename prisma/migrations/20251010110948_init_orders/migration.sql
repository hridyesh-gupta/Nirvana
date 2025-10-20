-- CreateTable
CREATE TABLE `orders` (
    `id` CHAR(36) NOT NULL,
    `orderNumber` VARCHAR(50) NOT NULL,
    `customerName` VARCHAR(255) NOT NULL,
    `customerEmail` VARCHAR(320) NOT NULL,
    `customerPhone` VARCHAR(20) NOT NULL,
    `deliveryAddress` VARCHAR(500) NULL,
    `city` VARCHAR(100) NULL,
    `postalCode` VARCHAR(20) NULL,
    `orderType` ENUM('delivery', 'pickup') NOT NULL,
    `paymentMethod` ENUM('stripe', 'cod') NOT NULL,
    `paymentStatus` ENUM('pending', 'paid', 'failed') NOT NULL DEFAULT 'pending',
    `stripeSessionId` VARCHAR(255) NULL,
    `subtotal` DECIMAL(10,2) NOT NULL,
    `deliveryFee` DECIMAL(10,2) NOT NULL DEFAULT 0,
    `discount` DECIMAL(10,2) NOT NULL DEFAULT 0,
    `total` DECIMAL(10,2) NOT NULL,
    `status` ENUM('pending', 'confirmed', 'preparing', 'out_for_delivery', 'delivered', 'cancelled') NOT NULL DEFAULT 'pending',
    `specialInstructions` VARCHAR(1000) NULL,
    `createdAt` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` TIMESTAMP(3) NOT NULL,

    UNIQUE INDEX `orders_orderNumber_key`(`orderNumber`),
    UNIQUE INDEX `orders_stripeSessionId_key`(`stripeSessionId`),
    INDEX `orders_customerEmail_idx`(`customerEmail`),
    INDEX `orders_createdAt_idx`(`createdAt`),
    INDEX `orders_status_idx`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderItem` (
    `id` CHAR(36) NOT NULL,
    `orderId` CHAR(36) NOT NULL,
    `productId` VARCHAR(100) NOT NULL,
    `productName` VARCHAR(255) NOT NULL,
    `price` DECIMAL(10,2) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `selectedSauce` VARCHAR(100) NULL,
    `selectedFlavor` VARCHAR(100) NULL,
    `selectedMixOption` VARCHAR(100) NULL,
    `createdAt` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `OrderItem_orderId_idx`(`orderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `OrderItem` ADD CONSTRAINT `OrderItem_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `orders`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
