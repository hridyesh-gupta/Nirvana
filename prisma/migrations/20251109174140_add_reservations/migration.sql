-- CreateTable
CREATE TABLE `reservations` (
    `id` CHAR(36) NOT NULL,
    `reservationNumber` VARCHAR(50) NOT NULL,
    `customerName` VARCHAR(255) NOT NULL,
    `customerEmail` VARCHAR(320) NOT NULL,
    `customerPhone` VARCHAR(20) NOT NULL,
    `reservationDate` TIMESTAMP(3) NOT NULL,
    `reservationTime` VARCHAR(10) NOT NULL,
    `numberOfGuests` INTEGER NOT NULL,
    `specialRequests` VARCHAR(1000) NULL,
    `createdAt` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `reservations_reservationNumber_key`(`reservationNumber`),
    INDEX `reservations_customerEmail_idx`(`customerEmail`),
    INDEX `reservations_reservationDate_idx`(`reservationDate`),
    INDEX `reservations_reservationDate_reservationTime_idx`(`reservationDate`, `reservationTime`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

